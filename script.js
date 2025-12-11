const quotes = [
  "Discipline beats motivation.",
  "Small steps every day.",
  "Stop planning, start building.",
  "Pain today, pride tomorrow.",
  "Consistency wins."
];
const btn=document.getElementById('btn');
const res=document.getElementById('res');
btn.addEventListener('click',() =>{
  res.textContent='Loading....';
  btn.disabled=true;
  setTimeout(() => {
    if (quotes.length===0){
      res.textContent="quotes are not available";
    }
    else{
      const random_num=Math.floor((Math.random()*quotes.length));
      res.textContent=quotes[random_num];
    }
    btn.disabled=false;
  },1000);
})