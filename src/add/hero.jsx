import {useState} from 'react'
export default
function hero() {
  let animState=useState()
  let animValue=animState[0]
  let anim=animState[1]
  function she(){
    anim(20)
  }
  return(
    <div class="hero">
      <div class="slach">
        <img src="src/assets/pub/pub.png"/>
      </div>      
      <div class="slach">
        
        <img src="src/assets/img/hero/Baner2.png"/>
              <div  class="sh2">
                <button  class="type" id="truck"><i class="bi bi-truck"></i></button>
                <button  class="type" id="car"><i class="bi bi-car-front"></i></button>
                <button  class="type" id="bicycle"><i class="bi bi-bicycle"></i></button>
              </div>
              <div class="sh0">
          <div class="filtre1">
                  <button onClick={she} ><i class="bi bi-search"/></button>
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
              <option>RUNALTE</option>
              <option>FAIT</option>
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