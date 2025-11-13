document.addEventListener('DOMContentLoaded',()=>{
 const app=document.getElementById('app');
 const grid=document.createElement('div');
 grid.className='grid';
 for(let i=1;i<=120;i++){
   const t=document.createElement('div');
   t.className='ticket';t.textContent=i;
   grid.appendChild(t);
 }
 app.appendChild(grid);
});