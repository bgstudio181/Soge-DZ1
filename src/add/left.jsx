import {NavLink} from 'react-router-dom'


export default 
function Left() {
  return(
    <div class="left" >
      <img src="src/assets/img/logo/logo2.png" class="logo"/>
      <section>  
        
        <NavLink to="/" style={({ isActive }) => {if(isActive){return{color:"rgb(255,204,0,1)",}}else{return{color:"black",}}}} >
          <i class="bi bi-house-door" ></i> <span>الرئيسية</span>
        </NavLink>
        <NavLink to="/profile" style={({isActive})=>{if(isActive){return{color:"rgb(255,204,0,1)"}}else{return{color:"black"}}}}>
          <i class="bi bi-person"></i> <span>شخصي</span>
        </NavLink>
        <NavLink to="/favourite" style={({isActive})=>{if(isActive){return{color:"rgb(255,204,0,1)"}}else{return{color:"black"}}}}>
          <i class="bi bi-heart"></i> <span>مفضلة</span>
        </NavLink>
        <div ></div>
        <NavLink to="/shop" style={({isActive})=>{if(isActive){return{color:"rgb(255,204,0,1)"}}else{return{color:"black"}}}}>
          <i class="bi bi-shop"></i> <br/> <span>متجري</span>
        </NavLink>
        <NavLink to="/chat" style={({isActive})=>{if(isActive){return{color:"rgb(255,204,0,1)"}}else{return{color:"black"}}}}>
          <i class="bi bi-chat-dots"></i> <br/><span>محادثة</span>
        </NavLink>
        <NavLink to="/price" style={({isActive})=>{if(isActive){return{color:"rgb(255,204,0,1)"}}else{return{color:"black"}}}}>
          <i class="bi bi-graph-up-arrow"></i> <span>اسعار</span>
        </NavLink>
        
        
        
        
        
      </section>
      <NavLink to="/price">
        <a id="exit" href=""><i class="bi bi-box-arrow-right" ></i> <br/> <span>خروج</span></a>
      </NavLink>
      
    </div>
  )  
}