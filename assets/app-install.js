(()=>{
  if(!('serviceWorker' in navigator))return;
  const manifest=document.querySelector('link[rel="manifest"]');
  if(!manifest)return;
  const serviceWorkerUrl=new URL('sw.js',manifest.href);
  window.addEventListener('load',()=>navigator.serviceWorker.register(serviceWorkerUrl,{scope:new URL('./',serviceWorkerUrl)}).catch(()=>{}));
})();
