(() => {
  const findTasks = [
    { text: 'Klik op het schoolbord waarnaar de kinderen kijken.', x: 20, y: 46, rx: 7, ry: 25 },
    { text: 'Klik op de kast naast het witte bord.', x: 47, y: 9, rx: 6, ry: 10 },
    { text: 'Klik op een schoolbank in de eerste rij. Kijk naar de stoelen: de kinderen kijken naar het schoolbord voor hen.', x: 34, y: 45, rx: 7, ry: 29 },
    { text: 'Klik op de wastafel.', x: 94, y: 82, rx: 7, ry: 10 },
    { text: 'Klik op de kring.', x: 68, y: 14, rx: 23, ry: 14 }
  ];

  const furniture = [];
  // De coördinaten hieronder zijn rechtstreeks op de ingekleurde referentie-
  // plattegrond gemeten. De lege en de gevulde plattegrond krijgen exact
  // dezelfde beeldverhouding, zodat elk meubel als een magneet op dezelfde
  // zichtbare plaats terechtkomt.
  const reference = { width: 885, height: 650 };
  const add = (kind, label, points) => points.forEach((p, i) => {
    furniture.push({
      id: `${kind}-${i}`, kind, label,
      x: p[0] / reference.width * 100,
      y: p[1] / reference.height * 100,
      w: p[2] / reference.width * 100,
      h: p[3] / reference.height * 100,
      angle: p[4] || 0
    });
  });
  add('bank', 'schoolbank', [
    [291,199,48,14,90],[291,258,48,14,90],[291,364,48,14,90],[291,421,48,14,90],
    [377,198,48,14,90],[377,257,48,14,90],[456,199,48,14,90],[457,257,48,14,90],
    [375,362,48,14,90],[374,419,48,14,90],[459,361,48,14,90],[459,420,48,14,90],
    [537,363,48,14,90],[537,423,48,14,90]
  ]);
  add('kring', 'deel van de kring', [
    [531,63,102,28,0],[640,64,102,28,0],[499,123,102,28,20],
    [607,150,102,28,0],[705,92,102,28,-49]
  ]);
  add('bord', 'schoolbord', [[283,57,150,10,0],[189,300,150,10,90]]);
  add('juf', 'bureau van de juf', [[153,147,58,26,59]]);
  add('kast', 'kast', [
    [411,81,66,22,90],[174,221,66,22,90],[174,385,66,22,90],
    [660,333,72,23,90],[659,254,72,23,90],[803,601,102,24,0],
    [52,608,47,20,0],[100,608,46,20,0],[143,608,34,20,0],[151,478,58,22,124]
  ]);
  add('tafel', 'tafel', [
    [234,595,35,27,90],[98,518,50,32,0],[360,596,35,27,90],
    [503,595,35,27,90],[653,592,35,27,90]
  ]);
  add('wastafel', 'wastafel', [[837,514,40,34,0]]);

  // De zichtbare stukken zijn exacte uitsneden uit de echte, gevulde
  // plattegrond. Daardoor komen niet alleen hun plaats, maar ook hun omtrek,
  // stoel, scheidingslijn en verhouding exact overeen met het voorbeeld.
  const spriteBoxes = {
    bank:[[278,168,317,230],[278,228,317,289],[278,333,317,395],[278,389,317,451],[361,167,402,229],[361,227,402,289],[442,168,481,229],[442,227,481,289],[359,331,400,393],[359,388,400,451],[442,331,482,393],[442,388,482,451],[522,332,561,394],[522,392,561,454]],
    kring:[[477,46,587,80],[586,47,696,81],[443,98,554,165],[552,132,662,169],[657,43,753,143]],
    bord:[[203,48,362,66],[179,220,202,381]],
    juf:[[124,111,185,186]],
    kast:[[395,44,426,116],[158,184,189,258],[158,348,189,423],[641,289,679,374],[641,211,678,294],[747,582,859,620],[22,591,75,624],[73,591,125,624],[122,591,161,624],[121,452,181,522]],
    tafel:[[214,570,254,621],[68,497,128,539],[339,570,380,621],[482,570,522,621],[632,567,672,618]],
    wastafel:[[812,491,863,535]]
  };
  const filledCanvas = {left:22, top:30, width:842, height:595};
  const emptyCanvas = {left:17, top:20, width:951, height:674, imageWidth:977, imageHeight:707};
  Object.entries(spriteBoxes).forEach(([kind, boxes]) => {
    const items = furniture.filter(item => item.kind === kind);
    boxes.forEach((box, index) => {
      const item = items[index], [sourceLeft, sourceTop, sourceRight, sourceBottom] = box;
      const left = emptyCanvas.left + (sourceLeft - filledCanvas.left) * emptyCanvas.width / filledCanvas.width;
      const top = emptyCanvas.top + (sourceTop - filledCanvas.top) * emptyCanvas.height / filledCanvas.height;
      const right = emptyCanvas.left + (sourceRight - filledCanvas.left) * emptyCanvas.width / filledCanvas.width;
      const bottom = emptyCanvas.top + (sourceBottom - filledCanvas.top) * emptyCanvas.height / filledCanvas.height;
      Object.assign(item, {
        x:(left + right) / 2 / emptyCanvas.imageWidth * 100,
        y:(top + bottom) / 2 / emptyCanvas.imageHeight * 100,
        w:(right - left) / emptyCanvas.imageWidth * 100,
        h:(bottom - top) / emptyCanvas.imageHeight * 100,
        angle:0,
        sprite:`assets/classroom-pieces/${kind}-${index}.png?v=1`
      });
    });
  });

  const validZone = {
    bank: (x,y) => x > 25 && x < 68 && y > 17 && y < 70,
    kring: (x,y) => x > 45 && x < 84 && y < 29,
    bord: (x,y) => (y < 16 && x < 55) || (x < 30 && y > 18 && y < 75),
    juf: (x,y) => x < 31 && y < 34,
    kast: (x,y) => x < 27 || x > 70 || y < 19 || y > 79,
    tafel: (x,y) => y > 70,
    wastafel: (x,y) => x > 82 && y > 66
  };

  const say = text => typeof speak === 'function' && speak(text);
  const head = (title, step) => `<div class="gamehead"><h1>${title}</h1><span class="counter">${step} / 2</span></div>`;
  function shape(kind, angle = 0) {
    const amount = {bank:3,kring:1,bord:1,juf:2,kast:2,tafel:1,wastafel:2}[kind] || 1;
    return `<span class="furniture-shape shape-${kind}" style="--angle:${angle}deg">${'<i></i>'.repeat(amount)}</span>`;
  }
  function placedHtml(items) {
    return items.map(p => `<span class="classroom-placed" style="--x:${p.x}%;--y:${p.y}%;--w:${p.w}%;--h:${p.h}%;--angle:${p.angle}deg"><img src="${p.sprite}" alt=""></span>`).join('');
  }

  function addMenuButton() {
    const games = document.querySelector('.games');
    if (!games || document.querySelector('[data-classroom-game]')) return;
    const button = document.createElement('button');
    button.className = 'game'; button.dataset.classroomGame = '1';
    button.innerHTML = '<span class="emoji">🏫</span><strong>Onze klas op de plattegrond</strong><small>Zoek de meubels en richt daarna de hele klas in.</small>';
    button.onclick = openFind; games.append(button);
  }

  function openFind() {
    document.body.classList.remove('classroom-building');
    allThemes.hidden = true; gameMenu.hidden = false; let index = 0;
    const activeTasks=[...findTasks];
    for(let i=activeTasks.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[activeTasks[i],activeTasks[j]]=[activeTasks[j],activeTasks[i]]}
    const draw = () => {
      const task = activeTasks[index]; state.spoken = task.text;
      app.innerHTML = head('Onze klas op de plattegrond',1) + `<section class="question classroom-find-game">
        <div class="listenline"><button class="listen" aria-label="Lees de opdracht voor">🔊</button><p class="prompt">${task.text}</p></div>
        <p class="classroom-find-progress">Vraag ${index+1} van ${activeTasks.length}</p>
        <div class="real-classroom-plan classroom-find-plan"><img src="assets/klasplattegrond-meubels-kleur.png?v=3" alt="Gevulde klasplattegrond met alle meubels"><span class="placed-furniture"></span></div>
        <p class="feedback"></p></section>`;
      document.querySelector('.listen').onclick = () => say(task.text);
      const plan = document.querySelector('.classroom-find-plan');
      plan.onclick = event => {
        const r = plan.getBoundingClientRect(), x = (event.clientX-r.left)/r.width*100, y = (event.clientY-r.top)/r.height*100;
        if (Math.abs(x-task.x)>task.rx || Math.abs(y-task.y)>task.ry) {
          plan.classList.remove('wrong'); void plan.offsetWidth; plan.classList.add('wrong');
          document.querySelector('.feedback').textContent='Probeer nog eens.'; say('Probeer nog eens.'); return;
        }
        plan.querySelector('.placed-furniture').innerHTML=`<b class="find-marker" style="--x:${x}%;--y:${y}%">✓</b>`;
        document.querySelector('.feedback').textContent='Goed gevonden!'; say('Goed gevonden!');
        setTimeout(() => { index++; index < activeTasks.length ? draw() : finish(); }, 650);
      };
      setTimeout(() => say(task.text), 160);
    };
    const finish = () => {
      state.spoken='Alle meubels gevonden. Richt nu de hele lege klas in.';
      app.innerHTML=head('Onze klas op de plattegrond',1)+`<section class="result"><div class="trophy">⭐</div><h1>Goed gezocht!</h1><p>Nu mag je de hele klas inrichten.</p><button id="startLayout">Richt de klas in →</button></section>`;
      document.querySelector('#startLayout').onclick=openLayout; say(state.spoken);
    };
    draw();
  }

  function openLayout() {
    document.body.classList.add('classroom-building');
    let selectedKind=null, ghost=null; const placed=[], remaining=[...furniture];
    const instruction='Bouw de klas. Sleep elk meubel ongeveer naar de juiste plek. De magneet zet het daarna precies goed.';
    const names={bank:['schoolbank','schoolbanken'],kring:['kringbank','kringbanken'],bord:['schoolbord','schoolborden'],juf:['bureau van de juf','bureaus van de juf'],kast:['kast','kasten'],tafel:['tafel','tafels'],wastafel:['wastafel','wastafels']};
    const kinds=['bank','kring','bord','juf','kast','tafel','wastafel'];
    const render = () => {
      state.spoken=instruction;
      const tray=kinds.map(kind=>{const count=remaining.filter(p=>p.kind===kind).length;if(!count)return'';const sample=remaining.find(p=>p.kind===kind);return `<button class="classroom-piece${selectedKind===kind?' selected':''}" data-kind="${kind}" aria-label="Kies ${names[kind][count===1?0:1]}">${shape(kind,sample.angle)}<b>${names[kind][count===1?0:1]} <span>${count}</span></b></button>`}).join('');
      app.innerHTML=head('Richt onze klas in',2)+`<section class="question classroom-layout-game">
        <div class="listenline"><button class="listen" aria-label="Lees de opdracht voor">🔊</button><p class="prompt">${instruction}</p></div>
        <div class="classroom-piece-tray">${tray}</div>
        <div class="real-classroom-plan layout-plan">
          <img class="classroom-reference-plan" src="assets/klasplattegrond-meubels-kleur.png?v=3" alt="" aria-hidden="true">
          <img class="classroom-empty-plan" src="assets/klasplattegrond-echt-leeg.png?v=3" alt="Lege klasplattegrond">
          <span class="placed-furniture">${placedHtml(placed)}</span>
        </div>
        <div class="classroom-build-actions"><button class="primary" id="classReady">Klaar ✓</button><p class="feedback">Nog ${remaining.length} meubelstukken.</p></div></section>`;
      document.querySelector('.listen').onclick=()=>say(instruction);
      const pieces=[...document.querySelectorAll('.classroom-piece')], plan=document.querySelector('.layout-plan');
      const choose=kind=>{selectedKind=kind;pieces.forEach(p=>p.classList.toggle('selected',p.dataset.kind===kind))};
      const tryPlace=(clientX,clientY)=>{
        if(!selectedKind)return;
        const r=plan.getBoundingClientRect(),x=(clientX-r.left)/r.width*100,y=(clientY-r.top)/r.height*100;
        const candidates=remaining.filter(p=>p.kind===selectedKind);
        const nearest=candidates.map(item=>({item,distance:Math.hypot((x-item.x)/12,(y-item.y)/12)})).sort((a,b)=>a.distance-b.distance)[0];
        if(!nearest||nearest.distance>1){
          plan.classList.remove('wrong');void plan.offsetWidth;plan.classList.add('wrong');
          document.querySelector('.feedback').textContent='Bijna. Sleep het meubel wat dichter bij de juiste plek.';return;
        }
        const item=nearest.item;
        placed.push(item);remaining.splice(remaining.indexOf(item),1);selectedKind=remaining.some(p=>p.kind===item.kind)?item.kind:null;render();
      };
      pieces.forEach(piece=>{piece.onclick=()=>choose(piece.dataset.kind);piece.onpointerdown=e=>{e.preventDefault();choose(piece.dataset.kind);piece.setPointerCapture(e.pointerId);ghost=piece.cloneNode(true);ghost.className='classroom-drag-ghost';document.body.append(ghost);ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px'};piece.onpointermove=e=>{if(ghost){ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px'}};piece.onpointerup=e=>{if(!ghost)return;ghost.remove();ghost=null;const el=document.elementFromPoint(e.clientX,e.clientY);if(el?.closest('.layout-plan'))tryPlace(e.clientX,e.clientY)};piece.onpointercancel=()=>{ghost?.remove();ghost=null}});
      plan.onclick=e=>selectedKind&&tryPlace(e.clientX,e.clientY);
      document.querySelector('#classReady').onclick=checkReady;
    };
    const checkReady=()=>{if(!remaining.length)return done();const missing=kinds.map(kind=>{const count=remaining.filter(p=>p.kind===kind).length;if(!count)return'';return `${count} ${names[kind][count===1?0:1]}`}).filter(Boolean);const text=`Nog niet klaar. Er ontbreken nog ${missing.slice(0,-1).join(', ')}${missing.length>1?' en ':''}${missing.at(-1)}.`;document.querySelector('.feedback').textContent=text;say(text)};
    const done=()=>{document.body.classList.remove('classroom-building');state.spoken='Knap gedaan. De hele klas is ingericht.';app.innerHTML=head('Richt onze klas in',2)+`<section class="result"><div class="trophy">🏆</div><h1>De hele klas is ingericht!</h1><p>Alle schoolbanken, kringbanken, borden, kasten, tafels en de wastafel staan terug.</p><button id="backGames">Kies een ander spel</button></section>`;document.querySelector('#backGames').onclick=menu;say(state.spoken)};
    render();
  }
  new MutationObserver(addMenuButton).observe(app,{childList:true,subtree:true}); addMenuButton();
})();
