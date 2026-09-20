import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Left from '../add/left'
import Hero from '../add/hero'
import Model from '../add/model'
import AI from '../add/AI'
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
  let studios=[
    {id:1,img:"src/assets/img/Studio/A.png"},
    {id:2,img:"src/assets/img/Studio/B.png"},
    {id:11,img:"src/assets/img/Studio/C.png"},
    {id:3,img:"src/assets/img/Studio/D.png"},
    {id:12,img:"src/assets/img/Studio/A.png"},
    {id:9,img:"src/assets/img/Studio/B.png"},
  ]
  let studio=studios.map((item)=>{
    return(<button key={item.id} class="studio"><img src={item.img}/></button>)
  })
  let models=[
    {name:"MINI",num:200,img:"src/assets/img/car/0.png"},
    {name:"SIDAN",num:200,img:"src/assets/img/car/14.png"},
    {name:"Big",num:200,img:"src/assets/img/car/3.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/4.png"},
    ]
  let model=models.map((item)=>{
    return (<div class="car"><p className="namemodel">{item.name}</p><p className="num" >حوالي {item.num} اعلان</p><img src={item.img} alt="car" /></div>)
  })
  let [Goods,setGoods]=useState([
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:"8,00,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto",fav:true},
    {name:"Honda",img:"src/assets/img/Good/1.jpg",con:"جديدة",neg:false,price:"4,000,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/1.jpg",con:"جديدة",neg:true,price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
  ])
  let Good=Goods.map((item)=>{
    return(<div class="offer">
      <img src={item.img}/> 
      <div className="data">
        <h2 class="name">{item.name}</h2>
        <h3 class="dat">2018.disle.1200km.auto</h3>
        <div className="priandfi"><h3 class="price">{item.price}</h3> <h4  style={{color: item.neg===true? "green":"red" }} >{item.neg===true? "قابل للتفاوض" :"غير قابل للتفاوض"}</h4></div>
        <hr/>
        <div className="con">
          
          <i class={item.fav===true? "bi bi-heart-fill":"bi bi-heart"} id="heart"></i>
          <i class="bi bi-telephone" id="phone">تواصل</i>
        </div>
      </div>
      
    </div>
           )
  })
  let [open,setopen]=useState(false)
  let [AIopen,setAIopen]=useState(false)
  let [lang,setlang]=useState("ar")
  return (
    <>
        <main>
          <Left/>
          <div class="view">
            <button className="AI" onClick={()=>{setAIopen(true)}}><i className="bi bi-stars"></i></button>
            
            <div className="sittingbar" style={{width: open===true? "40%": "0%",left: open===true? "60%": "100%"}}><div ><i className="bi bi-x" onClick={()=>{setopen(false)}} ></i> <h2>الاعدادات</h2></div><div className="lang"><p  className="sittingbartitre"></p><br/><p style={{color: lang=="ar"? "gold":"black"}} onClick={()=>{setlang("ar")}}>عربية</p><br/><p style={{color: lang=="fr"? "gold":"black"}} onClick={()=>{setlang("fr")}}>FR</p><br/><p style={{color: lang=="en"? "gold":"black"}} onClick={()=>{setlang("en")}}>EN</p> <i className="bi bi-translate"></i></div><div> <input type="checkbox"/>الوضع الليلي</div></div>
            <div className="AIbar" style={{width: AIopen===true? "100%": "0%",left: AIopen===true? "0%": "100%"}}><div><i className="bi bi-x" onClick={()=>{setAIopen(false)}} ></i></div><AI/></div>
            <div class="pub"><img src="src/assets/pub/pub.png"/></div>
            <Hero/>
            <div class="shop">
              <div class="titre">
              <div class="t"><div></div>انواع السيارات</div>
              <NavLink className="oth" to="/model"><p>رؤية المزيد</p></NavLink>
              
          
        </div>
              <div class="model">
          <div class="scrol">
            {model}
          </div>
        </div>
              <div class="titre">
          <div class="t"><div></div> الشعارات الرائدة</div>
          <NavLink className="oth" to="/mark"><p>رؤية المزيد</p></NavLink>
        </div>
              <div class="pope">
          <div class="scrol1">
            {pope}
            

            
          </div>
        </div>

              <div class="titre">
          <div class="t"><div></div> المستودعات </div>
          <NavLink className="oth" to="/studio"><p>رؤية المزيد</p></NavLink>
        </div>
              <div class="pope">
          <div class="scrol1" >
            {studio}
            

            
          </div>
        </div>


              
              <div class="titre">
          <div class="t"><div></div> العروض المميزة</div>
          <NavLink className="oth" to="/good"><p>رؤية المزيد</p></NavLink>
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
