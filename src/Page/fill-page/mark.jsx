import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Left from '../../add/left'
import '../../assets/css/mark.css'
export default
function Pope() {
  let popes=[
    {id:1,img:"src/assets/img/Logo1/RENAULT.png"},
    {id:2,img:"src/assets/img/Logo1/PEUGEOT.png"},
    {id:11,img:"src/assets/img/Logo1/GEELY.png"},
    {id:3,img:"src/assets/img/Logo1/HYUNDAI.png"},
    {id:12,img:"src/assets/img/Logo1/FIAT.png"},
    {id:9,img:"src/assets/img/Logo1/MARCEDES-BENZ.png"},
    {id:16,img:"src/assets/img/Logo1/BMW.png"},
    {id:16,img:"src/assets/img/Logo1/NISSAN.png"},
    {id:16,img:"src/assets/img/Logo1/VOLKSWAGEN.png"},
    {id:16,img:"src/assets/img/Logo1/KIA.png"},
    {id:16,img:"src/assets/img/Logo1/FORD.png"},
    {id:16,img:"src/assets/img/Logo1/AUDI.png"},
    {id:16,img:"src/assets/img/Logo1/DACIA.png"},
    {id:16,img:"src/assets/img/Logo1/SUZUKI.png"},
    {id:16,img:"src/assets/img/Logo1/HONDA.png"},
    {id:16,img:"src/assets/img/Logo1/CHEVROLET.png"},
    {id:16,img:"src/assets/img/Logo1/OPEL.png"},
    {id:16,img:"src/assets/img/Logo1/CHERY.png"},
    {id:16,img:"src/assets/img/Logo1/CITROËN.png"},
    {id:16,img:"src/assets/img/Logo1/MITSUBISHI.png"},
    {id:16,img:"src/assets/img/Logo1/TOYOTA.png"},
    {id:16,img:"src/assets/img/Logo1/BYD.png"},
    {id:16,img:"src/assets/img/Logo1/SEAT.png"},
    {id:16,img:"src/assets/img/Logo1/CHANGAN.png"},
  ]
  let pope=popes.map((item)=>{
    return(<button key={item.id} class="mark2"><img src={item.img}/></button>)
  })
  return (
    <>
        <main>
          <Left/>
          <div class="view">
            <div class="pub"><img src="src/assets/pub/pub.png"/></div>
              <div class="exit"><NavLink to="/" className="oth"><p>عودة</p></NavLink><input></input></div>
        <div class="pope2">
          <div class="scrolmark-2" >
            {pope}
            

            
        </div>
        
        
      </div>      
          </div>
        </main>

    </>
  )
}