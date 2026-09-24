(()=>{
const root=document.querySelector('#lesson,#app');if(!root)return;
function speak(text){if(!('speechSynthesis'in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='nl-BE';u.rate=.85;speechSynthesis.speak(u)}
function speaker(text){const b=document.createElement('button');b.type='button';b.className='inline-speaker';b.textContent='🔊';b.setAttribute('aria-label','Lees voor: '+text);b.onclick=e=>{e.stopPropagation();speak(text)};return b}
function update(){
root.querySelectorAll('.card,.egypt-tier,[data-use],[data-slot],[data-truth],[data-correct],[data-order],.sequence-choices>button').forEach(b=>{if(b.parentElement.classList.contains('spoken-choice'))return;const text=b.textContent.replace(/[?🔊]/g,'').trim()||b.querySelector('img')?.alt||b.getAttribute('aria-label');if(!text)return;const wrap=document.createElement('div');wrap.className='spoken-choice';if(b.classList.contains('egypt-tier')){wrap.classList.add('spoken-tier');wrap.style.cssText=b.style.cssText}b.before(wrap);wrap.append(b,speaker(text))});
root.querySelectorAll('#instruction,.top+p,.truth-statement,.welcome>p,.game>div>p:not(.feedback),.game>div>h2').forEach(p=>{if(p.dataset.spoken||p.closest('.question-row')||!p.textContent.trim())return;p.dataset.spoken='true';const text=p.textContent;p.append(speaker(text))});
}
new MutationObserver(update).observe(root,{childList:true,subtree:true});update();
})();
