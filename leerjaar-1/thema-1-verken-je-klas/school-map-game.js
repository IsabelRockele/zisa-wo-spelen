(()=>{
  const tasks=[
    {text:'Klik op de giraffenklas.',icon:'picto-giraffenklas.png',x:48,y:65,rx:5,ry:6},
    {text:'Klik op de octopusklas.',icon:'picto-octopusklas.png',x:49,y:47,rx:5,ry:6},
    {text:'Klik op de refter.',icon:'picto-refter.png',x:35,y:84,rx:15,ry:5},
    {text:'Klik op de turnzaal.',icon:'picto-turnzaal.png',x:35,y:92,rx:15,ry:5}
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
          <img src="assets/${task.icon}" alt="" aria-hidden="true">
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
    const right=Math.abs(x-task.x)<=task.rx&&Math.abs(y-task.y)<=task.ry;
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
