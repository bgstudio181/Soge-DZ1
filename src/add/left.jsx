import {Link} from 'react-router-dom'


export default 
function Left() {
  return(
    <div class="left" >
      <img src="src/assets/img/logo/logo2.png" class="logo"/>
      <section>  
        <Link to="/">
          <a id="house" href="index.html"><i class="bi bi-house-door" ></i> <span>الرئيسية</span></a>
        </Link>
        <Link to="/profile">
          <a id="profile" href="profile.html"><i class="bi bi-person"></i> <span>شخصي</span> </a>
        </Link>
        <Link to="/favourite">
          <a href="favourite.html"><i class="bi bi-heart"></i> <span>مفضلة</span> </a>
        </Link>
        <div ></div>
        <Link to="/shop">
          <a><i class="bi bi-shop"></i> <br/> <span>متجري</span> </a>
        </Link>
        <Link to="/chat">
          <a id="chat" href="chat.html"><i class="bi bi-chat-dots"></i> <br/><span>محادثة</span> </a>
        </Link>
        <Link to="/price">
          <a><i class="bi bi-graph-up-arrow"></i> <span>اسعار</span> </a>
        </Link>
        
        
        
        
        
      </section>
      <a id="exit" href=""><i class="bi bi-box-arrow-right" ></i> <br/> <span>خروج</span></a>
    </div>
  )  
}