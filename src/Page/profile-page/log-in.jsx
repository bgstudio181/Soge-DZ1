import { useState } from 'react'
export default
function Login() {
  return (
    <>
      <div class="information">
        <div class="photo">
          <img src="src/assets/img/defl/Profildef.png"/>
        </div>
        <div>
          <h1 class="profilename">Ahmed Ali</h1>
          <i class="bi bi-geo-alt"><p class="position">الجزائر-العاصمة</p></i>
          <br/>
          <i class="bi bi-envelope"><p class="email">bgstudio181@gmail.com</p></i>
          <br/>
          <i class="bi bi-telephone"><p class="phone">0558860597</p></i>
          <br/>
          <button>عدل معلوماتك</button>
          </div>  
        <div>
          <h2>اللغة</h2>
          <ul>
            <li>عربية</li>
            <li>فرنسية</li>
            <li>انجليزية</li>                  
          </ul>
        </div>
        </div>
        <div class="setting1">
          <div class="1">
            <i class="bi bi-people"></i> 
            <h3> تاريخ الانضمام</h3>   
          </div>
          <hr/>
          <div class="1">
            <i class="bi bi-eye"></i> 
            <h3> المشاهدات</h3> 
          </div>
          <hr/>
          <div class="1">
            <i class="bi bi-heart"></i> 
            <h3> المفضلة</h3> 
          </div>
          <hr/>
          <div class="1">
            <i class="bi bi-star-fill"></i>
            <h3> التقييم</h3> 
          </div>
          <div class="on">
            <i class="bi bi-circle-fill"></i>
            <p> متصل</p>
            
          </div>
        </div>
        <div class="setting">
          <div class="ih">
            <div class="iht"><i class="bi bi-bar-chart"></i><h3>احصائيات</h3></div>
            <div class="ihbox">
              <div><i class="bi bi-cash"></i><h3>مبيعات</h3><h3>100</h3></div>
              <div><i class="bi bi-megaphone"></i> <h3>اعلاناتي</h3> <h3>100</h3></div>
              <div><i class="bi bi-badge-ad"></i> </div>
              <div><i class="bi bi-people"></i><h3>متابعين</h3> <h3>100</h3> </div>
            </div>
          </div>
          <div class="ih2">
            <div class="ih2t"><i class="bi bi-megaphone"></i><h3>اعلاناتي</h3></div>
            <div class="ihbox">
              <button></button>
            </div>
          </div>
          
        </div>
    </>
    )
}