(()=>{
  const tasks=[
    {text:'Klik op de giraffenklas.',icon:'picto-giraffenklas.png',polygons:[[[49.93,67.05],[51.47,67.05],[51.47,71.33],[49.93,71.33]]]},
    {text:'Klik op de octopusklas.',icon:'picto-octopusklas.png',polygons:[[[51.07,51.43],[53.67,51.43],[53.67,56.86],[51.07,56.86]]]},
    {text:'Klik op de refter.',icon:'picto-refter.png',polygons:[[[25.03,78.00],[39.92,67.71],[40.99,71.14],[26.44,81.24],[25.30,82.00],[24.77,79.52]]]},
    {text:'Klik op de turnzaal.',icon:'picto-turnzaal.png',polygons:[[[26.70,81.71],[41.39,71.43],[45.73,70.10],[47.80,77.24],[47.00,77.81],[28.17,88.95],[27.44,88.38]]]},
    {text:'Klik op de leraarskamer.',emoji:'👩‍🏫',polygons:[[[46.46,67.43],[48.73,65.71],[49.67,66.29],[49.67,71.43],[46.46,71.43]]]},
    {text:'Klik op het secretariaat van juf Ilse.',emoji:'🗂️',polygons:[[[55.27,64.86],[56.92,64.86],[56.92,68.04],[55.27,68.04]]]},
    {text:'Klik op het bureau van directeur juf Elien.',emoji:'🧑‍💼',polygons:[[[55.05,68.45],[56.95,68.45],[56.95,71.85],[55.05,71.85]]]},
    {text:'Klik op de klas van juf Anuschka, het vierde leerjaar.',emoji:'4️⃣',polygons:[[[51.07,39.43],[53.67,39.43],[53.67,44.76],[51.07,44.76]]]},
    {text:'Klik op de klas van juf Lara, het derde leerjaar.',emoji:'3️⃣',polygons:[[[51.07,45.43],[53.67,45.43],[53.67,50.76],[51.07,50.76]]]},
    {text:'Klik op de klas van juf Isabel, het tweede leerjaar.',emoji:'2️⃣',polygons:[[[51.07,57.52],[53.67,57.52],[53.67,62.86],[51.07,62.86]]]},
    {text:'Klik op de klas van juf Hanne, het eerste leerjaar.',emoji:'1️⃣',polygons:[[[69.36,18.38],[75.10,18.38],[75.10,25.81],[69.36,25.81]]]},
    {text:'Klik op de meisjestoiletten.',emoji:'🚺',polygons:[[[47.90,28.60],[49.30,28.60],[49.30,38.45],[47.90,38.45]]]},
    {text:'Klik op de jongenstoiletten.',emoji:'🚹',polygons:[[[77.00,15.20],[86.20,15.20],[86.20,18.10],[77.00,18.10]]]},
    {text:'Klik op de klas van meester Davy, het zesde leerjaar.',emoji:'6️⃣',polygons:[[[84.58,29.24],[86.65,29.24],[86.65,34.38],[84.58,34.38]]]},
    {text:'Klik op de klas van juf Laura, het vijfde leerjaar.',emoji:'5️⃣',polygons:[[[84.38,41.14],[86.78,41.14],[86.78,46.67],[84.38,46.67]]]}
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
          <svg class="school-plan-highlight" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"></svg>
          <button class="school-plan-answer" type="button" aria-label="Kies deze plaats"></button>
          <span class="school-plan-marker" aria-hidden="true" hidden></span>
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
      marker.className='school-plan-marker visible wrong';
      feedback.textContent='Kijk nog eens goed.';
      say('Kijk nog eens goed.');
      return;
    }
    locked=true; score++;
    marker.className='school-plan-marker visible correct';
    const highlight=document.querySelector('.school-plan-highlight');
    if(task.polygons){
      highlight.innerHTML=task.polygons.map(polygon=>`<polygon points="${polygon.map(point=>point.join(',')).join(' ')}"></polygon>`).join('');
    }else{
      highlight.innerHTML=zones.map(zone=>`<rect x="${zone.x-zone.rx}" y="${zone.y-zone.ry}" width="${zone.rx*2}" height="${zone.ry*2}" rx="1"></rect>`).join('');
    }
    highlight.classList.add('visible');
    feedback.textContent='Goed gevonden!';
    say('Goed gevonden!');
    setTimeout(()=>{ index++; index<tasks.length?render():finish(); },1100);
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
