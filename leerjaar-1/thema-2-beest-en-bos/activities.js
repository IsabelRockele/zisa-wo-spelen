const activityDefs=[
  {title:'Bouw de boom',icon:'🌳',desc:'Sleep elk woord naar het juiste deel.',speak:'Sleep elk woord naar het juiste deel van de boom.',render:renderTree},
  {title:'Wie woont in het bos?',icon:'🦊',desc:'Tik alle echte bosdieren aan.',speak:'Tik alle dieren aan die in het bos kunnen wonen.',render:renderForest},
  {title:'Waar woont het dier?',icon:'🏡',desc:'Kies bos, vijver of zee.',speak:'Kijk naar het dier en kies waar het woont.',render:renderHabitats},
  {title:'Ei of buik?',icon:'🥚',desc:'Sorteer de dieren in twee groepen.',speak:'Sleep elk dier naar komt uit een ei of komt uit de buik.',render:renderBirth},
  {title:'Van ei tot kuiken',icon:'🐣',desc:'Zet de echte prenten in de juiste volgorde.',speak:'Zet de prenten in de juiste volgorde. Begin bij het ei.',render:renderLifecycle}
];
let activitySpoken='';

function initActivities(){
  const menu=document.querySelector('#exerciseMenu');
  activityDefs.forEach(a=>{const b=document.createElement('button');b.innerHTML=`<span class="emoji">${a.icon}</span><strong>${a.title}</strong><small>${a.desc}</small>`;b.onclick=()=>openActivity(a);menu.append(b)});
  document.querySelector('#activitySpeak').onclick=()=>speak(activitySpoken);
}
function openActivity(a){activitySpoken=a.speak;document.querySelector('#activityTitle').textContent=a.title;show('activity');a.render();}
function activityShell(instruction,body){
  document.querySelector('#activityRoot').innerHTML=`<h2>${instruction}</h2><p class="tap-help">Sleep of tik eerst op een kaart en daarna op een vak. Tik op een geplaatste kaart om ze terug te nemen.</p>${body}<div class="activity-actions"><button class="listen primary-lite">🔊 Luister</button><button class="check primary">Ik ben klaar</button></div><p class="activity-feedback" role="status"></p>`;
  document.querySelector('#activityRoot .listen').onclick=()=>speak(activitySpoken);
}
function card(id,label,extra=''){return `<button class="move-card" draggable="true" id="${id}" data-answer="${label}">${extra}<strong>${label}</strong><span class="mini-speak" aria-hidden="true">🔊</span></button>`}
function bindPlacement(){
  const root=document.querySelector('#activityRoot'),tray=root.querySelector('.move-tray');let selected=null;
  const cards=[...root.querySelectorAll('.move-card')],zones=[...root.querySelectorAll('.drop-zone')];
  function clear(){cards.forEach(c=>c.classList.remove('chosen'));selected=null}
  function place(c,z){const old=z.querySelector('.move-card');if(old&&old!==c)tray.append(old);z.append(c);clear();}
  cards.forEach(c=>{
    c.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',c.id));
    c.addEventListener('click',e=>{if(e.target.classList.contains('mini-speak')){e.stopPropagation();speak(c.dataset.answer);return}if(c.parentElement.classList.contains('drop-zone')){tray.append(c);clear();return}clear();selected=c;c.classList.add('chosen')});
  });
  zones.forEach(z=>{z.addEventListener('dragover',e=>e.preventDefault());z.addEventListener('drop',e=>{e.preventDefault();const c=document.getElementById(e.dataTransfer.getData('text/plain'));if(c)place(c,z)});z.addEventListener('click',()=>{if(selected)place(selected,z)})});
  return ()=>{let ok=true;zones.forEach(z=>{const good=z.querySelector('.move-card')?.dataset.answer===z.dataset.answer;z.classList.toggle('correct',good);z.classList.toggle('wrong',!good);ok=ok&&good});const f=root.querySelector('.activity-feedback');f.textContent=ok?'Alles staat juist! Prima gedaan.':'Er staat nog iets verkeerd. De rode vakken kun je verbeteren.';speak(ok?'Alles staat juist! Prima gedaan.':'Kijk nog eens naar de rode vakken.');return ok};
}
function shuffled(a){return [...a].sort(()=>Math.random()-.5)}

