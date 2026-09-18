import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Left from '../../add/left'
export default
function Main() {
  let Goods=[
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:"4,000دج",date:"2020",tayp:"disle",km:"1200",control:"auto"},
  ]
  let Good=Goods.map((item)=>{
    return(<div class="offer2">
      <img src={item.img}/> 
      <i class="bi bi-heart" id="heart"></i>
      <i class="bi bi-phone" id="phone"></i>
      <h3 class="name">{item.name}</h3>
      <h3 class="price">{item.price}</h3>
      <h3 class="dat">2018📅.disle⛽️.1200km👣.⚙️auto</h3>
    </div>
           )
  })
  return (
    <>
        <main>
          <Left/>
          <div class="superfill">
            <div class="filltext"><h2>فلتر متقدم</h2><i class="bi bi-search"></i></div>
            <div class="fillbox">
              <label>الماركة</label>
              <select>
                <option>الكل</option>
                <option>AUDI</option>
                <option>BMW</option>
                <option>BYD</option>
                <option>CHANGAN</option>
                <option>CHERY</option>
                <option>CHEVROLE</option>
                <option>CITROËN</option>
                <option>DACIA</option>
                <option>FIAT</option>
                <option>FORD</option>
                <option>GEELY</option>
                <option>HONDA</option>
                <option>HYNDAI</option>
                <option>KIA</option>
                <option>LANDROVER</option>
                <option>MARCEDES-BENZ</option>
                <option>MITSUBISHI</option>
                <option>NISSAN</option>
                <option>OPEL</option>
              </select>
              <label>الموديل</label>
              <select>
                <option>الكل</option>
              </select>
              <label>التاريخ</label>
              <select>
              
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
              </select>
              <label>التحكم</label>
              <input type="checkbox"></input>
              <input type="checkbox"></input>
            </div>
          </div>
          <div class="view2">
            <div class="pub"><img src="src/assets/pub/pub.png"/></div>
            
            <div class="exit"><NavLink to="/" className="oth"><p>عودة</p></NavLink><input></input></div>
        <div class="good2">
          <div class="scrol3-2" >
            {Good}
            

            
          </div>
        </div>
        
              
          </div>
        </main>

    </>
  )
}