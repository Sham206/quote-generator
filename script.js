const quotes = [
  "Discipline beats motivation.",
  "Small steps every day.",
  "Stop planning, start building.",
  "Pain today, pride tomorrow.",
  "Consistency wins."
];

const res = document.getElementById('res');
document.getElementById('btn').onclick=quotegenerator;
function quotegenerator(){
    const random_num=(Math.floor(Math.random()*quotes.length));
    res.textContent=quotes[random_num];
}