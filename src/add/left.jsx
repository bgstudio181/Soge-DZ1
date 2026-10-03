import {NavLink} from 'react-router-dom'


export default 
function Left() {
  return(
    <div class="left" >
      <img src="src/assets/img/logo/logo9.png" class="logo"/>
      <section>  
        
        <NavLink className="nav" to="/" style={({ isActive }) => {if(isActive){return{color:"white",background:"black"}}else{return{color:"black",}}}} >
          <div><i class="bi bi-house-door" > </i> <span>الرئيسية</span></div>
        </NavLink>
        <NavLink className="nav" to="/profile" style={({isActive})=>{if(isActive){return{color:"white",background:"black"}}else{return{color:"black"}}}}>
          <div><i class="bi bi-person"></i> <span>شخصي</span></div>
        </NavLink>
        <NavLink className="nav" to="/favourite" style={({isActive})=>{if(isActive){return{color:"white",background:"black"}}else{return{color:"black"}}}}>
          <div><i class="bi bi-heart"></i> <span>مفضلة</span></div>
        </NavLink>
        <NavLink className="nav" to="/shop" style={({isActive})=>{if(isActive){return{color:"white",background:"black"}}else{return{color:"black"}}}}>
          <div><i class="bi bi-shop"></i>  <span>متجري</span></div>
        </NavLink>
        <NavLink className="nav" to="/chat" style={({isActive})=>{if(isActive){return{color:"white",background:"black"}}else{return{color:"black"}}}}>
          <div><i class="bi bi-chat-dots"></i> <span>محادثة</span></div>
        </NavLink>
        <NavLink className="nav" to="/price" style={({isActive})=>{if(isActive){return{color:"white",background:"black"}}else{return{color:"black"}}}}>
          <div><i class="bi bi-graph-up-arrow"></i>  <span>اسعار</span></div>
        </NavLink>
        
        
        
        
        
      </section>
      <NavLink to="/price">
        <div className="not"><a id="exit" href=""><i class="bi bi-bell"><div id="notnumb"><p>10</p></div></i>
</a></div>
      </NavLink>
      <NavLink to="/price">
        <div className="loginbutt"><a id="exit" href=""> <span >تسجيل الدخول</span></a></div>
      </NavLink>
    </div>
  )  
}