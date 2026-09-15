import { useState } from 'react'
export default
function Notlogin() {
  return (
    <>
      <main class="main2">
      <div className="notinformation">
        <h1 className="text">
          <img src="src/assets/img/logo/logo2.png"/>
        </h1>
        <label class="titre">البريد الإلكتروني</label>
        <br/>
        <input class="sing" placeholder=""/>
        <label class="titre">كلمة المرور</label>
        <br/>
        <input class="sing" type="password"/>
        <input class="sing1" type="checkbox" /><p>اوافق على الشروط <a herf="">الخصوصية</a></p>
        <input class="singbutton" type="button" value="سجل دخولك" />
        <a herf="">نسيت كلمة المرور</a>
        <p>ليس لدي حساب <a herf="">سجل الان</a></p>
      </div>
      </main>
      
      
    </>
    )
}