function renderTree(){
  const words=['de kruin','het blad','de tak','de stam','de wortels'];
  activityShell('Sleep de woorden naar het juiste deel van de boom.',`<div class="tree-work"><div class="tree-picture"><img src="assets/boom-delen-realistisch.png" alt="Realistische boom met wortels"><div class="drop-zone tree-crown" data-answer="de kruin"></div><div class="drop-zone tree-leaf" data-answer="het blad"></div><div class="drop-zone tree-branch" data-answer="de tak"></div><div class="drop-zone tree-trunk" data-answer="de stam"></div><div class="drop-zone tree-roots" data-answer="de wortels"></div></div><div class="move-tray word-tray">${shuffled(words).map((w,i)=>card('tree'+i,w)).join('')}</div></div>`);
  const check=bindPlacement();document.querySelector('#activityRoot .check').onclick=check;
}

const animals8=['de muis','het varken','de papegaai','het hert','de egel','de schildpad','de bosuil','de vos'];
function sprite(cls,i,label){return `<span class="sprite ${cls} s${i}" role="img" aria-label="${label}"></span>`}
function renderForest(){
  activitySpoken='Tik alle dieren aan die in het bos kunnen wonen. Tik daarna op ik ben klaar.';
  activityShell('Welke dieren kunnen in het bos wonen? Tik ze aan.',`<div class="animal-grid">${animals8.map((a,i)=>`<div class="animal-option"><button data-i="${i}">${sprite('animals8',i,a)}<strong>${a}</strong></button><button class="speak-one" aria-label="Lees ${a} voor">🔊</button></div>`).join('')}</div>`);
  const correct=new Set([0,3,4,6,7]);document.querySelectorAll('.animal-option>button:first-child').forEach(b=>b.onclick=()=>b.classList.toggle('selected'));document.querySelectorAll('.speak-one').forEach((b,i)=>b.onclick=()=>speak(animals8[i]));
  document.querySelector('#activityRoot .check').onclick=()=>{let ok=true;document.querySelectorAll('.animal-option>button:first-child').forEach(b=>{const good=correct.has(+b.dataset.i),sel=b.classList.contains('selected');b.classList.toggle('correct',good&&sel);b.classList.toggle('wrong',good!==sel);ok=ok&&(good===sel)});const t=ok?'Je hebt alle bosdieren gevonden!':'Kijk nog eens naar de rode prenten.';document.querySelector('.activity-feedback').textContent=t;speak(t)};
}

const habitatAnimals=['de libel','de mossel','de egel','de muis','de reiger','de dolfijn'];
const habitatNames=['het bos','de vijver','de zee'];
const habitatAnswers=[1,1,0,0,1,2];let habitatStep=0;
function renderHabitats(){habitatStep=0;drawHabitat()}
function drawHabitat(){
  const name=habitatAnimals[habitatStep];activitySpoken=`Waar woont ${name}? Kies het bos, de vijver of de zee.`;
  activityShell(`Waar woont ${name}?`,`<div class="habitat-question">${sprite('animals6',habitatStep,name)}<button class="name-listen">🔊 ${name}</button></div><div class="habitat-options">${habitatNames.map((h,i)=>`<button data-i="${i}">${sprite('habitats3',i,h)}<strong>${h}</strong><span>🔊</span></button>`).join('')}</div>`);
  document.querySelector('.name-listen').onclick=()=>speak(name);document.querySelector('.check').hidden=true;
  document.querySelectorAll('.habitat-options button').forEach(b=>b.onclick=e=>{if(e.target.tagName==='SPAN'){speak(habitatNames[+b.dataset.i]);return}const ok=+b.dataset.i===habitatAnswers[habitatStep];b.classList.add(ok?'correct':'wrong');if(!ok){speak('Probeer nog eens.');return}speak('Goed zo!');setTimeout(()=>{habitatStep++;if(habitatStep<habitatAnimals.length)drawHabitat();else{document.querySelector('#activityRoot').innerHTML='<div class="finished"><span>🌟</span><h2>Alle dieren hebben een woonplaats!</h2><button class="primary">Nog eens</button></div>';document.querySelector('.finished button').onclick=renderHabitats}},650)});
}

