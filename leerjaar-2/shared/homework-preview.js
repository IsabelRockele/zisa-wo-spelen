// Afdrukvoorbeeld in een apart document: dezelfde afdrukstijlen, zonder invloed op de keuzes.
(()=>{
const paper=document.querySelector('#t3Paper,.homework-paper'),tool=document.querySelector('#tool');
if(!paper||!tool)return;
const workspace=document.createElement('div');workspace.className='homework-workspace';tool.before(workspace);workspace.append(tool);
const panel=document.createElement('aside');panel.className='homework-live-preview';panel.innerHTML='<h2>Afdrukvoorbeeld</h2><p class="preview-empty">Vink een oefening aan om je huistaak te bekijken.</p><div class="preview-scroll"><div class="preview-stage"><iframe title="Afdrukvoorbeeld van de gekozen huistaak" sandbox="allow-same-origin"></iframe></div></div>';workspace.append(panel);
const frame=panel.querySelector('iframe'),stage=panel.querySelector('.preview-stage'),scroller=panel.querySelector('.preview-scroll');let queued=false,height=1123;
tool.addEventListener('change',event=>{if(event.target.id==='hwSolutions'&&paper.id!=='t3Paper')document.querySelector('#hwPreview')?.click()});
function fit(){const width=scroller.clientWidth-4;if(width<=0)return;const scale=Math.min(1,width/794);frame.style.transform=`scale(${scale})`;frame.style.height=height+'px';stage.style.height=Math.ceil(height*scale)+'px';stage.style.width=Math.ceil(794*scale)+'px'}
function measure(){const doc=frame.contentDocument;if(!doc)return;frame.style.height='1px';height=Math.max(1123,doc.documentElement.scrollHeight,doc.body.scrollHeight);fit()}
frame.onload=async()=>{const doc=frame.contentDocument;if(!doc)return;await Promise.all([...doc.images].map(img=>img.decode().catch(()=>{})));measure()};
function update(){queued=false;const ready=!!paper.children.length;panel.querySelector('.preview-empty').hidden=ready;scroller.hidden=!ready;if(!ready)return;let styles='';for(const sheet of document.styleSheets){if(sheet.href?.includes('homework-preview.css'))continue;try{styles+=[...sheet.cssRules].map(r=>r.cssText).join('\n')}catch{}}
styles=styles.replace(/@media\s+print\b/g,'@media all');
const copy=paper.cloneNode(true);const printKind=paper.id==='t3Paper'?'t3-homework':'homework';
frame.srcdoc=`<!doctype html><html lang="nl"><head><meta charset="utf-8"><base href="${new URL('./',location.href).href}"><style>${styles}\nhtml,body{width:794px!important;max-width:794px!important;overflow-x:hidden!important}body{margin:0!important} .homework-paper{display:block!important} .t3-page{margin:0!important;box-shadow:none!important} .homework-page{min-height:297mm} .t3-page+.t3-page,.solutions-page{border-top:8px solid #e7e5ec!important} header{position:static!important}</style></head><body data-print="${printKind}" data-view="homework">${copy.outerHTML}</body></html>`;
}
new MutationObserver(()=>{if(!queued){queued=true;requestAnimationFrame(update)}}).observe(paper,{childList:true,subtree:true,characterData:true});new ResizeObserver(fit).observe(scroller);new MutationObserver(()=>{if(document.body.dataset.view==='homework')requestAnimationFrame(fit)}).observe(document.body,{attributes:true,attributeFilter:['data-view']});update();
})();
