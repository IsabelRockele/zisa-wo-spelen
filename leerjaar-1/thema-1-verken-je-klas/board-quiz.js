const l1BaseMenu=menu;
menu=function(){
  l1BaseMenu(); state.teams=[0,0]; state.boardIntro=false;
  document.querySelector('.games')?.insertAdjacentHTML('beforeend','<button class="game teacher-game" data-game="board"><span class="emoji">🟥🟦🟨</span><strong>Klassikale kleurenquiz</strong><small>Samen spelen met de juf.</small></button>');
  document.querySelector('[data-game="board"]')?.addEventListener('click',()=>start('board'));
};
const l1BaseStart=start;
start=function(game){
  if(game!=='board') return l1BaseStart(game);
  Object.assign(state,{game:'board',index:0,score:0,items:shuffle(boardQuestions).map(mixBoardQuestion),teams:[0,0],boardIntro:true,roundTotal:boardQuestions.length,mistakes:[],reviewItems:[],reviewMistakes:[]});
  allThemes.hidden=true; gameMenu.hidden=false; render();
};
const l1BaseRender=render;
render=function(){
  window.speechSynthesis?.cancel(); window.scrollTo({top:0,left:0,behavior:'auto'});
  if(state.game!=='board') return l1BaseRender();
  if(state.boardIntro) return boardIntro();
  if(state.index>=state.items.length) return boardResult();
  boardGame();
};
function boardIntro(){
  state.spoken='We spelen samen een kleurenquiz. Iedereen krijgt een rode, blauwe en gele kaart.';
  app.innerHTML=`<section class="l1-board-shell l1-board-welcome"><div class="board-trophy">🌟</div><p class="eyebrow">SAMEN AAN HET BORD</p><h1>Klassikale kleurenquiz</h1><h2>Zo spelen we</h2><ol class="l1-board-steps"><li>Iedereen krijgt een <b>rode</b>, <b>blauwe</b> en <b>gele</b> kleurkaart.</li><li>Luister naar de vraag en bekijk de drie antwoorden.</li><li>Steek de kleur van jouw antwoord tegelijk omhoog.</li><li>De juf klikt daarna op <b>Toon het antwoord</b>.</li></ol><p>We oefenen klasvoorwerpen, pictogrammen, ruimte, vroeger en nu, wonen, landschap en afval.</p><button class="board-primary" id="startBoard">Start de quiz</button></section>`;
  document.querySelector('#startBoard').onclick=()=>{state.boardIntro=false;speak('Klaar voor de kleurenquiz. Kies rood, blauw of geel.');render()}; speak();
}
function boardGame(){
  const x=state.items[state.index],colors=['rood','blauw','geel']; state.spoken=x.q;
  app.innerHTML=`<section class="l1-board-shell"><div class="l1-board-top"><span>${esc(x.kind)} · Vraag ${state.index+1} van ${state.items.length}</span><div class="l1-team-score"><button data-team="0">☀️ Team zon: ${state.teams[0]}</button><button data-team="1">🌙 Team maan: ${state.teams[1]}</button></div></div><p class="l1-board-instruction">Steek rood, blauw of geel omhoog.</p><div class="l1-board-question"><button class="board-audio" id="boardListen" aria-label="Lees de vraag voor">🔊</button>${esc(x.q)}</div>${x.img?`<img class="l1-board-image" src="assets/${esc(x.img)}" alt="Afbeelding bij de vraag">`:`<div class="l1-board-icon">${x.icon||'⭐'}</div>`}<div class="l1-board-options">${x.a.map((answer,i)=>`<div class="l1-board-option color-${colors[i]}" data-right="${i===x.right}"><button class="answer-sound" data-say="${esc(answer)}" aria-label="Lees dit antwoord voor">🔊</button><b>${colors[i]}</b><span>${esc(answer)}</span></div>`).join('')}</div><div class="l1-board-explain" id="boardExplain" hidden><strong>Juiste kleur: ${colors[x.right]}</strong><span>${esc(x.why)}</span></div><div class="l1-board-controls"><button class="board-secondary" id="revealBoard">Toon het antwoord</button><button class="board-primary" id="nextBoard" hidden>Volgende vraag</button></div></section>`;
  document.querySelector('#boardListen').onclick=()=>speak(x.q);
  document.querySelectorAll('[data-say]').forEach(b=>b.onclick=()=>speak(b.dataset.say));
  document.querySelectorAll('[data-team]').forEach(b=>b.onclick=()=>{state.teams[Number(b.dataset.team)]++;boardGame()});
  document.querySelector('#revealBoard').onclick=()=>{document.querySelectorAll('.l1-board-option').forEach(o=>o.classList.add(o.dataset.right==='true'?'board-correct':'board-dim'));document.querySelector('#boardExplain').hidden=false;document.querySelector('#nextBoard').hidden=false;document.querySelector('#revealBoard').hidden=true;speak(`Het juiste antwoord is ${x.a[x.right]}. ${x.why}`)};
  document.querySelector('#nextBoard').onclick=()=>{state.index++;render()};
}
function boardResult(){
  state.spoken=`De quiz is klaar. Team zon heeft ${state.teams[0]} punten en team maan ${state.teams[1]} punten.`;
  app.innerHTML=`<section class="result"><div class="trophy">🏆</div><h1>Kleurenquiz klaar!</h1><p>☀️ Team zon: <b>${state.teams[0]}</b> punten</p><p>🌙 Team maan: <b>${state.teams[1]}</b> punten</p><p>Knap samengewerkt!</p><div class="l1-board-controls"><button class="board-secondary" id="boardMenu">Andere oefening</button><button class="board-primary" id="boardAgain">Nieuwe ronde</button></div></section>`;
  document.querySelector('#boardMenu').onclick=menu; document.querySelector('#boardAgain').onclick=()=>start('board'); speak();
}
menu();
