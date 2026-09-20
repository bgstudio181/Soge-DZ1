import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Left from '../../add/left'
export default
function Main() {
  let studios=[
    {id:1,img:"src/assets/img/Studio/A.png"},
    {id:2,img:"src/assets/img/Studio/B.png"},
    {id:11,img:"src/assets/img/Studio/C.png"},
    {id:3,img:"src/assets/img/Studio/D.png"},
    {id:12,img:"src/assets/img/Studio/A.png"},
    {id:9,img:"src/assets/img/Studio/B.png"},
    {id:16,img:"src/assets/img/Studio/C.png"},
    {id:1,img:"src/assets/img/Studio/A.png"},
    {id:2,img:"src/assets/img/Studio/B.png"},
    {id:11,img:"src/assets/img/Studio/C.png"},
    {id:3,img:"src/assets/img/Studio/D.png"},
    {id:12,img:"src/assets/img/Studio/A.png"},
    {id:9,img:"src/assets/img/Studio/B.png"},
    {id:16,img:"src/assets/img/Studio/C.png"},
    {id:1,img:"src/assets/img/Studio/A.png"},
    {id:2,img:"src/assets/img/Studio/B.png"},
    {id:11,img:"src/assets/img/Studio/C.png"},
    {id:3,img:"src/assets/img/Studio/D.png"},
    {id:12,img:"src/assets/img/Studio/A.png"},
    {id:9,img:"src/assets/img/Studio/B.png"},
    {id:16,img:"src/assets/img/Studio/C.png"},
    {id:1,img:"src/assets/img/Studio/A.png"},
    {id:2,img:"src/assets/img/Studio/B.png"},
    {id:11,img:"src/assets/img/Studio/C.png"},
    {id:3,img:"src/assets/img/Studio/D.png"},
    {id:12,img:"src/assets/img/Studio/A.png"},
    {id:9,img:"src/assets/img/Studio/B.png"},
    {id:16,img:"src/assets/img/Studio/C.png"},
    {id:1,img:"src/assets/img/Studio/A.png"},
    {id:2,img:"src/assets/img/Studio/B.png"},
    {id:11,img:"src/assets/img/Studio/C.png"},
    {id:3,img:"src/assets/img/Studio/D.png"},
    {id:12,img:"src/assets/img/Studio/A.png"},
    {id:9,img:"src/assets/img/Studio/B.png"},
    {id:16,img:"src/assets/img/Studio/C.png"},
    {id:1,img:"src/assets/img/Studio/A.png"},
    {id:2,img:"src/assets/img/Studio/B.png"},
    {id:11,img:"src/assets/img/Studio/C.png"},
    {id:3,img:"src/assets/img/Studio/D.png"},
    {id:12,img:"src/assets/img/Studio/A.png"},
    {id:9,img:"src/assets/img/Studio/B.png"},
    {id:16,img:"src/assets/img/Studio/C.png"},
  ]
  let studio=studios.map((item)=>{
    return(<button key={item.id} class="studio"><img src={item.img}/></button>)
  })
  return (
    <>
        <main>
          <Left/>
          <div class="view3">
            <div class="pub"><img src="src/assets/pub/pub.png"/></div>
            <div class="shop">
              <div class="exit"><NavLink to="/" className="oth"><p>عودة</p></NavLink><input></input></div>
        <div class="studio2">
          <div class="scrol2-2" >
            {studio}
            

            
          </div>
        </div>
        
        
      </div>      
          </div>
        </main>

    </>
  )
}