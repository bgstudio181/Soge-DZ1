let chek=document.querySelector(".chek")
chek.addEventListener("click", ()=>{
  let name=document.querySelector(".name").value
  let text=document.querySelector(".text")
  text.textContent=name
})