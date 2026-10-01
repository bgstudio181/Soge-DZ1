import { useState } from 'react'
import Left from '../add/left'
import '../Pagecss/favori.css'
export default
function Favori() {
  let favs=[
    {name:"io",type:"min",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:5000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:9000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"ueus",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"iuj",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"iuu",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:false},
    {name:"euwuw",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"wuuw",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"wuwu",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"euwuw",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
  ]
  let fav=favs.map((item)=>{
    return(<div class="offer2">
      <img src={item.img}/> 
      <div className="data">
        <h2 class="name">{item.name}</h2>
        <div className="dat0">
          <h3 className="dat"><p>التاريخ:{item.date}</p><p>الطاقة:{item.tayp}</p></h3>
          <hr/>
          <h3 className="dat"><p>التحكم:{item.control}</p><p>المسافة:{item.km+"km"}</p></h3>  
        </div>    
        <div className="priandfi"><h3 class="price">{item.price}دج</h3> <h3 className="po" style={{color: item.neg===true? "green":"red" }}>عرض ممتاز</h3><h4 style={{color: "black"}}>{item.neg===true? "قابل للتفاوض" :"غير قابل للتفاوض"}</h4></div>
        <hr/>
        <div className="con">

          
            <i class="bi bi-heart" id="heart"></i>
            <i class="bi bi-chat-dots" id="phone">مراسلة</i>
            <i class="bi bi-telephone" id="phone">الهاتف</i>
        
          <div>
             
          </div>
        </div>
      </div>
      
    </div>
           )
  })
  return(
    <body>
      <main>
        <Left/>
        <div class="view-fav">
          <div className="titre-fav"></div>
          <div class="view-fav1">
            <div className="view-fav2">
              {fav}
            </div>
          </div>
        
        
        </div>
      </main>
    </body>
  )

  
}