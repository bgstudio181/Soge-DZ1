import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Left from '../add/left'
import Hero from '../add/hero'
import Model from '../add/model'
export default
function Main() {
  let popes=[
    {id:1,img:"src/assets/img/Logo1/RENAULT.png"},
    {id:2,img:"src/assets/img/Logo1/PEUGEOT.png"},
    {id:11,img:"src/assets/img/Logo1/GEELY.png"},
    {id:3,img:"src/assets/img/Logo1/HYUNDAI.png"},
    {id:12,img:"src/assets/img/Logo1/FIAT.png"},
    {id:9,img:"src/assets/img/Logo1/MARCEDES-BENZ.png"},
    {id:16,img:"src/assets/img/Logo1/BMW.png"},
  ]
  let pope=popes.map((item)=>{
    return(<button key={item.id} class="mark"><img src={item.img}/></button>)
  })
  let models=[
    {name:"MINI",num:200,img:"src/assets/img/car/1.png"},
    {name:"VAN",num:200,img:"src/assets/img/car/2.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/3.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/4.png"},
    ]
  let model=models.map((item)=>{
    return (<div class="car"><p className="namemodel">{item.name}</p><p className="num" >حوالي {item.num} اعلان</p><img src={item.img} alt="car" /></div>)
  })
  let Goods=[
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
  ]
  let Good=Goods.map((item)=>{
    return(<div class="offer">
      <img src={item.img}/> 
      <i class="bi bi-heart" id="heart"></i>
      <i class="bi bi-phone" id="phone"></i>
      <h3 class="name">{item.name}</h3>
      <h3 class="price">{item.price}</h3>
      <h3 class="dat">2018📅.disle⛽️.1200km👣.⚙️auto</h3>
    </div>
           )
  })
  let [modelscrol,setmodelscrol]=useState(0)
  let [popescrol,setpopescrol]=useState(0)
  let [goodscrol,setgoodscrol]=useState(0)
  return (
    <>
        <main>
          <Left/>
          <div class="view">
            <div class="pub"><img src="src/assets/pub/pub.png"/></div>
            <Hero/>
            <div class="shop">
              <div class="titre">
              <div class="t"><div></div>انواع السيارات</div>
              <NavLink className="oth"><p>رؤية المزيد</p></NavLink>
              
          
        </div>
        <div class="model">
          <div class="scrol" style={{marginLeft: modelscrol+"px"}}>
            {model}
          </div>
        </div>
        <div class="titre">
          <div class="t"><div></div> الشعارات الرائدة</div>
          <NavLink className="oth"><p>رؤية المزيد</p></NavLink>
        </div>
        <div class="pope">
          <div class="scrol1" style={{marginLeft: popescrol+"px"}}>
            {pope}
            

            
          </div>
        </div>
        <div class="titre">
          <div class="t"><div></div> العروض المميزة</div>
          <NavLink className="oth"><p>رؤية المزيد</p></NavLink>
        </div>
        <div class="good">
          <div class="scrol2" style={{marginLeft: goodscrol+"px"}}>
              {Good}



            
          </div>
        </div>
      </div>      
          </div>
        </main>

    </>
  )
}
