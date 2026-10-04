/* Picture-led paper activities; each pupil sheet and key share their layout. */
window.timePictureHomework=function(id){
 const img=(name,alt='')=>`<img src="assets/eigen/${name}.png" alt="${alt}">`;
 const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};
 const mixed=a=>{for(let i=0;i<30;i++){const b=shuffle(a);if(b.every((x,j)=>x!==a[j]))return b}return [...a.slice(1),a[0]]};
 const task=(title,render)=>({title,normal:render(false),answer:render(true)});
 if(id==='life-lines'){
  const people=shuffle(['baby','schoolkind','volwassene','oudere']),lengths={baby:55,schoolkind:130,volwassene:260,oudere:410},rows=mixed(['baby','schoolkind','volwassene','oudere']);
  return [task('Van wie is de levenslijn? Schrijf 1, 2, 3 of 4.',sol=>`<div class="time-person-bank">${people.map((p,i)=>`<div><b>${i+1}</b>${img(p)}</div>`).join('')}</div><svg class="life-lines-svg" viewBox="0 0 720 388" xmlns="http://www.w3.org/2000/svg">${rows.map((p,i)=>{const y=i*96,x=545-lengths[p];return `<rect x="12" y="${y+32}" width="30" height="39" fill="white" stroke="#647582"/>${sol?`<text x="27" y="${y+59}" text-anchor="middle" fill="#1975ae" font-size="24">${people.indexOf(p)+1}</text>`:''}<text x="${(x+545)/2}" y="${y+20}" text-anchor="middle" font-size="14">vroeger</text><text x="560" y="${y+20}" text-anchor="middle">nu</text><text x="650" y="${y+20}" text-anchor="middle">later</text><rect x="${x}" y="${y+37}" width="${lengths[p]}" height="18" fill="#b4b4b4"/><rect x="545" y="${y+37}" width="30" height="18" fill="#4f86b9"/><path d="M575 ${y+37} H683 V${y+29} L709 ${y+46} L683 ${y+63} V${y+55} H575 Z" fill="#eef6fc" stroke="#445e6b"/><circle cx="${x}" cy="${y+46}" r="7" fill="white" stroke="#445e6b"/><text x="${x}" y="${y+78}" text-anchor="middle" font-size="13">geboorte</text>`}).join('')}</svg>`)]
 }
 if(id==='generation-line'){
  const people=shuffle(['schoolkind','oudere','volwassene']),dest={oudere:405,volwassene:477,schoolkind:550};
  return [task('Wanneer was ik klein? Verbind.',sol=>`<svg class="generation-svg" viewBox="0 0 720 330" xmlns="http://www.w3.org/2000/svg">${people.map((p,i)=>`<image href="assets/eigen/${p}.png" x="${100+i*230}" y="0" width="80" height="110"/><circle cx="${140+i*230}" cy="122" r="3"/>${sol?`<line x1="${140+i*230}" y1="122" x2="${dest[p]}" y2="220" stroke="#1975ae" stroke-width="2.5"/>`:''}`).join('')}<path d="M15 229 H580 V252 H15 Z" fill="#acbdcd"/><rect x="230" y="229" width="135" height="23" fill="#cdd0cd"/><rect x="365" y="229" width="215" height="23" fill="#edbba0"/><rect x="580" y="229" width="25" height="23" fill="#4f86b9"/><path d="M605 229 H680 V219 L707 240 L680 262 V252 H605 Z" fill="#f4dfba"/>${Object.values(dest).map(x=>`<circle cx="${x}" cy="220" r="3"/>`).join('')}<g text-anchor="middle" font-size="14"><text x="115" y="278">heel lang geleden</text><text x="300" y="278">lang geleden</text><text x="470" y="278">nog niet zo lang geleden</text><text x="590" y="302">nu</text><text x="660" y="278">later</text></g></svg>`)]
 }
 if(id==='object-history'){
  const groups=[['telefoon-vroeger','telefoon-dan','telefoon-nu'],['tv-vroeger','tv-dan','tv-nu'],['platenspeler','cd-speler','muziek-nu'],['camera-vroeger','camera-dan','camera-nu']],colours=['#e1b52c','#509b56','#399dca','#de6353'];const first=shuffle([0,1,2,3]),cols=[first,mixed(first),mixed(first)];
  return [task('Wat hoort samen? Geef dezelfde kleur.',sol=>`<p class="short-task-hint">Gebruik vier kleuren. Kleur de bolletjes.</p><div class="history-grid">${['eerst','dan','nu'].map(t=>`<b>${t}</b>`).join('')}${[0,1,2,3].map(row=>cols.map((col,c)=>{const g=col[row];return `<div><span class="colour-dot" style="background:${sol?colours[g]:'white'}"></span>${img(groups[g][c])}</div>`}).join('')).join('')}</div>`)]
 }
 if(id==='object-purpose'){
  const items=[['telefoon-vroeger','ik bel.'],['tv-vroeger','ik kijk.'],['platenspeler','ik luister.'],['camera-vroeger','ik maak een foto.']],right=mixed(items);
  return [task('Waar dient het voor? Verbind.',sol=>`<svg class="purpose-svg" viewBox="0 0 700 430" xmlns="http://www.w3.org/2000/svg">${items.map((a,i)=>`<image href="assets/eigen/${a[0]}.png" x="65" y="${i*105}" width="155" height="90"/><circle cx="240" cy="${i*105+45}" r="3"/>`).join('')}${right.map((a,i)=>`<circle cx="440" cy="${i*105+45}" r="3"/><text x="455" y="${i*105+51}" font-size="19">${a[1]}</text>`).join('')}${sol?items.map((a,i)=>`<line x1="240" y1="${i*105+45}" x2="440" y2="${right.indexOf(a)*105+45}" stroke="#1975ae" stroke-width="2.5"/>`).join(''):''}</svg>`)]
 }
 if(id==='bronnen'){
  const choices=shuffle([{p:'oude-brief',good:true},{p:'oude-foto',good:true},{p:'oude-pot',good:true},{p:'telefoon-nu',good:false},{p:'tv-nu',good:false},{p:'muziek-nu',good:false}]);
  return [task('Omcirkel de oude voorwerpen.',sol=>`<div class="heritage-pictures">${choices.map(o=>`<div class="${sol&&o.good?'circled':''}">${img(o.p)}</div>`).join('')}</div>`)]
 }
 if(id==='respect'){
  const pairs=[['erfgoed-kijken','erfgoed-klimmen'],['foto-voorzichtig','foto-scheuren'],['gids-luisteren','gids-roepen']].map(a=>({good:a[0],items:shuffle(a)}));
  return [task('Zorg voor erfgoed. Kruis de goede prent aan.',sol=>`<div class="heritage-pairs">${pairs.map(pair=>`<div>${pair.items.map(p=>`<div>${img(p)}<span class="check-box">${sol&&p===pair.good?'×':''}</span></div>`).join('')}</div>`).join('')}</div>`)]
 }
 return null;
};
