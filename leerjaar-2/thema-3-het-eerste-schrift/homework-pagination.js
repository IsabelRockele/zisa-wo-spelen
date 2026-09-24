/* Measure the same A4 sheets shown in the preview and sent to the printer. */
window.layoutTheme3Homework=async function(paper){
 const token=paper.dataset.layoutToken=String((+paper.dataset.layoutToken||0)+1);
 paper.dataset.ready='false';
 const host=document.createElement('div');host.className='t3-measure';
 host.innerHTML=paper.innerHTML;document.body.append(host);
 try{
  await document.fonts.ready;
  await Promise.all([...host.querySelectorAll('img')].map(i=>i.decode().catch(()=>{})));
  const output=[];
  for(const bundle of [...host.children]){
   const nodes=[...bundle.children].filter(n=>n.tagName!=='FOOTER');let sheet,lesson='2';
   const fresh=()=>{sheet=document.createElement('article');sheet.className=bundle.className+' t3-sheet';host.append(sheet);output.push(sheet)};
   fresh();
   const end=()=>sheet.getBoundingClientRect().bottom-35;
   const bottom=()=>{const last=sheet.lastElementChild;return last?last.getBoundingClientRect().bottom+parseFloat(getComputedStyle(last).marginBottom):sheet.getBoundingClientRect().top+27};
   const fill=()=>{const space=end()-bottom();if(bundle.classList.contains('t3-solutions')||space<220||!sheet.querySelector('.t3-exercise'))return;
    const subject=lesson==='2'?'boeren':lesson==='3'||lesson==='9'?'egypte':['4','5','6'].includes(lesson)?'stadstaat':'schrift';
    const box=document.createElement('aside');box.className='t3-coloring';box.style.height=Math.min(space-12,370)+'px';box.innerHTML=`<p>Klaar? Kleur de prent.</p><img src="assets/context/kleurplaat-${subject}.png" alt="Kleurplaat bij deze les">`;sheet.append(box);
   };
   for(let i=0;i<nodes.length;i++){
    const node=nodes[i];const group=[node];if(node.classList.contains('t3-lesson-heading')&&nodes[i+1])group.push(nodes[++i]);
    const hadTasks=!!sheet.querySelector('.t3-exercise');group.forEach(n=>sheet.append(n));
    if(bottom()>end()&&hadTasks){group.forEach(n=>n.remove());fill();fresh();group.forEach(n=>sheet.append(n))}
    const match=(group.find(n=>n.dataset.lesson)?.dataset.lesson||node.textContent).match(/^Les (\d+)/);if(match)lesson=match[1];
   }
   fill();bundle.remove();
  }
  await Promise.all([...host.querySelectorAll('img')].map(i=>i.decode().catch(()=>{})));
  if(paper.dataset.layoutToken===token){paper.replaceChildren(...output);paper.dataset.ready='true'}
 }finally{host.remove()}
};
