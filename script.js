async function getdata() {
  btn.disabled=true;
  res.textContent="fatching...";
  await new Promise(resolve=>setTimeout(resolve,1000));
  try{
    const response =await fetch("https://dummyjson.com/quotes/random");
    if(!response.ok){
      throw new Error(res.textContent="api error");
    }
    const data = await response.json();
    res.textContent=`${data.quote}-${data.author}`;
  }catch(error){
    res.textContent=("Error in finding quote");
  }
  btn.disabled=false;
}
const btn = document.getElementById('btn');
const res =document.getElementById('res');
btn.addEventListener('click',getdata);