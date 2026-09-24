const CITY_QUESTIONS=[
['Waarvoor diende de stadsmuur?','Om de stad tegen vijanden te beschermen.','Om water naar de akkers te brengen.','Om graan te laten groeien.'],
['Wat kan er met de planten gebeuren zonder kanalen?','Ze krijgen soms te veel of te weinig water. De oogst kan mislukken.','Ze krijgen vanzelf altijd genoeg water.','Ze hebben dan geen water meer nodig.']
];
const CITY_PATHS=[
['wall','M20 187 L148 216 L279 224 L372 244 L437 234 L580 264 L638 264 L776 290 L816 281 L825 363 L630 327 L433 303 L368 297 L280 287 L153 254 L22 244 Z'],
['wall','M809 285 L832 207 L864 136 L882 139 L871 208 L826 354 Z'],
['wall','M45 185 L294 93 L307 91 L239 124 L90 193 Z'],
['wall','M300 88 L317 99 L395 104 L401 97 L423 99 L424 111 L495 114 L498 103 L516 104 L518 118 L615 126 L619 113 L638 114 L641 131 L722 139 L726 120 L744 123 L748 143 L854 151 L858 134 L879 136 L882 171 L746 161 L639 147 L519 135 L423 125 L318 113 Z'],
['canal','M0 367 L61 358 L146 356 L233 361 L327 361 L426 373 L554 383 L658 390 L772 390 L858 390 L913 396 L1000 406'],
['canal','M916 177 L953 174 L993 169 L977 160 M914 178 L908 222 L906 259 L891 308 L879 357'],
['canal','M912 238 L950 244 L1000 246'],
['canal','M431 374 L400 389 L379 412 L349 425 L311 426 L271 419'],
['canal','M797 393 L774 421 L754 449 L732 460 L716 485 L710 508 L750 519 L815 525 L873 535 L932 539 L1000 542'],
['canal','M713 508 L687 534 L663 553 L649 573 L664 612 L685 667'],
['canal','M153 502 L219 514 L291 524 L352 535 L421 544 L508 557 L575 565 L649 576']
];
function cityPicture(interactive=false,solution=false){return `<svg class="city-picture${interactive?'':' city-paper'}" viewBox="0 0 1000 667" xmlns="http://www.w3.org/2000/svg" aria-label="Een oude stad met een rivier en akkers"><image href="assets/context/stadstaat-zoekplaat.png" width="1000" height="667"/>${(interactive||solution)?CITY_PATHS.map(([part,d],i)=>`<path d="${d}" class="city-target${solution?' found':''}" style="--mark:${part==='wall'?'#d52f36':'#882ea5'};${part==='canal'?'fill:none;stroke-width:14':''}" ${interactive?`data-part="${part}" tabindex="0" role="button" aria-label="Onderdeel ${i+1} van de prent"`:''}/>`).join(''):''}</svg>`}
function cityHomework(type,sol){const picture=cityPicture(false,sol&&type==='cityFind');const choices=(q,short=false)=>`<div class="t3-task city-paper-choices"><b>${q[0]}</b>${q.slice(1).map((a,i)=>`<p>${sol&&i===0?'☑':'☐'} ${a}</p>`).join('')}</div>`;
if(type==='cityFind')return '<h3>Zoek en kleur op de prent.</h3><p>Kleur de stadsmuur rood. Volg de kanalen naar de akkers met paars.</p>'+picture+'<h3>Kruis het juiste antwoord aan.</h3>'+CITY_QUESTIONS.map(q=>choices(q)).join('');
return '<h3>Kijk goed naar de stad en de akkers.</h3>'+picture+'<h3>Wat hoort bij elkaar? Kruis aan.</h3><div class="t3-task"><b>De kanalen brengen water naar …</b><p>'+(sol?'☑':'☐')+' de akkers. &nbsp;&nbsp; ☐ de top van de stadsmuur.</p><b>De stadsmuur zorgt voor …</b><p>☐ meer regen. &nbsp;&nbsp; '+(sol?'☑':'☐')+' bescherming.</p></div><div class="t3-task city-short"><b>Waarom zijn kanalen belangrijk voor de planten? Schrijf één korte zin.</b><div class="t3-writing-lines">'+(sol?'<p>Ze brengen water naar de planten, zodat die kunnen groeien.</p>':'<span></span><span></span>')+'</div></div>';
}
