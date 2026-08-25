const A='assets/';
const data=[
['de biotoop',A+'woord-biotoop.png','Een plek in de natuur waar planten en dieren samenleven.','place'],
['eierleggend',A+'woord-eierleggend.png','Het dier legt eieren. De jongen komen uit een ei.','quality'],
['de fauna',A+'woord-fauna.png','Alle soorten dieren samen.','what'],
['de flora',A+'woord-flora.png','Alle soorten planten samen.','what'],
['de geboorte',A+'woord-geboorte.png','Een jong komt ter wereld.','what'],
['het huisdier',A+'woord-huisdier.png','Een dier dat bij mensen woont en verzorgd wordt.','what'],
['het insect',A+'woord-insect.png','Een klein dier met zes poten en twee voelsprieten.','what'],
['het jong',A+'woord-jong.png','Een dier dat pas geboren is.','what'],
['het kruid',A+'woord-kruid.png','Een kleine plant zonder stam of takken.','what'],
['het kuiken',A+'kuiken-realistisch.png','Een jonge vogel.','what'],
['de leefomgeving',A+'woord-leefomgeving.png','De plek waar een mens, dier of plant woont en alles vindt wat nodig is.','place'],
['levendbarend',A+'woord-levendbarend.png','Het jong groeit in de buik van de moeder en wordt levend geboren.','quality'],
['de levende natuur',A+'woord-levende-natuur.png','Planten en dieren: ze groeien, bewegen of planten zich voort.','what'],
['de loofboom',A+'woord-loofboom.png','Een boom met bladeren die meestal afvallen in de herfst.','what'],
['de naaldboom',A+'woord-naaldboom.png','Een boom met naalden die meestal groen blijven.','what'],
['de niet-levende natuur',A+'woord-niet-levende-natuur.png','Water, steen, lucht en zand: dingen die niet leven.','what'],
['het ongedierte',A+'woord-ongedierte.png','Kleine dieren die schade of overlast veroorzaken.','what'],
['de proef',A+'woord-proef.png','Een onderzoek om te kijken wat er gebeurt.','what'],
['de struik',A+'woord-struik.png','Een lage plant met verschillende dunne stammen.','what'],
['uitbroeden',A+'uitbroeden-realistisch.png','Een dier houdt eieren warm tot de jongen uitkomen.','verb'],
['uitkomen',A+'uitkomen-realistisch.png','Het ei gaat open en het jong verschijnt.','verb'],
['vast',A+'woord-vast.png','Stevig; het stroomt niet.','quality'],
['de vis',A+'woord-vis.png','Een dier met vinnen dat in water leeft.','what'],
['verzorgen',A+'woord-verzorgen.png','Geven wat een mens, dier of plant nodig heeft.','verb'],
['vloeibaar',A+'woord-vloeibaar.png','Het kan stromen, zoals water en melk.','quality'],
['het voedsel',A+'woord-voedsel.png','Wat een levend wezen eet of drinkt.','what'],
['de vogel',A+'woord-vogel.png','Een dier met veren dat eieren met een harde schaal legt.','what'],
['zogen',A+'woord-zogen.png','Een jong drinkt melk bij de moeder.','verb'],
['het zoogdier',A+'woord-zoogdier.png','Een dier waarvan het jong melk bij de moeder drinkt.','what'],
['de zuurstof',A+'woord-zuurstof.png','Een onzichtbare stof in de lucht die nodig is om te ademen.','what']
];
const THEME='Beest en bos · 1ste leerjaar',HOME=new URL('./',location.href).href,tool=document.querySelector('#tool'),intro=document.querySelector('#intro');
function cards(){return `<section id="cards">${data.map(([w,img])=>`<article class="card"><img class="photo" src="${img}" alt="${w}"><h2>${w}</h2></article>`).join('')}</section>`}
function question(w,i){const choices=[`Wijs iets aan dat bij “${w}” past.`,`Gebruik “${w}” in een goede zin.`,`Leg in je eigen woorden uit wat “${w}” betekent.`,`Geef een voorbeeld van “${w}”.`];return choices[i%choices.length]}
function strips(){return `<section class="strips">${data.map(([w,,help],i)=>`<article class="strip"><b>${w}</b><span>${question(w,i)}</span><small><strong>Houvast leerkracht:</strong> ${help}</small></article>`).join('')}</section>`}
function wall(){return `<p class="wall-note">Elk kaartje heeft een afbeelding én een korte uitleg. Het te raden woord staat er niet op.</p><section class="wall-grid">${data.map(([w,img,help,kind])=>`<article class="wall-card" data-kind="${kind}"><img src="${img}" alt="Beeld bij ${w}"><div class="wall-description">${help}</div></article>`).join('')}</section>`}
function enableCardPrintChooser(){const cards=[...document.querySelectorAll('#cards .card')];if(!cards.length)return;const bar=document.createElement('div');bar.className='card-print-tools';bar.innerHTML='<button class="choose-cards">☑ Kies wandplaten</button><span class="selection-actions" hidden><button class="choose-all">Alles kiezen</button> <button class="primary print-chosen">🖨️ Print gekozen</button></span>';tool.prepend(bar);cards.forEach((card,i)=>{const label=document.createElement('label');label.className='card-choice';label.innerHTML=`<input type="checkbox" aria-label="Kies wandplaat ${i+1}"> kiezen`;card.prepend(label);label.querySelector('input').onchange=e=>card.classList.toggle('chosen',e.target.checked)});const actions=bar.querySelector('.selection-actions'),choose=bar.querySelector('.choose-cards');choose.onclick=()=>{const active=document.querySelector('#cards').classList.toggle('selecting');actions.hidden=!active;choose.textContent=active?'✕ Stop met kiezen':'☑ Kies wandplaten'};bar.querySelector('.choose-all').onclick=()=>cards.forEach(card=>{card.classList.add('chosen');card.querySelector('input').checked=true});bar.querySelector('.print-chosen').onclick=()=>printCardSelection()}
function printCardSelection(){if(!document.querySelector('#cards .card.chosen')){alert('Vink eerst minstens één wandplaat aan.');return}document.body.dataset.print='card-selection';setTimeout(()=>print(),50)}
addEventListener('afterprint',()=>{delete document.body.dataset.print});
function setup(){return `<section class="qr-setup"><h2>QR-kaartjes voor de kinderen</h2><label>Aantal kinderen <input id="qrCount" type="number" min="1" max="40" value="24"></label><div><button id="makeQr">Maak kaartjes</button><button id="makePoster">Maak één klasposter</button></div></section><section id="qrOutput"></section>`}
function addQr(box,size){new QRCode(box,{text:HOME,width:size,height:size,colorDark:'#6552b8',colorLight:'#fff',correctLevel:QRCode.CorrectLevel.M})}
function qrCards(n){document.body.dataset.print='qr-cards';const o=document.querySelector('#qrOutput');o.className='qr-grid';o.innerHTML=Array.from({length:n},(_,i)=>`<article class="qr-card"><h2>Ik oefen</h2><h3>${THEME}</h3><div class="qr-code" id="qr-${i}"></div><p>Scan en oefen mee!</p></article>`).join('');document.querySelectorAll('.qr-code').forEach(x=>addQr(x,105))}
function poster(){document.body.dataset.print='qr-poster';const o=document.querySelector('#qrOutput');o.className='qr-poster-wrap';o.innerHTML=`<article class="qr-poster"><p>ZISA WO SPELEN</p><h1>Ik oefen</h1><h2>${THEME}</h2><div id="posterQr"></div><strong>Scan en oefen mee!</strong></article>`;addQr(document.querySelector('#posterQr'),260)}
function show(v){document.body.dataset.view=v;delete document.body.dataset.print;document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===v));if(v==='cards'){intro.textContent=`Alle ${data.length} woorden en herkenbare begrippen, met een duidelijke afbeelding.`;tool.innerHTML=cards();enableCardPrintChooser()}else if(v==='strips'){intro.textContent='Eén lange dagstrook per woord, met uitleg als houvast voor de leerkracht.';tool.innerHTML=strips()}else if(v==='wall'){intro.textContent='Kaartjes van 6,2 × 7,8 cm: afbeelding en uitleg, zonder het woord.';tool.innerHTML=wall()}else{intro.textContent='Kies QR-kaartjes voor de kinderen of één klasposter.';tool.innerHTML=setup();document.querySelector('#makeQr').onclick=()=>qrCards(Math.max(1,Math.min(40,+document.querySelector('#qrCount').value||1)));document.querySelector('#makePoster').onclick=poster}}
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>show(b.dataset.view));document.querySelector('#printButton').onclick=()=>document.body.dataset.view==='cards'&&document.querySelector('#cards .card.chosen')?printCardSelection():print();show('cards');
