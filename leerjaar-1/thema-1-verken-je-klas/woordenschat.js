const local='assets/woordenschat-l1/',theme='assets/',l2='../../leerjaar-2/thema-1-bornem/assets/images/';
const data=[
['de klas',local+'klas-juf-foto.png','Een lokaal in de school waar kinderen samen leren en werken.','place'],
['het adres',local+'begrip-adres.png','De plaats waar iemand woont: straatnaam, huisnummer, postcode en gemeente.','what'],
['het afval',l2+'foto-afval.webp','Alles wat we niet meer nodig hebben en weggooien.','what'],
['de as',local+'begrip-as.png','Een lijn waar iets rond draait.','what'],
['de buurt',local+'buurt-school-echt.png','De omgeving dicht bij onze school waar mensen wonen, werken en langskomen.','place'],
['dichtbij',local+'begrip-dichtbij.png','Niet ver weg.','quality'],
['het dorp',local+'begrip-dorp.png','Een kleine plaats met weinig huizen en veel groen.','place'],
['het gebouw',l2+'school-de-linde.png','Iets wat gebouwd is en waarin plaats is voor mensen, dieren of spullen.','what'],
['de gemeente',l2+'kaart-bornem.png','Een dorp of stad waar mensen wonen en dat een eigen bestuur heeft.','place'],
['het gelijkvloers',local+'begrip-gelijkvloers.jpg','De verdieping waarvoor je geen trap op of af hoeft.','place'],
['hergebruiken',local+'foto-hergebruik.webp','Iets opnieuw gebruiken.','verb'],
['het huisnummer',local+'begrip-huisnummer.png','Het nummer op een gebouw.','what'],
['de kaart',l2+'kaart-deelgemeenten-buurgemeenten-bornem.png','Een tekening waarop je ziet waar plaatsen, wegen of water liggen.','what'],
['het koetswerk',local+'begrip-koetswerk.png','Het buitenste deel van een auto.','what'],
['landelijk',theme+'landelijk.webp','Met veel velden, weinig huizen en veel groen.','quality'],
['het landschap',l2+'landschap-kasteel-bornem.webp','Hoe een plaats eruitziet: de natuur en de gebouwen samen.','what'],
['de legende','assets/woordenschat-l1/legende-klas-l1.svg','De uitleg van kleuren en tekens op een kaart.','what'],
['links',local+'begrip-links.png','De kant waar een zin begint.','place'],
['de luchtfoto',l2+'luchtfoto-school-nieuw.png','Een foto die vanuit de lucht is genomen.','what'],
['de maquette',local+'begrip-maquette.png','Een gebouw of omgeving die in het klein is nagemaakt.','what'],
['de natuur',l2+'gebied-natuurgebied-foto-v2.webp','Alles wat niet door mensen is gemaakt, zoals planten en dieren.','what'],
['de omgeving',l2+'luchtfoto-school-nieuw.png','Alles wat rond een plek of persoon is.','place'],
['(zich) ontspannen',local+'begrip-ontspannen.png','Iets doen wat je graag doet en waar je rustig van wordt.','verb'],
['het ontwerp',local+'begrip-ontwerp.png','Een plan voor iets dat je wilt maken.','what'],
['het pictogram',local+'begrip-pictogram.png','Een eenvoudige tekening of een symbool dat iets duidelijk maakt.','what'],
['de plattegrond',theme+'plattegrond.webp','Een tekening van een plaats of ruimte van bovenaf.','what'],
['de postbode',local+'begrip-postbode.png','Iemand die brieven en pakjes rondbrengt.','person'],
['de postcode',local+'begrip-postcode-basis.png','Een nummer bij een gemeente dat helpt om post juist te bezorgen.','what'],
['recycleren',l2+'foto-recycleren.webp','Uit afval iets nieuws maken.','verb'],
['rechts',local+'begrip-rechts.png','De kant waar een zin eindigt.','place'],
['de schets',local+'begrip-schets.png','Een eenvoudige tekening van hoe iets eruitziet.','what'],
['de school',local+'school-de-linde-echt.png','De plaats waar kinderen samen leren en waar leerkrachten werken.','place'],
['sorteren',local+'begrip-sorteren.png','Dingen per soort bij elkaar leggen, zoals afval in de juiste bak.','verb'],
['de stad',l2+'landschap-stad-stedelijk-2.webp','Een grote plaats met veel huizen, winkels en verkeer.','place'],
['stedelijk',local+'begrip-stedelijk.png','Met veel gebouwen, veel verkeer en weinig groen.','quality'],
['de straatnaam',local+'begrip-straatnaam.jpg','De naam van een straat.','what'],
['het stratenplan',l2+'stratenplan-school.png','Een kaart van de straten in een stad, dorp of wijk.','what'],
['de verdieping',local+'begrip-verdieping.jpg','Een deel van een gebouw waarvoor je een trap op of af moet.','place'],
['afval voorkomen',local+'foto-afval-voorkomen.webp','Ervoor zorgen dat je geen afval maakt.','verb'],
['het wiel',local+'begrip-wiel.png','Een ronde schijf die kan draaien en iets laat bewegen.','what']
];
const THEME='Mijn klas, mijn school, mijn buurt',HOME=new URL('./',location.href).href,tool=document.querySelector('#tool'),intro=document.querySelector('#intro');
function cards(){return `<section id="cards">${data.map(([w,img])=>`<article class="card"><img class="photo" src="${img}" alt="${w}"><h2>${w}</h2></article>`).join('')}</section>`}
function question(w,i){const choices=[`Wijs iets aan dat bij “${w}” past.`,`Gebruik “${w}” in een goede zin.`,`Leg in je eigen woorden uit wat “${w}” betekent.`,`Geef een voorbeeld van “${w}”.`];return choices[i%choices.length]}
function strips(){return `<section class="strips">${data.map(([w,,help],i)=>`<article class="strip"><b>${w}</b><span>${question(w,i)}</span><small><strong>Houvast leerkracht:</strong> ${help}</small></article>`).join('')}</section>`}
function wall(){return `<p class="wall-note">Elk kaartje heeft een afbeelding én een korte uitleg. Het te raden woord staat er niet op.</p><section class="wall-grid">${data.map(([w,img,help,kind])=>`<article class="wall-card" data-kind="${kind}"><img src="${img}" alt="Beeld bij ${w}"><div class="wall-description">${help}</div></article>`).join('')}</section>`}
function setup(){return `<section class="qr-setup"><h2>QR-kaartjes voor de kinderen</h2><label>Aantal kinderen <input id="qrCount" type="number" min="1" max="40" value="24"></label><div><button id="makeQr">Maak kaartjes</button><button id="makePoster">Maak één klasposter</button></div></section><section id="qrOutput"></section>`}
function addQr(box,size){new QRCode(box,{text:HOME,width:size,height:size,colorDark:'#6552b8',colorLight:'#fff',correctLevel:QRCode.CorrectLevel.M})}
function qrCards(n){document.body.dataset.print='qr-cards';const o=document.querySelector('#qrOutput');o.className='qr-grid';o.innerHTML=Array.from({length:n},(_,i)=>`<article class="qr-card"><h2>Ik oefen</h2><h3>${THEME}</h3><div class="qr-code" id="qr-${i}"></div><p>Scan en oefen mee!</p></article>`).join('');document.querySelectorAll('.qr-code').forEach(x=>addQr(x,105))}
function poster(){document.body.dataset.print='qr-poster';const o=document.querySelector('#qrOutput');o.className='qr-poster-wrap';o.innerHTML=`<article class="qr-poster"><p>ZISA WO SPELEN</p><h1>Ik oefen</h1><h2>${THEME}</h2><div id="posterQr"></div><strong>Scan en oefen mee!</strong></article>`;addQr(document.querySelector('#posterQr'),260)}
function show(v){document.body.dataset.view=v;delete document.body.dataset.print;document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===v));if(v==='cards'){intro.textContent=`Alle ${data.length} woorden en herkenbare begrippen, met een duidelijke afbeelding.`;tool.innerHTML=cards()}else if(v==='strips'){intro.textContent='Eén lange dagstrook per woord, met uitleg als houvast voor de leerkracht.';tool.innerHTML=strips()}else if(v==='wall'){intro.textContent='Kaartjes van 6,2 × 7,8 cm: afbeelding en uitleg, zonder het woord.';tool.innerHTML=wall()}else{intro.textContent='Kies QR-kaartjes voor de kinderen of één klasposter.';tool.innerHTML=setup();document.querySelector('#makeQr').onclick=()=>qrCards(Math.max(1,Math.min(40,+document.querySelector('#qrCount').value||1)));document.querySelector('#makePoster').onclick=poster}}
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>show(b.dataset.view));document.querySelector('#printButton').onclick=()=>print();show('cards');
