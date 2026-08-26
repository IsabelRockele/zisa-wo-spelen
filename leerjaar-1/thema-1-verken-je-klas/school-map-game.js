(()=>{
  const tasks=[
    {text:'Klik op de giraffenklas.',icon:'picto-giraffenklas.png',zones:[{x:49,y:73,rx:4,ry:5}]},
    {text:'Klik op de octopusklas.',icon:'picto-octopusklas.png',zones:[{x:51,y:51,rx:4,ry:6}]},
    {text:'Klik op de refter.',icon:'picto-refter.png',zones:[{x:32,y:82,rx:10,ry:8},{x:40,y:78,rx:10,ry:8}]},
    {text:'Klik op de turnzaal.',icon:'picto-turnzaal.png',zones:[{x:36,y:87,rx:16,ry:11}]},
    {text:'Klik op de leraarskamer.',emoji:'👩‍🏫',zones:[{x:49,y:68,rx:4,ry:5}]},
    {text:'Klik op het secretariaat van juf Ilse.',emoji:'🗂️',zones:[{x:49,y:72,rx:18,ry:17}]},
    {text:'Klik op het bureau van directeur juf Elien.',emoji:'🧑‍💼',zones:[{x:50,y:73,rx:18,ry:17}]},
    {text:'Klik op de klas van juf Anuschka, het vierde leerjaar.',emoji:'4️⃣',zones:[{x:52,y:48,rx:7,ry:10}]},
    {text:'Klik op de klas van juf Lara, het derde leerjaar.',emoji:'3️⃣',zones:[{x:49,y:56,rx:4,ry:4}]},
    {text:'Klik op de klas van juf Isabel, het tweede leerjaar.',emoji:'2️⃣',zones:[{x:49,y:44,rx:4,ry:4}]},
    {text:'Klik op de klas van juf Hanne, het eerste leerjaar.',emoji:'1️⃣',zones:[{x:66,y:23,rx:7,ry:5}]},
    {text:'Klik op de meisjestoiletten.',emoji:'🚺',zones:[{x:77,y:32,rx:4,ry:6}]},
    {text:'Klik op de jongenstoiletten.',emoji:'🚹',zones:[{x:72,y:18,rx:7,ry:5}]},
    {text:'Klik op de klas van meester Davy, het zesde leerjaar.',emoji:'6️⃣',zones:[{x:46,y:35,rx:4,ry:7}]},
    {text:'Klik op de klas van juf Laura, het vijfde leerjaar.',emoji:'5️⃣',zones:[{x:77,y:45,rx:4,ry:6}]}
  ];
  let index=0,score=0,locked=false;
  const say=text=>{
    if(typeof speak==='function') return speak(text);
    if(!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(text);
    utterance.lang='nl-BE'; utterance.rate=.82; utterance.pitch=1.05;
    window.speechSynthesis.speak(utterance);
  };
  function addMenuButton(){
    const games=document.querySelector('#app .games');
    if(!games||games.querySelector('[data-school-map-game]')) return;
    const button=document.createElement('button');
    button.className='game'; button.type='button'; button.dataset.schoolMapGame='';
    button.innerHTML='<span class="emoji">🏫</span><strong>Zoek een plek in onze school</strong><small>Kijk goed op de plattegrond.</small>';
    button.onclick=start;
    games.append(button);
  }
  function start(){
    index=0; score=0; locked=false;
    allThemes.hidden=true;
    gameMenu.hidden=false;
    render();
  }
  function render(){
    const task=tasks[index]; locked=false;
    state.spoken=task.text;
    app.innerHTML=`
      <div class="gamehead"><h1>Onze school</h1><span class="counter">${index+1} / ${tasks.length}</span></div>
      <section class="question school-map-question">
        <div class="school-map-prompt">
          <button class="listen" type="button" aria-label="Lees de opdracht voor">🔊</button>
          ${task.icon?`<img src="assets/${task.icon}" alt="" aria-hidden="true">`:`<span class="school-place-emoji" aria-hidden="true">${task.emoji}</span>`}
          <p class="prompt">${task.text}</p>
        </div>
        <div class="school-plan" role="img" aria-label="De plattegrond van onze school">
          <img src="assets/schoolplattegrond-echt-les4.png" alt="Plattegrond van onze school">
          <button class="school-plan-answer" type="button" aria-label="Kies deze plaats"></button>
          <span class="school-plan-marker" aria-hidden="true"></span>
        </div>
        <p class="feedback" aria-live="polite"></p>
      </section>`;
    document.querySelector('.listen').onclick=()=>say(task.text);
    document.querySelector('.school-plan-answer').onclick=check;
    setTimeout(()=>say(task.text),180);
  }
  function check(event){
    if(locked) return;
    const task=tasks[index],plan=event.currentTarget.getBoundingClientRect();
    const x=(event.clientX-plan.left)/plan.width*100;
    const y=(event.clientY-plan.top)/plan.height*100;
    const pointInPolygon=(px,py,polygon)=>{
      let inside=false;
      for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){
        const [xi,yi]=polygon[i],[xj,yj]=polygon[j];
        if(((yi>py)!==(yj>py))&&(px<(xj-xi)*(py-yi)/(yj-yi)+xi)) inside=!inside;
      }
      return inside;
    };
    const zones=task.zones||[task];
    const right=task.polygons
      ?task.polygons.some(polygon=>pointInPolygon(x,y,polygon))
      :zones.some(zone=>Math.abs(x-zone.x)<=zone.rx&&Math.abs(y-zone.y)<=zone.ry);
    const marker=document.querySelector('.school-plan-marker');
    marker.style.left=x+'%'; marker.style.top=y+'%'; marker.hidden=false;
    const feedback=document.querySelector('.feedback');
    if(!right){
      marker.className='school-plan-marker wrong';
      feedback.textContent='Kijk nog eens goed.';
      say('Kijk nog eens goed.');
      return;
    }
    locked=true; score++;
    marker.className='school-plan-marker correct';
    feedback.textContent='Goed gevonden!';
    say('Goed gevonden!');
    setTimeout(()=>{ index++; index<tasks.length?render():finish(); },700);
  }
  function finish(){
    state.spoken='Klaar. Je vond alle plaatsen in onze school.';
    app.innerHTML=`<section class="result"><div class="trophy">🏫</div><h1>Knap gedaan!</h1><p>Je vond ${score} van de ${tasks.length} plaatsen.</p><button id="schoolMapAgain" type="button">Nog een keer</button></section>`;
    document.querySelector('#schoolMapAgain').onclick=start;
    say(state.spoken);
  }
  const observer=new MutationObserver(addMenuButton);
  observer.observe(document.querySelector('#app'),{childList:true,subtree:true});
  addMenuButton();
})();
