(() => {
  const findTasks = [
    { text: 'Klik op het schoolbord waarnaar de kinderen kijken.', x: 20, y: 46, rx: 7, ry: 25 },
    { text: 'Klik op de kast naast het andere bord.', x: 47, y: 9, rx: 6, ry: 10 },
    { text: 'Klik op een schoolbank in de eerste rij. Kijk naar de stoelen: de kinderen kijken naar het schoolbord voor hen.', x: 34, y: 45, rx: 7, ry: 29 },
    { text: 'Klik op de wastafel.', x: 94, y: 82, rx: 7, ry: 10 },
    { text: 'Klik op de kring.', x: 68, y: 14, rx: 23, ry: 14 }
  ];

  const furniture = [];
  const add = (kind, label, points) => points.forEach((p, i) => furniture.push({
    id: `${kind}-${i}`, kind, label, x: p[0] / 8.42, y: p[1] / 5.95, angle: p[2] || 0
  }));
  add('bank', 'schoolbank', [[289,362],[289,306],[290,201],[289,142],[375,198],[374,140],[453,199],[453,142],[371,360],[372,303],[455,360],[455,303],[533,304],[533,363]]);
  add('kring', 'deel van de kring', [[456,20,0],[564,21,0],[431,71,20],[531,107,0],[636,93,-49]]);
  add('bord', 'schoolbord', [[184,22,0],[162,346,90]]);
  add('juf', 'bureau van de juf', [[134,83,59]]);
  add('kast', 'kast', [[397,18,90],[162,157,90],[162,321,90],[648,263,90],[646,186,90],[726,554,0],[4,561,0],[54,561,0],[103,561,0],[154,436,124]]);
  add('tafel', 'tafel', [[229,541,90],[50,468,0],[353,541,90],[494,541,90],[644,538,90]]);
  add('wastafel', 'wastafel', [[790,463,0]]);

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
    return items.map(p => `<span class="classroom-placed" style="--x:${p.x}%;--y:${p.y}%">${shape(p.kind,p.angle)}</span>`).join('');
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
    allThemes.hidden = true; gameMenu.hidden = false; let index = 0;
    const draw = () => {
      const task = findTasks[index]; state.spoken = task.text;
      app.innerHTML = head('Onze klas op de plattegrond',1) + `<section class="question classroom-find-game">
        <div class="listenline"><button class="listen" aria-label="Lees de opdracht voor">🔊</button><p class="prompt">${task.text}</p></div>
        <p class="classroom-find-progress">Vraag ${index+1} van ${findTasks.length}</p>
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
        setTimeout(() => { index++; index < findTasks.length ? draw() : finish(); }, 650);
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
    let selectedKind=null, ghost=null; const placed=[], remaining=[...furniture];
    const instruction='Bouw de klas. Kies een meubel en plaats het op ongeveer de juiste plek.';
    const names={bank:['schoolbank','schoolbanken'],kring:['kringbank','kringbanken'],bord:['schoolbord','schoolborden'],juf:['bureau van de juf','bureaus van de juf'],kast:['kast','kasten'],tafel:['tafel','tafels'],wastafel:['wastafel','wastafels']};
    const kinds=['bank','kring','bord','juf','kast','tafel','wastafel'];
    const render = () => {
      state.spoken=instruction;
      const tray=kinds.map(kind=>{const count=remaining.filter(p=>p.kind===kind).length;if(!count)return'';const sample=remaining.find(p=>p.kind===kind);return `<button class="classroom-piece${selectedKind===kind?' selected':''}" data-kind="${kind}" aria-label="Kies ${names[kind][count===1?0:1]}">${shape(kind,sample.angle)}<b>${names[kind][count===1?0:1]} <span>${count}</span></b></button>`}).join('');
      app.innerHTML=head('Richt onze klas in',2)+`<section class="question classroom-layout-game">
        <div class="listenline"><button class="listen" aria-label="Lees de opdracht voor">🔊</button><p class="prompt">${instruction}</p></div>
        <div class="classroom-piece-tray">${tray}</div>
        <div class="real-classroom-plan layout-plan"><img src="assets/klasplattegrond-echt-leeg.png?v=3" alt="Lege klasplattegrond"><span class="placed-furniture">${placedHtml(placed)}</span></div>
        <div class="classroom-build-actions"><button class="primary" id="classReady">Klaar ✓</button><p class="feedback">Nog ${remaining.length} meubelstukken.</p></div></section>`;
      document.querySelector('.listen').onclick=()=>say(instruction);
      const pieces=[...document.querySelectorAll('.classroom-piece')], plan=document.querySelector('.layout-plan');
      const choose=kind=>{selectedKind=kind;pieces.forEach(p=>p.classList.toggle('selected',p.dataset.kind===kind))};
      const tryPlace=(clientX,clientY)=>{
        if(!selectedKind)return;
        const item=remaining.find(p=>p.kind===selectedKind);if(!item)return;
        const r=plan.getBoundingClientRect(),x=(clientX-r.left)/r.width*100,y=(clientY-r.top)/r.height*100;
        if (!validZone[item.kind](x,y)) {
          plan.classList.remove('wrong');void plan.offsetWidth;plan.classList.add('wrong');
          document.querySelector('.feedback').textContent='Bijna. Probeer in de juiste zone.';return;
        }
        placed.push(item);remaining.splice(remaining.indexOf(item),1);selectedKind=remaining.some(p=>p.kind===item.kind)?item.kind:null;render();
      };
      pieces.forEach(piece=>{piece.onclick=()=>choose(piece.dataset.kind);piece.onpointerdown=e=>{e.preventDefault();choose(piece.dataset.kind);piece.setPointerCapture(e.pointerId);ghost=piece.cloneNode(true);ghost.className='classroom-drag-ghost';document.body.append(ghost);ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px'};piece.onpointermove=e=>{if(ghost){ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px'}};piece.onpointerup=e=>{if(!ghost)return;ghost.remove();ghost=null;const el=document.elementFromPoint(e.clientX,e.clientY);if(el?.closest('.layout-plan'))tryPlace(e.clientX,e.clientY)};piece.onpointercancel=()=>{ghost?.remove();ghost=null}});
      plan.onclick=e=>selectedKind&&tryPlace(e.clientX,e.clientY);
      document.querySelector('#classReady').onclick=checkReady;
    };
    const checkReady=()=>{if(!remaining.length)return done();const missing=kinds.map(kind=>{const count=remaining.filter(p=>p.kind===kind).length;if(!count)return'';return `${count} ${names[kind][count===1?0:1]}`}).filter(Boolean);const text=`Nog niet klaar. Er ontbreken nog ${missing.slice(0,-1).join(', ')}${missing.length>1?' en ':''}${missing.at(-1)}.`;document.querySelector('.feedback').textContent=text;say(text)};
    const done=()=>{state.spoken='Knap gedaan. De hele klas is ingericht.';app.innerHTML=head('Richt onze klas in',2)+`<section class="result"><div class="trophy">🏆</div><h1>De hele klas is ingericht!</h1><p>Alle schoolbanken, kringbanken, borden, kasten, tafels en de wastafel staan terug.</p><button id="backGames">Kies een ander spel</button></section>`;document.querySelector('#backGames').onclick=menu;say(state.spoken)};
    render();
  }
  new MutationObserver(addMenuButton).observe(app,{childList:true,subtree:true}); addMenuButton();
})();
