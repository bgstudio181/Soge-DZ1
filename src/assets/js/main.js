let truck=document.querySelector("#truck")
let car=document.querySelector("#car")
let bicycle=document.querySelector("#bicycle")
car.style.background="rgba(255,204,0,0.5)"
truck.addEventListener("click",()=>{
  truck.style.background="rgba(255,204,0,0.5)"
  car.style.background="none"
  bicycle.style.background="none" 
})
car.addEventListener("click",()=>{
  car.style.background="rgba(255,204,0,0.5)"
  truck.style.background="none"
  bicycle.style.background="none" 
})
bicycle.addEventListener("click",()=>{
  bicycle.style.background="rgba(255,204,0,0.5)" 
  truck.style.background="none"
  car.style.background="none"
})


let left1=document.querySelector("#left1")
let right1=document.querySelector("#right1")
let scrol=document.querySelector(".scrol")
let position1=0

left1.addEventListener("click", () => {
  if (position1!=0){
    position1-=100
    scrol.style.transform +="translateX(100px)"
  }
})
right1.addEventListener("click", ()=>{
  if (position1!=1000){
    position1+=100
    scrol.style.transform +=" translateX(-100px)"
    }
})
let left2=document.querySelector("#left2")
let right2=document.querySelector("#right2")
let scrol1=document.querySelector(".scrol1")
let position2=0
left2.addEventListener("click", () => {
  if (position2!=0){
    position2-=100
    scrol1.style.transform +="translateX(100px)"
  }
})
right2.addEventListener("click", ()=>{
  if (position2!=2000){
    position2+=100
    scrol1.style.transform +=" translateX(-100px)"
    }
})
let left3=document.querySelector("#left3")
let right3=document.querySelector("#right3")
let scrol2=document.querySelector(".scrol2")
let position3=0
left3.addEventListener("click", () => {
  if (position3!=0){
    position3-=100
    scrol2.style.transform +="translateX(100px)"
  }
})
right3.addEventListener("click", ()=>{
  if (position3!=1000){
    position3+=100
    scrol2.style.transform +=" translateX(-100px)"
    }
})
//*________________________________________

let marks=document.querySelectorAll(".mark")
marks.forEach((mark) => {
  mark.addEventListener("click",()=>{
    mark.style.border="rgba(255,204,0,0.5),solid,2px"
    mark.style.background="rgba(255,204,0,0.5)"
})
})






