import { useState } from 'react'
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
    {id:10,img:"src/assets/img/Logo1/KIA.png"},
    {id:16,img:"src/assets/img/Logo1/BMW.png"},
    {id:4,img:"src/assets/img/Logo1/TOYOTA.png"},
    {id:5,img:"src/assets/img/Logo1/VOLKSWAGEN.png"},

    {id:6,img:"src/assets/img/Logo1/SEAT.png"},
    {id:7,img:"src/assets/img/Logo1/OPEL.png"},
    {id:8,img:"src/assets/img/Logo1/NISSAN.png"},
    {id:13,img:"src/assets/img/Logo1/DACIA.png"},
    {id:14,img:"src/assets/img/Logo1/CHEVROLET.png"},
    {id:15,img:"src/assets/img/Logo1/CITROËN.png"},
    {id:17,img:"src/assets/img/Logo1/RENAULT.png"},
    {id:18,img:"src/assets/img/Logo1/RENAULT.png"},
  ]
  let pope=popes.map((item)=>{
    return(<button key={item.id} class="mark"><img src={item.img}/></button>)
  })
  let models=[
    {name:"MINI",num:200,img:"src/assets/img/car/MINI.png"},
    {name:"VAN",num:200,img:"src/assets/img/car/VAN.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    ]
  let model=models.map((item)=>{
    return (<div class="car"><img src={item.img} alt="car" /><p>حوالي {item.num} اعلان</p></div>)
  })
  let Goods=[
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
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

  let [popescrol,setpopescrol]=useState("100")
  return (
    <>
        <main>
          <Left/>
          <div class="view">
            <div class="pub"><img src="src/assets/pub/pub.png"/></div>
            <Hero/>
            <div class="shop">
              <div class="titre">
              <button class="chang" id="left1">&lt;
</button>
          <button class="chang" id="right1">&gt;
</button>
          <span class="t">انواع السيارات<div></div></span>
        </div>
        <div class="model">
          <div class="scrol" style={{marginLeft:{popescrol}+"px"}}>
            {model}
          </div>
        </div>
        <div class="titre">
          <button class="chang" id="left2">&lt;
</button>
          <button class="chang" id="right2">&gt;
</button>
          <span class="t">الشعارات الرائدة<div></div></span>
        </div>
        <div class="pope">
          <div class="scrol1">
            {pope}
            

            
          </div>
        </div>
        <div class="titre">
          <button class="chang" id="left3"> &lt;
 </button>
          <button class="chang" id="right3">&gt;
</button>
          <span class="t">انواع السيارات<div></div></span>
        </div>
        <div class="good">
          <div class="scrol2">
              {Good}



            
          </div>
        </div>
      </div>      
          </div>
        </main>

    </>
  )
}
