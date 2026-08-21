const words=[
 {w:'het adres',d:'De plaats waar iemand woont: straatnaam, huisnummer, postcode en gemeente.',c:'kaart'},
 {w:'het afval',d:'Alles wat we niet meer nodig hebben en daarom weggooien.',c:'afval'},
 {w:'hergebruiken',d:'Iets opnieuw gebruiken in plaats van het weg te gooien.',c:'afval'},
 {w:'recycleren',d:'Afval sorteren zodat er iets nieuws van gemaakt kan worden.',c:'afval'},
 {w:'afval verbranden',d:'Restafval in grote ovens verbranden.',c:'afval'},
 {w:'afval voorkomen',d:'Ervoor zorgen dat je zo weinig mogelijk afval maakt.',c:'afval'},
 {w:'de akkerbouw',d:'Planten telen op grote akkers en ze met machines oogsten.',c:'landbouw'},
 {w:'het bestuur',d:'Een groep mensen die beslist wat er in de gemeente gebeurt.',c:'bestuur'},
 {w:'de burgemeester',d:'De persoon die de gemeente helpt besturen en waakt over de veiligheid.',c:'bestuur'},
 {w:'de buurgemeente',d:'Een gemeente die naast jouw gemeente ligt.',c:'kaart'},
 {w:'de cultuur',d:'Wat mensen maken en samen doen, zoals kunst, muziek en theater.',c:'vrije tijd'},
 {w:'de deelgemeente',d:'Een dorp of kleiner gebied dat deel uitmaakt van een grotere gemeente.',c:'kaart'},
 {w:'de dienst',d:'Hulp of werk dat iemand voor andere mensen doet.',c:'bestuur'},
 {w:'de gemeente',d:'Een dorp of stad met een eigen bestuur.',c:'bestuur'},
 {w:'het gemeentehuis',d:'Het gebouw waar het bestuur van de gemeente werkt.',c:'bestuur'},
 {w:'de gids',d:'Iemand die bezoekers rondleidt en vertelt wat er te zien is.',c:'vrije tijd'},
 {w:'de glastuinbouw',d:'Groenten, fruit of bloemen kweken in een serre.',c:'landbouw'},
 {w:'de handel',d:'Het kopen en verkopen van spullen, bijvoorbeeld in winkels.',c:'bestuur'},
 {w:'het huisnummer',d:'Het nummer van een huis of gebouw.',c:'kaart'},
 {w:'de industrie',d:'Bedrijven en fabrieken die producten maken.',c:'landschap'},
 {w:'het industriegebied',d:'Een gebied waar veel bedrijven en fabrieken staan.',c:'landschap'},
 {w:'de landbouw',d:'Het werk van boeren: dieren houden en voedsel telen.',c:'landbouw'},
 {w:'het landbouwgebied',d:'Een gebied met bijvoorbeeld akkers, weiden en boerderijen.',c:'landschap'},
 {w:'het landelijk landschap',d:'Een landschap met veel groen en velden en weinig gebouwen.',c:'landschap'},
 {w:'de legende',d:'De uitleg van kleuren en symbolen op een kaart.',c:'kaart'},
 {w:'de luchtfoto',d:'Een foto van een gebied die vanuit de lucht is genomen.',c:'kaart'},
 {w:'het natuurgebied',d:'Een gebied waar de natuur beschermd wordt.',c:'landschap'},
 {w:'de postcode',d:'De cijfercode van een gemeente die bij een adres hoort.',c:'kaart'},
 {w:'de recreatie',d:'Wat je in je vrije tijd doet om te ontspannen.',c:'vrije tijd'},
 {w:'het recreatiegebied',d:'Een gebied waar je kunt sporten, spelen of ontspannen.',c:'vrije tijd'},
 {w:'het stedelijk landschap',d:'Een landschap met veel straten en gebouwen en weinig groen.',c:'landschap'},
 {w:'de straatnaam',d:'De naam van de straat; een deel van je adres.',c:'kaart'},
 {w:'het stratenplan',d:'Een kaart waarop de straten van een dorp of stad staan.',c:'kaart'},
 {w:'het toerisme',d:'Alles wat te maken heeft met andere plaatsen bezoeken.',c:'vrije tijd'},
 {w:'de tuinbouw',d:'Groenten, fruit of bloemen kweken en vaak met de hand oogsten.',c:'landbouw'},
 {w:'de vakcoördinaat',d:'Een letter en een cijfer waarmee je een vak op een kaart vindt.',c:'kaart'},
 {w:'de veeteelt',d:'Dieren houden voor melk, eieren, wol of vlees.',c:'landbouw'},
 {w:'het openbaar vervoer',d:'Vervoer dat iedereen mag gebruiken, zoals trein en bus.',c:'kaart'},
 {w:'het woongebied',d:'Een gebied waar vooral huizen staan en mensen wonen.',c:'landschap'}
];
const places=[
 {name:'het gemeentehuis',img:'gemeentehuis-bornem.jpg',clue:'Hier werkt het bestuur van Bornem.'},
 {name:'Kasteel van Bornem',img:'kasteel-bornem.jpg',clue:'Een bekend historisch gebouw in Bornem.'},
 {name:'Ter Dilft',img:'ter-dilft.jpg',clue:'Hier vind je cultuur en de bibliotheek.'},
 {name:'het station',img:'station-bornem.jpg',clue:'Hier neem je het openbaar vervoer.'},
 {name:'de brandweer',img:'brandweer-bornem.jpg',clue:'Deze dienst helpt bij brand en gevaar.'},
 {name:'de politie',img:'politie-bornem.jpg',clue:'Deze dienst helpt de gemeente veilig te houden.'},
 {name:'GO! basisschool De Linde',img:'school-de-linde.png',clue:'Dit is onze school.'},
 {name:'de winkelstraat',img:'winkelstraat-bornem.jpg',clue:'Hier zie je veel handel.'},
 {name:'Barelhoeve',img:'barelhoeve.jpg',clue:'Een kinderboerderij in Bornem.'},
 {name:'Breeven',img:'breeven.jpg',clue:'Een recreatiegebied waar je kunt spelen en sporten.'},
 {name:'burgemeester Greet De Bruyn',img:'burgemeester-greet-de-bruyn.png',clue:'Zij is de burgemeester van Bornem.'}
];
const picturePairs=[
 {w:'het adres',img:'adres-illustratie.jpg'},{w:'het afval',img:'afval-illustratie.jpg'},{w:'hergebruiken',img:'hergebruiken-illustratie.jpg'},{w:'recycleren',img:'recycleren-illustratie.jpg'},
 {w:'afval verbranden',img:'verbranden-illustratie.jpg'},{w:'afval voorkomen',img:'voorkomen-illustratie.jpg'},{w:'de akkerbouw',img:'akkerbouw-illustratie.jpg'},{w:'het bestuur',img:'bestuur-illustratie.jpg'},
 {w:'de burgemeester',img:'burgemeester-greet-de-bruyn.png'},{w:'de cultuur',img:'ter-dilft.jpg'},{w:'de dienst',img:'brandweer-bornem.jpg'},{w:'het gemeentehuis',img:'gemeentehuis-bornem.jpg'},
 {w:'de gids',img:'gids-illustratie.jpg'},{w:'de glastuinbouw',img:'glastuinbouw-illustratie.jpg'},{w:'de handel',img:'winkelstraat-bornem.jpg'},{w:'het industriegebied',img:'industriegebied-illustratie.jpg'},
 {w:'het landelijk landschap',img:'landelijk-illustratie.jpg'},{w:'de legende',img:'legende-illustratie.jpg'},{w:'de luchtfoto',img:'luchtfoto-school.png'},{w:'het natuurgebied',img:'natuurgebied-illustratie.jpg'},
 {w:'het recreatiegebied',img:'breeven.jpg'},{w:'het stedelijk landschap',img:'stedelijk-illustratie.jpg'},{w:'het stratenplan',img:'stratenplan-school.png'},{w:'het openbaar vervoer',img:'station-bornem.jpg'}
];
const testQuestions=[
 {q:'Welke vier deelgemeenten horen bij Bornem?',a:['Bornem, Hingene, Mariekerke en Weert','Bornem, Temse, Hamme en Puurs','Bornem, Branst, Wintam en Breeven'],right:0,why:'Bornem, Hingene, Mariekerke en Weert zijn de officiële deelgemeenten.'},
 {q:'Wat is een buurgemeente?',a:['Een gemeente naast jouw gemeente','Een wijk in jouw straat','Een gebouw van het bestuur'],right:0,why:'Buurgemeenten grenzen aan elkaar.'},
 {q:'Wat hoort allemaal bij een volledig adres?',a:['Straatnaam, huisnummer, postcode en gemeente','Alleen straatnaam en voornaam','Postcode en land'],right:0,why:'Een adres bevat straatnaam, huisnummer, postcode en gemeente.'},
 {q:'Welke afbeelding is vanuit de lucht genomen?',a:['Een luchtfoto','Een stratenplan','Een legende'],right:0,why:'Een luchtfoto is een echte foto van bovenaf.'},
 {q:'Waarvoor dient de legende van een kaart?',a:['Ze legt kleuren en symbolen uit','Ze vertelt een verhaal','Ze geeft huisnummers'],right:0,why:'Met de legende begrijp je de tekens op de kaart.'},
 {q:'Hoe noteer je een vakcoördinaat?',a:['Met een letter en een cijfer','Met een straatnaam','Met twee kleuren'],right:0,why:'Je combineert de kolomletter en het rijnummer.'},
 {q:'Mila vult elke dag dezelfde drinkfles. Welke stap is dit?',a:['Afval voorkomen','Afval verbranden','Afval storten'],right:0,why:'Door een hervulbare fles te gebruiken ontstaat minder afval.'},
 {q:'Een plastic fles gaat in de juiste vuilnisbak. Welke stap is dit?',a:['Recycleren','Storten','Verbranden'],right:0,why:'Na sorteren kan van het materiaal iets nieuws worden gemaakt.'},
 {q:'Waar mag een fabriek het best gebouwd worden?',a:['In een industriegebied','In een natuurgebied','Midden in een woongebied'],right:0,why:'Gebieden hebben afspraken over wat er gebouwd mag worden.'},
 {q:'Wat hoort het best in een woongebied?',a:['Huizen','Een grote fabriek','Een beschermd bos'],right:0,why:'Een woongebied is bedoeld om te wonen.'},
 {q:'Welk landschap heeft veel velden en weinig huizen?',a:['Een landelijk landschap','Een stedelijk landschap','Een industriegebied'],right:0,why:'Een landelijk landschap heeft veel open ruimte en groen.'},
 {q:'Welk landschap heeft veel gebouwen en verkeer?',a:['Een stedelijk landschap','Een landelijk landschap','Een natuurgebied'],right:0,why:'Een stedelijk landschap is dicht bebouwd.'},
 {q:'Zaden groeien op een akker en worden met machines geoogst. Dit is ...',a:['akkerbouw','veeteelt','glastuinbouw'],right:0,why:'Akkerbouw gebeurt op grote akkers.'},
 {q:'Dieren houden voor melk, eieren, wol of vlees heet ...',a:['veeteelt','tuinbouw','akkerbouw'],right:0,why:'Bij veeteelt houdt de boer dieren.'},
 {q:'Groenten en bloemen groeien in een serre. Dit is ...',a:['glastuinbouw','veeteelt','industrie'],right:0,why:'Een serre is van glas: glastuinbouw.'},
 {q:'Groenten, fruit of bloemen worden vaak met de hand geoogst. Dit is ...',a:['tuinbouw','akkerbouw','veeteelt'],right:0,why:'Bij tuinbouw worden gewassen vaak met de hand geoogst.'},
 {q:'Waarvoor kun je naar het gemeentehuis?',a:['Voor documenten en hulp van gemeentelijke diensten','Om een trein te nemen','Om dieren te voeren'],right:0,why:'In het gemeentehuis helpen verschillende diensten inwoners.'},
 {q:'Welke taak past bij de burgemeester?',a:['De gemeente helpen besturen en waken over veiligheid','Alle treinen besturen','Alle winkels openhouden'],right:0,why:'De burgemeester leidt mee het bestuur en heeft veiligheidstaken.'}
];
const games=[
 {id:'beeldwoord',icon:'🖼️',title:'Verbind woord en beeld',text:'Bekijk de afbeelding en kies het woord dat erbij hoort.',img:'adres-illustratie.jpg'},
 {id:'betekenis',icon:'💡',title:'Kies de betekenis',text:'Kies bij ieder woord de juiste uitleg.',img:'bestuur-illustratie.jpg'},
 {id:'bornem',icon:'📍',title:'Waar in Bornem?',text:'Herken echte gebouwen en plaatsen uit onze gemeente.',img:'kasteel-bornem.jpg'},
 {id:'sorteren',icon:'🧺',title:'Sorteer het woord',text:'Hoort het bij kaart, landschap of bestuur?',img:'legende-illustratie.jpg'},
 {id:'toets',icon:'⭐',title:'Toetstraining',text:'Tien vragen over dezelfde doelen als de toets.',img:'school-de-linde.png'},
 {id:'bord',icon:'🖥️',title:'Klassikale bordquiz',text:'Grote vragen, uitleg en teamscores voor het digibord.',img:'breeven.jpg'}
];
const app=document.querySelector('#app'),home=document.querySelector('#homeButton');let state={game:null,index:0,score:0,items:[],revealed:false};
const shuffle=a=>{const copy=[...a];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy};const sample=(a,n)=>shuffle(a).slice(0,n);const esc=s=>s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const mixQuestion=x=>{const mixed=shuffle(x.a.map((text,index)=>({text,correct:index===x.right})));return {...x,a:mixed.map(o=>o.text),right:mixed.findIndex(o=>o.correct)}};
function done(){try{return JSON.parse(localStorage.getItem('zisa_wo_bornem_done')||'[]')}catch{return[]}}function markDone(id){localStorage.setItem('zisa_wo_bornem_done',JSON.stringify([...new Set([...done(),id])]))}
function menu(){state={game:null,index:0,score:0,items:[],revealed:false};home.hidden=true;app.innerHTML='';app.append(document.querySelector('#menuTemplate').content.cloneNode(true));const finished=done();document.querySelector('#gameGrid').innerHTML=games.map((g,i)=>`<button class="game-card color-${i+1} ${finished.includes(g.id)?'done':''}" data-game="${g.id}"><img class="game-thumb" src="assets/images/${g.img}" alt=""><span class="game-icon">${g.icon}</span><h3>${g.title}</h3><p>${g.text}</p><b>Start spelen →</b></button>`).join('');document.querySelectorAll('[data-game]').forEach(b=>b.onclick=()=>start(b.dataset.game));const pct=Math.round(finished.length/games.length*100);document.querySelector('#progressBar').style.width=pct+'%';document.querySelector('#progressText').textContent=`${finished.length} van ${games.length} oefeningen gedaan op dit toestel`}
function head(title,total){return `<div class="game-head"><div><p class="eyebrow">OEFENEN</p><h1>${title}</h1></div><span class="count">${Math.min(state.index+1,total)} / ${total}</span></div>`}
function start(id){state.game=id;state.index=0;state.score=0;state.revealed=false;state.teams=[0,0];home.hidden=false;if(id==='beeldwoord')state.items=sample(picturePairs,12);if(id==='betekenis')state.items=sample(words,10);if(id==='bornem')state.items=sample(places,8);if(id==='sorteren')state.items=sample(words.filter(x=>['kaart','landschap','bestuur'].includes(x.c)),10);if(id==='toets')state.items=sample(testQuestions,10).map(mixQuestion);if(id==='bord')state.items=shuffle(testQuestions).map(mixQuestion);render()}
function render(){if(state.index>=state.items.length)return result();({beeldwoord:pictureMatch,betekenis:meaning,bornem:bornem,sorteren:sort,toets:test,bord:board}[state.game])()}
function pictureMatch(){const x=state.items[state.index];const opts=shuffle([x,...sample(picturePairs.filter(y=>y.w!==x.w),3)]);app.innerHTML=head('Verbind woord en beeld',state.items.length)+`<section class="question-card photo-question"><img src="assets/images/${x.img}" alt="Afbeelding bij een woord"><p class="prompt">Welk woord hoort bij deze afbeelding?</p><div class="answer-grid">${opts.map(o=>`<button class="answer" data-right="${o.w===x.w}">${esc(o.w)}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindAnswers()}
function optionsFor(x){return shuffle([x,...sample(words.filter(y=>y.w!==x.w),3)])}
function meaning(){const x=state.items[state.index];const opts=optionsFor(x);app.innerHTML=head('Kies de betekenis',state.items.length)+`<section class="question-card"><p class="prompt">Wat betekent <span style="color:var(--green)">${esc(x.w)}</span>?</p><div class="answer-grid">${opts.map(o=>`<button class="answer" data-right="${o.w===x.w}">${esc(o.d)}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindAnswers()}
function bindAnswers(){document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>{if(document.querySelector('.answer.correct,.answer.wrong'))return;const right=b.dataset.right==='true';b.classList.add(right?'correct':'wrong');if(!right)document.querySelector('.answer[data-right="true"]').classList.add('correct');if(right)state.score++;document.querySelector('#feedback').innerHTML=(right?'Goed gezien!':'Kijk nog eens naar het groene antwoord.')+` <button class="next-button" id="next">Volgende</button>`;document.querySelector('#next').onclick=()=>{state.index++;render()}})}
function bornem(){const x=state.items[state.index];const opts=shuffle([x,...sample(places.filter(y=>y.name!==x.name),3)]);app.innerHTML=head('Waar in Bornem?',state.items.length)+`<section class="question-card photo-question"><img src="assets/images/${x.img}" alt="Foto van een plaats in Bornem"><p class="prompt">Wat zie je op de foto?</p><div class="answer-grid">${opts.map(o=>`<button class="answer" data-right="${o.name===x.name}">${esc(o.name)}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindAnswers()}
function sort(){const x=state.items[state.index];const labels={kaart:'Kaart en adres',landschap:'Gebieden en landschap',bestuur:'Bestuur en diensten'};const choices=shuffle(Object.entries(labels));app.innerHTML=head('Sorteer het woord',state.items.length)+`<section class="question-card"><p class="prompt">Waar hoort <span style="color:var(--green)">${esc(x.w)}</span> het best bij?</p><div class="sort-zone">${choices.map(([k,v])=>`<button class="sort-choice" data-right="${k===x.c}">${v}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;document.querySelectorAll('.sort-choice').forEach(b=>b.onclick=()=>{if(document.querySelector('.sort-choice.correct,.sort-choice.wrong'))return;const right=b.dataset.right==='true';b.classList.add(right?'correct':'wrong');if(!right)document.querySelector('.sort-choice[data-right="true"]').classList.add('correct');if(right)state.score++;document.querySelector('#feedback').innerHTML=(right?'Juist gesorteerd!':'Dit woord past beter bij het groene vak.')+` <button class="next-button" id="next">Volgende</button>`;document.querySelector('#next').onclick=()=>{state.index++;render()}})}
function test(){const x=state.items[state.index];app.innerHTML=head('Toetstraining',state.items.length)+`<section class="question-card"><p class="prompt">${esc(x.q)}</p><div class="answer-grid">${x.a.map((o,i)=>`<button class="answer" data-right="${i===x.right}">${esc(o)}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>{if(document.querySelector('.answer.correct,.answer.wrong'))return;const right=b.dataset.right==='true';b.classList.add(right?'correct':'wrong');if(!right)document.querySelector('.answer[data-right="true"]').classList.add('correct');if(right)state.score++;document.querySelector('#feedback').innerHTML=`${right?'Goed!':'Nog even onthouden:'} ${esc(x.why)} <button class="next-button" id="next">Volgende</button>`;document.querySelector('#next').onclick=()=>{state.index++;render()}})}
function board(){const x=state.items[state.index];app.innerHTML=`<section class="board-shell"><div class="board-top"><span>Vraag ${state.index+1} van ${state.items.length}</span><div class="team-score"><button data-team="0">Team zon: ${state.teams[0]}</button><button data-team="1">Team maan: ${state.teams[1]}</button></div></div><p class="board-question">${esc(x.q)}</p><div class="board-options">${x.a.map((o,i)=>`<div class="board-option"><b>${String.fromCharCode(65+i)}</b>${esc(o)}</div>`).join('')}</div><div class="board-explain" id="boardExplain" hidden><strong>Antwoord: ${String.fromCharCode(65+x.right)}</strong><span>${esc(x.why)}</span></div><div class="board-controls"><button class="secondary-button" id="revealBoard">Toon het antwoord</button><button class="primary-button" id="nextBoard" hidden>Volgende vraag</button></div></section>`;document.querySelectorAll('[data-team]').forEach(b=>b.onclick=()=>{state.teams[Number(b.dataset.team)]++;board()});document.querySelector('#revealBoard').onclick=()=>{document.querySelector('#boardExplain').hidden=false;document.querySelector('#nextBoard').hidden=false;document.querySelector('#revealBoard').hidden=true};document.querySelector('#nextBoard').onclick=()=>{state.index++;render()}}
function result(){markDone(state.game);if(state.game==='bord'){app.innerHTML=`<section class="result-card"><div class="result-emoji">🏆</div><p class="eyebrow">BORDQUIZ KLAAR</p><h1>Team zon ${state.teams[0]} · ${state.teams[1]} Team maan</h1><p>Knap samengewerkt! Bespreek samen welke leerstof nog een extra ronde nodig heeft.</p><div class="result-actions"><button class="secondary-button" id="menu">Naar de oefeningen</button><button class="primary-button" id="retry">Nieuwe ronde</button></div></section>`}else{const pct=Math.round(state.score/state.items.length*100);app.innerHTML=`<section class="result-card"><div class="result-emoji">${pct>=80?'🏆':pct>=60?'🌟':'💪'}</div><p class="eyebrow">KLAAR</p><h1>${state.score} van ${state.items.length} juist</h1><p>${pct>=80?'Knap gedaan! Je bent goed op weg voor de toets.':pct>=60?'Mooi geoefend. Nog één keer spelen maakt je nog sterker.':'Goed dat je oefent. Kijk naar de groene antwoorden en probeer daarna opnieuw.'}</p><div class="result-actions"><button class="secondary-button" id="menu">Naar de oefeningen</button><button class="primary-button" id="retry">Nog een keer</button></div></section>`}document.querySelector('#menu').onclick=menu;document.querySelector('#retry').onclick=()=>start(state.game)}
home.onclick=menu;
const dlg=document.querySelector('#teacherDialog');document.querySelector('#teacherButton').onclick=()=>{dlg.showModal();const box=document.querySelector('#qrBox');box.replaceChildren();const url=location.protocol==='file:'?'Publiceer de website eerst om de definitieve link te krijgen.':location.href;if(window.QRCode&&location.protocol!=='file:'){new QRCode(box,{text:url,width:220,height:220,colorDark:'#145c57',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M});document.querySelector('#qrMessage').textContent=url}else{box.textContent=location.protocol==='file:'?'De QR-code verschijnt automatisch zodra de site online staat.':'De QR-bibliotheek kon niet worden geladen.';document.querySelector('#qrMessage').textContent=''}};document.querySelector('#closeTeacher').onclick=()=>dlg.close();document.querySelector('#copyLink').onclick=async()=>{if(location.protocol==='file:')return alert('De definitieve link is er zodra de site online staat.');await navigator.clipboard.writeText(location.href);document.querySelector('#copyLink').textContent='Link gekopieerd ✓'};document.querySelector('#printQr').onclick=()=>window.print();menu();
