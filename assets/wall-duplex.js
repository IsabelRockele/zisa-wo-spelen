// Shared by every theme: nine fronts followed by their matching backs.
(() => {
  const host = document.querySelector('#tool');
  if (!host || typeof data === 'undefined') return;
  function prepareWall() {
    const grid = host.querySelector('.wall-grid');
    if (!grid) return;
    const cards = [...grid.querySelectorAll('.wall-card')];
    const note = host.querySelector('.wall-note');
    if (note) note.remove();
    document.querySelector('#intro').textContent = 'Sprekende muur · 6,2 × 7,8 cm · afbeelding en uitleg vooraan, het woord in lichtgrijs achteraan.';
    const controls = document.createElement('div');
    controls.className = 'wall-print-settings';
    controls.innerHTML = '<label><input type="checkbox" checked> Achterzijden met lichtgrijze woorden afdrukken</label><p><strong>Recto verso:</strong> kies A4 staand, dubbelzijdig, omslaan langs de <strong>lange zijde</strong> en schaal <strong>100% (ware grootte)</strong>. Zet kop- en voetteksten uit. Druk eerst één voor- en achterblad af als proef.</p><p>De achterzijden staan al in de juiste volgorde. Knip pas na het afdrukken. Rood = werkwoord · geel = persoon · groen = hoe · paars = waar · oranje = wanneer · bruin = wat.</p>';
    const pages = document.createElement('div');
    pages.className = 'wall-pages';
    for (let start = 0; start < cards.length; start += 9) {
      const front = document.createElement('section');
      front.className = 'wall-sheet wall-front-sheet';
      front.setAttribute('aria-label', `Voorzijde ${start / 9 + 1}`);
      const back = document.createElement('section');
      back.className = 'wall-sheet wall-back-sheet';
      back.setAttribute('aria-label', `Achterzijde ${start / 9 + 1}`);
      for (let slot = 0; slot < 9; slot++) {
        const card = cards[start + slot];
        const placeholder = document.createElement('div');
        placeholder.className = 'wall-empty';
        front.append(card || placeholder);
        // Mirror columns only: the printer flips the A4 sheet on its long edge.
        const source = start + Math.floor(slot / 3) * 3 + (2 - slot % 3);
        const reverse = document.createElement('article');
        reverse.className = source < cards.length ? 'wall-back-card' : 'wall-empty';
        if (source < cards.length) reverse.textContent = data[source][0];
        back.append(reverse);
      }
      pages.append(front, back);
    }
    controls.querySelector('input').addEventListener('change', event => {
      pages.classList.toggle('wall-fronts-only', !event.target.checked);
    });
    grid.replaceWith(controls, pages);
  }
  new MutationObserver(prepareWall).observe(host, {childList: true});
  prepareWall();
})();
