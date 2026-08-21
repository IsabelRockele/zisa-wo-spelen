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
const homeOptions=[
 {key:'flat',label:'de flat',img:'flat-eigen.webp'},
 {key:'rijhuis',label:'het rijhuis',img:'rijhuis-eigen.webp'},
 {key:'vrijstaand',label:'de vrijstaande woning',img:'vrijstaande-woning-eigen.webp'}
];
const landscapeOptions=[
 {key:'stedelijk',label:'het stedelijk landschap',img:'stedelijk-eigen.webp'},
 {key:'landelijk',label:'het landelijk landschap',img:'landelijk-eigen.webp'}
];
const housingQuestions=[
 {q:'Welk huis is een flat?',correct:'flat',opts:homeOptions},
 {q:'Welk huis staat vast aan de huizen ernaast?',correct:'rijhuis',opts:homeOptions},
 {q:'Welk huis staat helemaal los en heeft vaak een tuin?',correct:'vrijstaand',opts:homeOptions},
 {q:'Ik woon hoog in een gebouw en heb geen eigen tuin. Waar woon ik?',correct:'flat',opts:homeOptions},
 {q:'Mijn huis staat in een rij, vast aan de huizen van mijn buren. Waar woon ik?',correct:'rijhuis',opts:homeOptions},
 {q:'Mijn huis staat los en rondom ligt een tuin. Waar woon ik?',correct:'vrijstaand',opts:homeOptions},
 {q:'Waar zie je een stedelijk landschap met veel gebouwen en straten?',correct:'stedelijk',opts:landscapeOptions},
 {q:'Waar zie je een landelijk landschap met veel velden en groen?',correct:'landelijk',opts:landscapeOptions}
];
const mapLocations=[
 {name:'het station',icon:'🚉',col:'C',row:1,x:63,y:16},
 {name:'de parking',icon:'🅿️',col:'B',row:2,x:38,y:38},
 {name:'de kerk',icon:'⛪',col:'D',row:2,x:86,y:40},
 {name:'het gemeentehuis',icon:'🏛️',col:'A',row:3,x:13,y:64},
 {name:'de bibliotheek',icon:'📚',col:'C',row:3,x:62,y:65},
 {name:'de supermarkt',icon:'🛒',col:'B',row:4,x:38,y:87},
 {name:'het kasteel',icon:'🏰',col:'D',row:4,x:87,y:86}
];
const wasteLadder=[
 {key:'voorkomen',label:'voorkomen',short:'geen afval maken',color:'#16813b'},
 {key:'hergebruik',label:'hergebruik',short:'opnieuw gebruiken',color:'#8bc78b'},
 {key:'recycleren',label:'recycleren',short:'iets nieuws maken',color:'#f0bd35'},
 {key:'verbranden',label:'verbranden',short:'restafval in de oven',color:'#db6b20'},
 {key:'storten',label:'storten',short:'op een afvalberg',color:'#c93427'}
];
const wasteLadderSituations=[
 {icon:'🛍️',q:'Ik neem een eigen tas mee naar de winkel.',right:'voorkomen'},
 {icon:'🚰',q:'Ik vul een glas met kraanwater.',right:'voorkomen'},
 {icon:'📚',q:'Ik koop een tweedehands boek op de rommelmarkt.',right:'hergebruik'},
 {icon:'🧣',q:'Een te kleine sjaal gaat naar de kringwinkel.',right:'hergebruik'},
 {icon:'🍎',q:'Een klokhuis gaat bij het GFT en wordt compost.',right:'recycleren'},
 {icon:'🍾',q:'Een lege glazen fles gaat in de glasbak.',right:'recycleren'},
 {icon:'🍬',q:'Kauwgom gaat bij het restafval en daarna naar de oven.',right:'verbranden'},
 {icon:'🚛',q:'De gemeente brengt het restafval naar een verbrandingsoven.',right:'verbranden'},
 {icon:'🏔️',q:'Afval wordt op een grote afvalberg gegooid.',right:'storten'},
 {icon:'📦',q:'Een kartonnen doos wordt papier voor iets nieuws.',right:'recycleren'}
];
const areaTypes=[
 {key:'woongebied',label:'het woongebied'},
 {key:'natuurgebied',label:'het natuurgebied'},
 {key:'landbouwgebied',label:'het landbouwgebied'},
 {key:'industriegebied',label:'het industriegebied'}
];
const areaQuestions=[
 {q:'Welk gebied zie je op deze afbeelding?',img:'gebied-woongebied-foto-v2.webp',right:'woongebied'},
 {q:'Welk gebied zie je op deze afbeelding?',img:'gebied-natuurgebied-foto-v2.webp',right:'natuurgebied'},
 {q:'Welk gebied zie je op deze afbeelding?',img:'gebied-landbouwgebied-foto-v2.webp',right:'landbouwgebied'},
 {q:'Welk gebied zie je op deze afbeelding?',img:'gebied-industriegebied-foto-v2.webp',right:'industriegebied'},
 {q:'Boer Amir wil aardappelen telen op grote velden. Welk gebied past?',icon:'🚜',right:'landbouwgebied'},
 {q:'Er wordt een nieuwe fabriek gebouwd. Welk gebied past?',icon:'🏭',right:'industriegebied'},
 {q:'Mila koopt een huis in een buurt met veel woningen. Welk gebied past?',icon:'🏘️',right:'woongebied'},
 {q:'In dit gebied worden planten en dieren beschermd. Welk gebied past?',icon:'🦌',right:'natuurgebied'}
];
const wasteBins=[
 {key:'glas',label:'glas',color:'rood'},
 {key:'papier',label:'papier en karton',color:'geel'},
 {key:'pmd',label:'PMD',color:'blauw'},
 {key:'gft',label:'GFT',color:'groen'},
 {key:'rest',label:'restafval',color:'grijs'}
];
const wasteItems=[
 {name:'een glazen fles',icon:'🍾',bin:'glas'},
 {name:'een glazen bokaal',icon:'🫙',bin:'glas'},
 {name:'een krant',icon:'📰',bin:'papier'},
 {name:'een kartonnen doos',icon:'📦',bin:'papier'},
 {name:'een plastic drankfles',icon:'🧴',bin:'pmd'},
 {name:'een leeg drankkarton',icon:'🧃',bin:'pmd'},
 {name:'een leeg blikje',icon:'🥫',bin:'pmd'},
 {name:'een bananenschil',icon:'🍌',bin:'gft'},
 {name:'een klokhuis',icon:'🍎',bin:'gft'},
 {name:'etensresten',icon:'🍽️',bin:'gft'},
 {name:'een vuile luier',icon:'🧷',bin:'rest'},
 {name:'een kapotte spons',icon:'🧽',bin:'rest'}
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
 {id:'bord',icon:'🟥',title:'Klassikale kleurenquiz',text:'Kinderen steken rood, blauw of geel omhoog.',img:'breeven.jpg'},
 {id:'kaartvak',icon:'🗺️',title:'Zoek het vak op de kaart',text:'Gebruik kolomletters, rijnummers en de legende.',img:'stratenplan-school.png'},
 {id:'afvalladder',icon:'♻️',title:'De afval-ladder',text:'Wat is voorkomen, hergebruik, recycleren, verbranden of storten?',img:'recycleren-illustratie.jpg'},
 {id:'gebieden',icon:'🌍',title:'Herken het gebied',text:'Woongebied, natuurgebied, landbouwgebied of industriegebied?',img:'landbouwgebied-illustratie.jpg'}
];
const app=document.querySelector('#app'),home=document.querySelector('#homeButton'),hub=document.querySelector('#hubButton');let state={game:null,index:0,score:0,items:[],revealed:false};
const shuffle=a=>{const copy=[...a];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy};const sample=(a,n)=>shuffle(a).slice(0,n);const esc=s=>s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const mixQuestion=x=>{const mixed=shuffle(x.a.map((text,index)=>({text,correct:index===x.right})));return {...x,a:mixed.map(o=>o.text),right:mixed.findIndex(o=>o.correct)}};
function done(){try{return JSON.parse(localStorage.getItem('zisa_wo_bornem_done')||'[]')}catch{return[]}}function markDone(id){localStorage.setItem('zisa_wo_bornem_done',JSON.stringify([...new Set([...done(),id])]))}
function menu(){state={game:null,index:0,score:0,items:[],revealed:false};home.hidden=true;hub.hidden=false;app.innerHTML='';app.append(document.querySelector('#menuTemplate').content.cloneNode(true));const ids=games.map(g=>g.id),finished=done().filter(id=>ids.includes(id));document.querySelector('#gameGrid').innerHTML=games.map((g,i)=>`<button class="game-card color-${i+1} ${finished.includes(g.id)?'done':''}" data-game="${g.id}"><img class="game-thumb" src="assets/images/${g.img}" alt=""><span class="game-icon">${g.icon}</span><h3>${g.title}</h3><p>${g.text}</p><b>Start spelen →</b></button>`).join('');document.querySelectorAll('[data-game]').forEach(b=>b.onclick=()=>start(b.dataset.game));const pct=Math.round(finished.length/games.length*100);document.querySelector('#progressBar').style.width=pct+'%';document.querySelector('#progressText').textContent=`${finished.length} van ${games.length} oefeningen gedaan op dit toestel`}
function head(title,total){return `<div class="game-head"><div><p class="eyebrow">OEFENEN</p><h1>${title}</h1></div><span class="count">${Math.min(state.index+1,total)} / ${total}</span></div>`}
function start(id){state.game=id;state.index=0;state.score=0;state.revealed=false;state.teams=[0,0];state.boardIntro=id==='bord';hub.hidden=true;home.hidden=false;if(id==='beeldwoord')state.items=sample(picturePairs,12);if(id==='betekenis')state.items=sample(words,10);if(id==='bornem')state.items=sample(places,8);if(id==='sorteren')state.items=sample(words.filter(x=>['kaart','landschap','bestuur'].includes(x.c)),10);if(id==='toets')state.items=sample(testQuestions,10).map(mixQuestion);if(id==='bord')state.items=shuffle(testQuestions).map(mixQuestion);if(id==='kaartvak')state.items=shuffle(mapLocations);if(id==='afvalladder')state.items=shuffle(wasteLadderSituations);if(id==='gebieden')state.items=shuffle(areaQuestions);render()}
function render(){window.scrollTo({top:0,left:0,behavior:'auto'});if(state.game==='bord'&&state.boardIntro)return boardIntro();if(state.index>=state.items.length)return result();({beeldwoord:pictureMatch,betekenis:meaning,bornem:bornem,sorteren:sort,toets:test,bord:board,kaartvak:mapGridExercise,afvalladder:wasteLadderGame,gebieden:areaGame}[state.game])();addPromptAudio();addAnswerAudio()}
function sayText(text){if(!('speechSynthesis'in window))return;const synth=window.speechSynthesis;synth.cancel();synth.resume();const speak=()=>{const u=new SpeechSynthesisUtterance(text);const voices=synth.getVoices();u.voice=voices.find(v=>v.lang.toLowerCase()==='nl-be')||voices.find(v=>v.lang.toLowerCase().startsWith('nl'))||null;u.lang=u.voice?.lang||'nl-BE';u.rate=.86;synth.speak(u)};speak();if(!synth.speaking)setTimeout(speak,180)}
function addPromptAudio(){document.querySelectorAll('.question-card .prompt,.board-question').forEach(prompt=>{if(prompt.querySelector('.prompt-audio'))return;const text=prompt.textContent.trim();const audio=document.createElement('button');audio.type='button';audio.className='prompt-audio';audio.textContent='🔊';audio.title='Lees de opdracht voor';audio.setAttribute('aria-label','Lees de opdracht voor');audio.onclick=e=>{e.preventDefault();e.stopPropagation();sayText(text)};prompt.prepend(audio)})}
function addAnswerAudio(){document.querySelectorAll('.answer,.sort-choice,.board-option').forEach(option=>{if(option.querySelector('.answer-audio'))return;const text=option.textContent.trim();const audio=document.createElement('span');audio.className='answer-audio';audio.textContent='🔊';audio.title=`Luister: ${text}`;audio.setAttribute('aria-label',`Lees ${text} voor`);audio.onclick=e=>{e.preventDefault();e.stopPropagation();sayText(text)};option.prepend(audio)})}
function pictureMatch(){const x=state.items[state.index];const opts=shuffle([x,...sample(picturePairs.filter(y=>y.w!==x.w),3)]);app.innerHTML=head('Verbind woord en beeld',state.items.length)+`<section class="question-card photo-question"><img src="assets/images/${x.img}" alt="Afbeelding bij een woord"><p class="prompt">Welk woord hoort bij deze afbeelding?</p><div class="answer-grid">${opts.map(o=>`<button class="answer" data-right="${o.w===x.w}">${esc(o.w)}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindAnswers()}
function optionsFor(x){return shuffle([x,...sample(words.filter(y=>y.w!==x.w),3)])}
function meaning(){const x=state.items[state.index];const opts=optionsFor(x);app.innerHTML=head('Kies de betekenis',state.items.length)+`<section class="question-card"><p class="prompt">Wat betekent <span style="color:var(--green)">${esc(x.w)}</span>?</p><div class="answer-grid">${opts.map(o=>`<button class="answer" data-right="${o.w===x.w}">${esc(o.d)}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindAnswers()}
function bindAnswers(){document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>{if(document.querySelector('.answer.correct,.answer.wrong'))return;const right=b.dataset.right==='true';b.classList.add(right?'correct':'wrong');if(!right)document.querySelector('.answer[data-right="true"]').classList.add('correct');if(right)state.score++;document.querySelector('#feedback').innerHTML=(right?'Goed gezien!':'Kijk nog eens naar het groene antwoord.')+` <button class="next-button" id="next">Volgende</button>`;document.querySelector('#next').onclick=()=>{state.index++;render()}})}
function bornem(){const x=state.items[state.index];const opts=shuffle([x,...sample(places.filter(y=>y.name!==x.name),3)]);app.innerHTML=head('Waar in Bornem?',state.items.length)+`<section class="question-card photo-question"><img src="assets/images/${x.img}" alt="Foto van een plaats in Bornem"><p class="prompt">Wat zie je op de foto?</p><div class="answer-grid">${opts.map(o=>`<button class="answer" data-right="${o.name===x.name}">${esc(o.name)}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindAnswers()}
function sort(){const x=state.items[state.index];const labels={kaart:'Kaart en adres',landschap:'Gebieden en landschap',bestuur:'Bestuur en diensten'};const choices=shuffle(Object.entries(labels));app.innerHTML=head('Sorteer het woord',state.items.length)+`<section class="question-card"><p class="prompt">Waar hoort <span style="color:var(--green)">${esc(x.w)}</span> het best bij?</p><div class="sort-zone">${choices.map(([k,v])=>`<button class="sort-choice" data-right="${k===x.c}">${v}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;document.querySelectorAll('.sort-choice').forEach(b=>b.onclick=()=>{if(document.querySelector('.sort-choice.correct,.sort-choice.wrong'))return;const right=b.dataset.right==='true';b.classList.add(right?'correct':'wrong');if(!right)document.querySelector('.sort-choice[data-right="true"]').classList.add('correct');if(right)state.score++;document.querySelector('#feedback').innerHTML=(right?'Juist gesorteerd!':'Dit woord past beter bij het groene vak.')+` <button class="next-button" id="next">Volgende</button>`;document.querySelector('#next').onclick=()=>{state.index++;render()}})}
function wasteLadderGame(){const x=state.items[state.index],options=shuffle(wasteLadder);app.innerHTML=head('De afval-ladder',state.items.length)+`<section class="question-card ladder-question"><div class="waste-ladder">${wasteLadder.map((step,i)=>`<div class="ladder-step" style="--step:${step.color};--indent:${i*12}px"><b>${i+1}</b><span><strong>${step.label}</strong><small>${step.short}</small></span></div>`).join('')}</div><div class="ladder-task"><span class="ladder-icon">${x.icon}</span><p class="prompt">${esc(x.q)}<br><em>Welke trede past het best?</em></p></div><div class="ladder-answers">${options.map(step=>`<button class="answer ladder-choice" data-right="${step.key===x.right}" style="--choice:${step.color}">${step.label}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindAnswers()}
function areaGame(){const x=state.items[state.index],options=shuffle(areaTypes);app.innerHTML=head('Herken het gebied',state.items.length)+`<section class="question-card area-question"><div class="area-visual">${x.img?`<img src="assets/images/${x.img}?v=2" alt="Afbeelding van een gebied">`:`<span>${x.icon}</span>`}</div><p class="prompt">${esc(x.q)}</p><div class="answer-grid area-answers">${options.map(area=>`<button class="answer" data-right="${area.key===x.right}">${area.label}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindAnswers()}
function mapGridExercise(){const x=state.items[state.index],right=`${x.col}${x.row}`,coords=mapLocations.map(p=>`${p.col}${p.row}`),options=shuffle([right,...sample(coords.filter(c=>c!==right),3)]);const cells=Array.from({length:16},()=>'<span></span>').join('');app.innerHTML=head('Zoek het vak op de kaart',state.items.length)+`<section class="question-card map-question"><p class="prompt">In welk vak vind je ${esc(x.name)}?</p><div class="bornem-map"><div class="map-cols"><b>A</b><b>B</b><b>C</b><b>D</b></div><div class="map-rows"><b>1</b><b>2</b><b>3</b><b>4</b></div><div class="map-canvas"><img src="assets/images/stratenplan-school.png" alt="Stratenplan van Bornem"><div class="map-lines">${cells}</div>${mapLocations.map(p=>`<span class="map-marker" style="left:${p.x}%;top:${p.y}%" title="${esc(p.name)}">${p.icon}</span>`).join('')}</div></div><div class="map-legend">${mapLocations.map(p=>`<span>${p.icon} ${esc(p.name)}</span>`).join('')}</div><div class="answer-grid map-answers">${options.map(c=>`<button class="answer" data-right="${c===right}">${c}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindAnswers()}
function test(){const x=state.items[state.index];app.innerHTML=head('Toetstraining',state.items.length)+`<section class="question-card"><p class="prompt">${esc(x.q)}</p><div class="answer-grid">${x.a.map((o,i)=>`<button class="answer" data-right="${i===x.right}">${esc(o)}</button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>{if(document.querySelector('.answer.correct,.answer.wrong'))return;const right=b.dataset.right==='true';b.classList.add(right?'correct':'wrong');if(!right)document.querySelector('.answer[data-right="true"]').classList.add('correct');if(right)state.score++;document.querySelector('#feedback').innerHTML=`${right?'Goed!':'Nog even onthouden:'} ${esc(x.why)} <button class="next-button" id="next">Volgende</button>`;document.querySelector('#next').onclick=()=>{state.index++;render()}})}
function housing(){const x=state.items[state.index];const opts=shuffle(x.opts);app.innerHTML=head('Wonen en landschap',state.items.length)+`<section class="question-card housing-card"><p class="prompt">${esc(x.q)}</p><div class="housing-grid">${opts.map(o=>`<button class="answer housing-answer" data-right="${o.key===x.correct}"><img src="assets/images/${o.img}" alt=""><span>${esc(o.label)}</span></button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindAnswers()}
function waste(){const x=state.items[state.index];app.innerHTML=head('Sorteer het afval',state.items.length)+`<section class="question-card waste-card"><p class="class-tip">Op het bord? Laat iedereen de kleur van de juiste bak omhoogsteken.</p><div class="waste-object" id="wasteObject" draggable="true" role="button" tabindex="0" aria-label="Sleep ${esc(x.name)} naar de juiste vuilbak"><span>${x.icon}</span><strong>${esc(x.name)}</strong><em>Sleep mij!</em></div><p class="prompt">Sleep het afval naar de juiste vuilbak.</p><div class="waste-grid">${wasteBins.map(bin=>`<button class="answer waste-bin bin-${bin.key}" data-bin="${bin.key}" data-right="${bin.key===x.bin}"><span class="bin-lid"></span><strong>${esc(bin.label)}</strong><small>${bin.color}</small></button>`).join('')}</div><p class="feedback" id="feedback"></p></section>`;bindWasteDrag()}
function bindWasteDrag(){const object=document.querySelector('#wasteObject'),bins=[...document.querySelectorAll('.waste-bin')];let ghost=null,moved=false,checking=false,solved=false;const choose=bin=>{if(checking||solved)return;const right=bin.dataset.right==='true';if(!right){checking=true;bin.classList.add('wrong-shake');document.querySelector('#feedback').textContent='Oei, die bak trilt! Probeer nog eens.';sayText('Oei, probeer nog eens.');setTimeout(()=>{bin.classList.remove('wrong-shake');checking=false},650);return}solved=true;bin.classList.add('correct','bin-catch');object.classList.add('sorted');state.score++;document.querySelector('#feedback').innerHTML=`Goed gesorteerd! <button class="next-button" id="next">Volgende</button>`;sayText('Goed gesorteerd!');document.querySelector('#next').onclick=()=>{state.index++;render()}};object.addEventListener('dragstart',e=>{if(solved)return e.preventDefault();e.dataTransfer.setData('text/plain','afval');object.classList.add('dragging')});object.addEventListener('dragend',()=>object.classList.remove('dragging'));bins.forEach(bin=>{bin.onclick=()=>choose(bin);bin.addEventListener('dragover',e=>{e.preventDefault();if(!solved)bin.classList.add('drag-over')});bin.addEventListener('dragleave',()=>bin.classList.remove('drag-over'));bin.addEventListener('drop',e=>{e.preventDefault();bins.forEach(b=>b.classList.remove('drag-over'));choose(bin)})});object.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'||solved)return;moved=false;object.setPointerCapture(e.pointerId);ghost=object.cloneNode(true);ghost.removeAttribute('id');ghost.className='waste-drag-ghost';document.body.append(ghost);ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px'});object.addEventListener('pointermove',e=>{if(!ghost)return;moved=true;ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px';bins.forEach(b=>b.classList.remove('drag-over'));const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('.waste-bin');if(target)target.classList.add('drag-over')});object.addEventListener('pointerup',e=>{if(!ghost)return;ghost.remove();ghost=null;bins.forEach(b=>b.classList.remove('drag-over'));const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('.waste-bin');if(moved&&target)choose(target)})}
function boardIntro(){app.innerHTML=`<section class="board-shell board-welcome"><div class="result-emoji">🌟</div><p class="eyebrow">SAMEN AAN HET BORD</p><h1>Sterrenronde</h1><p class="board-question">Zo spelen we</p><ol class="board-steps"><li>Iedereen krijgt een <b>rode</b>, <b>blauwe</b> en <b>gele</b> kleurkaart.</li><li>Luister naar de vraag en bekijk de drie antwoorden.</li><li>Steek de kleur van jouw antwoord tegelijk omhoog.</li><li>De juf toont daarna het juiste antwoord.</li></ol><button class="primary-button" id="startBoard">Start de sterrenronde</button></section>`;document.querySelector('#startBoard').onclick=()=>{state.boardIntro=false;sayText('Klaar voor de sterrenronde. Kies bij elke vraag rood, blauw of geel en steek jouw kleurkaart omhoog.');render()}}
function board(){const x=state.items[state.index],colors=['rood','blauw','geel'];app.innerHTML=`<section class="board-shell"><div class="board-top"><span>Vraag ${state.index+1} van ${state.items.length}</span><div class="team-score"><button data-team="0">Team zon: ${state.teams[0]}</button><button data-team="1">Team maan: ${state.teams[1]}</button></div></div><p class="board-instruction">Steek rood, blauw of geel omhoog.</p><p class="board-question">${esc(x.q)}</p><div class="board-options">${x.a.slice(0,3).map((o,i)=>`<div class="board-option"><b>${colors[i]}</b>${esc(o)}</div>`).join('')}</div><div class="board-explain" id="boardExplain" hidden><strong>Juiste kleur: ${colors[x.right]}</strong><span>${esc(x.why)}</span></div><div class="board-controls"><button class="secondary-button" id="revealBoard">Toon het antwoord</button><button class="primary-button" id="nextBoard" hidden>Volgende vraag</button></div></section>`;document.querySelectorAll('[data-team]').forEach(b=>b.onclick=()=>{state.teams[Number(b.dataset.team)]++;board();addPromptAudio();addAnswerAudio()});document.querySelector('#revealBoard').onclick=()=>{document.querySelector('#boardExplain').hidden=false;document.querySelector('#nextBoard').hidden=false;document.querySelector('#revealBoard').hidden=true};document.querySelector('#nextBoard').onclick=()=>{state.index++;render()}}
function result(){markDone(state.game);if(state.game==='bord'){app.innerHTML=`<section class="result-card"><div class="result-emoji">🏆</div><p class="eyebrow">BORDQUIZ KLAAR</p><h1>Team zon ${state.teams[0]} · ${state.teams[1]} Team maan</h1><p>Knap samengewerkt! Bespreek samen welke leerstof nog een extra ronde nodig heeft.</p><div class="result-actions"><button class="secondary-button" id="menu">Naar de oefeningen</button><button class="primary-button" id="retry">Nieuwe ronde</button></div></section>`}else{const pct=Math.round(state.score/state.items.length*100);app.innerHTML=`<section class="result-card"><div class="result-emoji">${pct>=80?'🏆':pct>=60?'🌟':'💪'}</div><p class="eyebrow">KLAAR</p><h1>${state.score} van ${state.items.length} juist</h1><p>${pct>=80?'Knap gedaan! Je bent goed op weg voor de toets.':pct>=60?'Mooi geoefend. Nog één keer spelen maakt je nog sterker.':'Goed dat je oefent. Kijk naar de groene antwoorden en probeer daarna opnieuw.'}</p><div class="result-actions"><button class="secondary-button" id="menu">Naar de oefeningen</button><button class="primary-button" id="retry">Nog een keer</button></div></section>`}document.querySelector('#menu').onclick=menu;document.querySelector('#retry').onclick=()=>start(state.game)}
home.onclick=menu;
const readButton=document.querySelector('#readButton');readButton.onclick=()=>{const nodes=document.querySelectorAll('.game-card h3,.game-head h1,.question-card .prompt,.board-question,.result-card h1,.result-card p');const text=[...nodes].filter(n=>!n.hidden&&n.offsetParent!==null).map(n=>{const copy=n.cloneNode(true);copy.querySelectorAll('button').forEach(b=>b.remove());return copy.textContent.trim()}).filter(Boolean).join('. ');sayText(text||'Kies een oefening.')};
const dlg=document.querySelector('#teacherDialog');document.querySelector('#teacherButton').onclick=()=>{dlg.showModal();const box=document.querySelector('#qrBox');box.replaceChildren();const url=location.protocol==='file:'?'Publiceer de website eerst om de definitieve link te krijgen.':location.href;if(window.QRCode&&location.protocol!=='file:'){new QRCode(box,{text:url,width:220,height:220,colorDark:'#145c57',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M});document.querySelector('#qrMessage').textContent=url}else{box.textContent=location.protocol==='file:'?'De QR-code verschijnt automatisch zodra de site online staat.':'De QR-bibliotheek kon niet worden geladen.';document.querySelector('#qrMessage').textContent=''}};document.querySelector('#closeTeacher').onclick=()=>dlg.close();document.querySelector('#copyLink').onclick=async()=>{if(location.protocol==='file:')return alert('De definitieve link is er zodra de site online staat.');await navigator.clipboard.writeText(location.href);document.querySelector('#copyLink').textContent='Link gekopieerd ✓'};document.querySelector('#printQr').onclick=()=>window.print();menu();
