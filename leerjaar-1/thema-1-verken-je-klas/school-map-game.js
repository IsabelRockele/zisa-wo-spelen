(()=>{
  const tasks=[
    {text:'Klik op de giraffenklas.',icon:'picto-giraffenklas.png',polygons:[[[49.7,59.5],[53.8,59.5],[53.8,71.1],[49.7,71.1]]]},
    {text:'Klik op de octopusklas.',icon:'picto-octopusklas.png',polygons:[[[50.9,51.4],[53.8,51.4],[53.8,57.1],[50.9,57.1]]]},
    {text:'Klik op de refter.',icon:'picto-refter.png',polygons:[[[25,78],[44.5,64.5],[45.8,69.2],[26.4,82.8],[25.3,82],[24.8,79.5]]]},
    {text:'Klik op de turnzaal.',icon:'picto-turnzaal.png',polygons:[[[26.4,82.8],[45.8,69.2],[48.8,77.8],[47.9,79],[28,89.4],[27.1,88.8]]]},
    {text:'Klik op de leraarskamer.',emoji:'👩‍🏫',zones:[{x:49,y:68,rx:4,ry:5}]},
    {text:'Klik op het secretariaat van juf Ilse.',emoji:'🗂️',zones:[{x:55,y:66.5,rx:2.5,ry:3}]},
    {text:'Klik op het bureau van directeur juf Elien.',emoji:'🧑‍💼',zones:[{x:55,y:72.6,rx:2.5,ry:3}]},
    {text:'Klik op de klas van juf Anuschka, het vierde leerjaar.',emoji:'4️⃣',polygons:[[[50.9,39.4],[53.8,39.4],[53.8,44.8],[50.9,44.8]]]},
    {text:'Klik op de klas van juf Lara, het derde leerjaar.',emoji:'3️⃣',polygons:[[[50.9,45.2],[53.8,45.2],[53.8,51.1],[50.9,51.1]]]},
    {text:'Klik op de klas van juf Isabel, het tweede leerjaar.',emoji:'2️⃣',polygons:[[[50.9,57.4],[53.8,57.4],[53.8,63.0],[50.9,63.0]]]},
    {text:'Klik op de klas van juf Hanne, het eerste leerjaar.',emoji:'1️⃣',polygons:[[[56.1,18.6],[75.4,18.6],[75.4,25.8],[56.1,25.8]]]},
    {text:'Klik op de meisjestoiletten.',emoji:'🚺',zones:[{x:43,y:33,rx:8,ry:10}]},
    {text:'Klik op de jongenstoiletten.',emoji:'🚹',polygons:[[[77,15],[86.5,15],[86.5,18.5],[77,18.5]]]},
    {text:'Klik op de klas van meester Davy, het zesde leerjaar.',emoji:'6️⃣',polygons:[[[83.6,28.8],[86.4,28.8],[86.4,34.7],[83.6,34.7]]]},
    {text:'Klik op de klas van juf Laura, het vijfde leerjaar.',emoji:'5️⃣',polygons:[[[83.2,43],[86.7,43],[86.7,55.7],[83.2,55.7]]]}
  ];
  let index=0,score=0,locked=false;
  function shuffleTasks(){
    const previousFirst=tasks[0];
    for(let i=tasks.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [tasks[i],tasks[j]]=[tasks[j],tasks[i]];
    }
    if(tasks.length>1&&tasks[0]===previousFirst){
      [tasks[0],tasks[1]]=[tasks[1],tasks[0]];
    }
  }
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
    shuffleTasks();
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
