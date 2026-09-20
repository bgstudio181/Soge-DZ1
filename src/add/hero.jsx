import {useState} from 'react'
import "../assets/css/hero.css"
export default
function hero() {
  let [type,settype]=useState("car")
  function she(){
    anim(20)
  }
  return(
    <div class="hero">
      <div class="slach">
        <img src="src/assets/img/hero/Back2.png"/>
      </div>      
      <div class="slach">
        
        <img src="src/assets/img/hero/Baner2.png"/>
              <div  class="sh2">
                <button  class="type" id="truck"><i class="bi bi-truck" style={{color: type=="truck"? "gold" : "black"}} onClick={()=>{settype("truck")}}></i></button>
                <button  class="type" id="car"><i class="bi bi-car-front" style={{color: type=="car"? "gold" : "black"}} onClick={()=>{settype("car")}}></i></button>
                <button  class="type" id="bicycle"><i class="bi bi-bicycle" style={{color: type=="moto"? "gold" : "black"}} onClick={()=>{settype("moto")}}></i></button>
              </div>
              <div class="sh0">
          <div class="filtre1">
                  <button onClick={she} ><span>بحث (100)</span><i class="bi bi-search"/></button>
          </div>
          <div class="filtre1">
            <h2>السعر</h2>
            <select>
              <option>الكل</option>
              <option>من 100الى 300</option>
              <option>من 300 الى 450</option>
              <option>من 450الى 600</option>
              
            </select>
          </div>
    
          <div class="filtre1">
            <h2>الماركة</h2>
            <select>
              <option>الكل</option>
              <option>KIA</option>
              <option>BMW</option>
              <option>RENAULT</option>
              <option>FIAT</option>
              <option>GEELY</option>
            </select>
          </div>
          <div class="filtre1">
            <h2>الموديل</h2>
            <select>
              <option>الكل</option>
              <option></option>
            </select>
          </div>
          
        </div>
      
      
      </div>
      
    </div>
  )
  
}