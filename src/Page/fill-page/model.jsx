import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Left from '../../add/left'
import '../../assets/css/model.css' 
export default
function Main() {
  let models=[
    {name:"صغيرة",num:200,img:"src/assets/img/car/0.png"},
    {name:"سيدان",num:200,img:"src/assets/img/car/1.png"},
    {name:"فاخرة",num:200,img:"src/assets/img/car/2.png"},
    {name:"جيب",num:200,img:"src/assets/img/car/3.png"},
    {name:"شاحنة",num:200,img:"src/assets/img/car/4.png"},
    {name:"كلاسيكية",num:200,img:"src/assets/img/car/5.png"},
    {name:"شاحنة",num:200,img:"src/assets/img/car/6.png"},
    {name:"كهربائية",num:200,img:"src/assets/img/car/7.png"},
    {name:"هجينة",num:200,img:"src/assets/img/car/8.png"},
    {name:"4×4",num:200,img:"src/assets/img/car/9.png"},
    {name:"رياضية",num:200,img:"src/assets/img/car/10.png"},
    {name:"بيك آب",num:200,img:"src/assets/img/car/12.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/11.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/13.png"},
    
    ]
  let model=models.map((item)=>{
    return (<div class="car2"><p className="namemodel">{item.name}</p><p className="num" >حوالي {item.num} اعلان</p><img src={item.img} alt="car" /></div>)
  })
  return (
    <>
        <main>
          <Left/>
          <div class="view">
            <div class="pub"><img src="src/assets/pub/pub.png"/></div>
            <div class="shop">
              <div class="exit"><NavLink to="/" className="oth"><p>عودة</p></NavLink><input></input></div>
        <div class="pope2">
          <div class="scrol1-2" >
            {model}
            

            
          </div>
        </div>
        
        
      </div>      
          </div>
        </main>

    </>
  )
}