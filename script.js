function ShowLoading(){
  res.textContent="loading...";
  btn.disabled=true;
}
function HideLoading(){
  btn.disabled=false;
}
function wait(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
function showError(msg){
  res.innerHTML = msg;
}
function CheckInternet(){
  if(!navigator.onLine){
    showToast("no internet connection:try again");
    return false;
  }
  return true;
}
async function getdata() {
  if (!CheckInternet()) {
    return;
  }
  ShowLoading();
  await wait(1000);
  try{
    const response =await fetch("https://dummyjson.com/quotes/random");
    if(!response.ok){
      throw new Error("api error");
    }
    const data = await response.json();
    res.innerHTML=`${data.quote}<br>-${data.author}`;
  }catch(error){
    showError("Error to find the quote");
  }
  HideLoading();
}

async function copyText() {
  const text = res.innerText.trim();
  if (!text){
    return;
  }
  try{
    cpy_btn.disabled = true;
    await navigator.clipboard.writeText(text);
    showToast("copied");
    cpy_btn.disabled=false;
    await wait(1000);
    cpy_btn.textContent = "copy";
  }catch(error){
    showToast("Error to copy");
  }
}
async function showToast(message){
  toast.textContent=message;
  toast.classList.add("show");
  await wait(1500);
  toast.classList.remove("show");
}
const btn = document.getElementById('btn');
const res =document.getElementById('res');
const cpy_btn=document.getElementById('cpy-btn');
const toast=document.getElementById('toast');
btn.addEventListener('click',getdata);
cpy_btn.addEventListener('click',copyText);