function renderBirth(){
  const map=['buik','buik','ei','buik','buik','ei','ei','buik'];
  activityShell('Komt het dier uit een ei of uit de buik?',`<div class="birth-zones"><div class="drop-zone birth-zone" data-kind="group" data-answer="ei"><span class="big-picto">🥚</span><h3>Komt uit een ei</h3></div><div class="drop-zone birth-zone" data-kind="group" data-answer="buik"><span class="big-picto">🤰</span><h3>Komt uit de buik</h3></div></div><div class="move-tray picture-tray">${shuffled(animals8.map((a,i)=>({a,i}))).map(({a,i})=>`<button class="move-card picture-card" draggable="true" id="birth${i}" data-answer="${map[i]}" data-name="${a}">${sprite('animals8',i,a)}<strong>${a}</strong><span class="mini-speak">🔊</span></button>`).join('')}</div>`);
  const root=document.querySelector('#activityRoot'),tray=root.querySelector('.move-tray');let selected=null;const cards=[...root.querySelectorAll('.move-card')],zones=[...root.querySelectorAll('.drop-zone')];
  const clear=()=>{cards.forEach(c=>c.classList.remove('chosen'));selected=null};const place=(c,z)=>{z.append(c);clear()};
  cards.forEach(c=>{c.ondragstart=e=>e.dataTransfer.setData('text/plain',c.id);c.onclick=e=>{if(e.target.classList.contains('mini-speak')){e.stopPropagation();speak(c.dataset.name);return}if(c.parentElement.classList.contains('drop-zone')){tray.append(c);clear();return}clear();selected=c;c.classList.add('chosen')}});zones.forEach(z=>{z.ondragover=e=>e.preventDefault();z.ondrop=e=>{e.preventDefault();const c=document.getElementById(e.dataTransfer.getData('text/plain'));if(c)place(c,z)};z.onclick=()=>{if(selected)place(selected,z)}});
  root.querySelector('.check').onclick=()=>{let ok=cards.every(c=>c.parentElement.dataset.answer===c.dataset.answer);cards.forEach(c=>c.classList.toggle('wrong',c.parentElement.classList.contains('drop-zone')&&c.parentElement.dataset.answer!==c.dataset.answer));const t=ok?'Alle dieren staan in de juiste groep!':'Er staan nog dieren in de verkeerde groep of naast de vakken.';root.querySelector('.activity-feedback').textContent=t;speak(t)};
}

function renderLifecycle(){
  const stages=[['ei','assets/ei-realistisch.png'],['uitbroeden','assets/uitbroeden-realistisch.png'],['uitkomen','assets/uitkomen-realistisch.png'],['het kuiken','assets/kuiken-realistisch.png']];
  activityShell('Zet de prenten in de juiste volgorde. Begin bij het ei.',`<div class="sequence-zones">${stages.map((s,i)=>`<div><b>${i+1}</b><div class="drop-zone" data-answer="${s[0]}"></div>${i<3?'<span>→</span>':''}</div>`).join('')}</div><div class="move-tray lifecycle-tray">${shuffled(stages).map((s,i)=>`<button class="move-card life-card" draggable="true" id="life${i}" data-answer="${s[0]}"><img src="${s[1]}" alt="${s[0]}"><strong>${s[0]}</strong><span class="mini-speak">🔊</span></button>`).join('')}</div>`);
  const check=bindPlacement();document.querySelector('#activityRoot .check').onclick=check;
}

initActivities();
