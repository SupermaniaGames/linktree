const list=document.getElementById('list');

fetch('games.json',{cache:'no-store'})
  .then(r=>r.json())
  .then(d=>d.games.forEach(g=>list.append(card(g))))
  .catch(()=>{list.innerHTML='<li class="err">Could not load the games list. Check games.json.</li>'});

function card(g){
  const li=document.createElement('li');
  const link=g.url&&!g.soon;
  const a=document.createElement(link?'a':'div');
  a.className='card'+(link?'':' soon');
  if(link)a.href=g.url;

  const lg=document.createElement('span');lg.className='lg';
  const img=document.createElement('img');img.alt='';img.src=g.logo||'';
  img.onerror=()=>{lg.textContent=(g.name||'?').trim()[0]||'?';lg.classList.add('ph')};
  if(g.logo)lg.append(img);else{lg.textContent=(g.name||'?')[0];lg.classList.add('ph')}

  const tx=document.createElement('span');tx.className='tx';
  const nm=document.createElement('b');nm.textContent=g.name||'Game';
  const ds=document.createElement('small');ds.textContent=g.desc||'';
  tx.append(nm,ds);

  const go=document.createElement('span');go.className='go';
  go.textContent=link?'Play ▶':'Coming soon';

  a.append(lg,tx,go);li.append(a);return li;
}

document.getElementById('share').onclick=async()=>{
  const url=location.origin+location.pathname.replace(/index\.html$/,'');
  const text='Play games by Supermania Games:';
  if(navigator.share){try{await navigator.share({title:'Supermania Games',text,url});return}catch(e){if(e.name==='AbortError')return}}
  window.open('https://wa.me/?text='+encodeURIComponent(text+'\n'+url),'_blank');
};

if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js',{updateViaCache:'none'});
