import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Left from '../../add/left'
import '../../assets/css/good.css'
export default
function Main() {
  let [fill,setfill]=useState({type:"",sol:true,mark:"الكل",date:"الكل",t:"0",trad:true,minpri:"",maxpri:""})
  let Goods=[
    {name:"io",type:"min",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:5000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:9000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"ueus",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"iuj",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"iuu",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:false},
    {name:"euwuw",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"wuuw",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"wuwu",mark:"BMW",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"euwuw",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:false,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:true,price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto",trad:true},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
    {name:"BMW409",img:"src/assets/img/Good/4.jpg",con:"جديدة",neg:"قابلة للتفاوض",price:4000,date:"2020",tayp:"disle",km:"1200",control:"auto"},
  ]
  let Goodfill=Goods.filter((good)=>{return(  (fill.maxpri=="" ||fill.maxpri>=good.price) &&  (fill.minpri=="" ||fill.minpri<=good.price) && (fill.mark==="الكل" || good.mark===fill.mark) && (fill.date==="الكل" || good.date===fill.date) && (good.neg===fill.sol) && (good.trad===fill.trad) && (fill.type===""||good.type===fill.type))})
  let Good=Goodfill.map((item)=>{
    return(<div class="offer2">
      <img src={item.img}/> 
      <div className="data">
        <h2 class="name">{item.name}</h2>
        <div className="dat0">
          <h3 className="dat"><p>التاريخ:{item.date}</p><p>الطاقة:{item.tayp}</p></h3>
          <hr/>
          <h3 className="dat"><p>التحكم:{item.control}</p><p>المسافة:{item.km+"km"}</p></h3>  
        </div>    
        <div className="priandfi"><h3 class="price">{item.price}دج</h3> <h3 className="po" style={{color: item.neg===true? "green":"red" }}>عرض ممتاز</h3><h4 style={{color: "black"}}>{item.neg===true? "قابل للتفاوض" :"غير قابل للتفاوض"}</h4></div>
        <hr/>
        <div className="con">

          
            <i class="bi bi-heart" id="heart"></i>
            <i class="bi bi-chat-dots" id="phone">مراسلة</i>
            <i class="bi bi-telephone" id="phone">الهاتف</i>
        
          <div>
             
          </div>
        </div>
      </div>
      
    </div>
           )
  })
  let [fillout,setfillout]=useState(0)
  let markfill=[
    {name:"ren",img:"src/assets/img/icon2/1.png"},{name:"fiat",img:"src/assets/img/icon2/2.png"},{name:"geely",img:"src/assets/img/icon2/3.png"},{name:"bmw",img:"src/assets/img/icon2/4.png"},{name:"cit",img:"src/assets/img/icon2/5.png"},{name:"opel",img:"src/assets/img/icon2/6.png"},{name:"mer",img:"src/assets/img/icon2/7.png"},{name:"od",img:"src/assets/img/icon2/8.png"},{name:"seat",img:"src/assets/img/icon2/9.png"},{name:"mit",img:"src/assets/img/icon2/10.png"},{name:"chev",img:"src/assets/img/icon2/11.png"},{name:"suz",img:"src/assets/img/icon2/12.png"},{name:"vol",img:"src/assets/img/icon2/13.png"},{name:"land",img:"src/assets/img/icon2/14.png"},{name:"chery",img:"src/assets/img/icon2/15.png"},{name:"hona",img:"src/assets/img/icon2/16.png"},{name:"pego",img:"src/assets/img/icon2/17.png"},{name:"kia",img:"src/assets/img/icon2/18.png"},{name:"niss",img:"src/assets/img/icon2/19.png"},{name:"hyund",img:"src/assets/img/icon2/20.png"},]
  let mark=markfill.map((item)=>{
    return(<div class="elim" onClick={()=>{if(fill.mark===item.name){setfill({...fill,mark:"الكل"})}else{setfill({...fill,mark:item.name})}}} style={{filter: fill.mark===item.name? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src={item.img}/><label>صغيرة</label><input type="checkbox"/></div>)
  })
  return (
    <>
        <main >
          
          <Left/>
          
          <div className="view0">
            
            <div className="pub2"><NavLink to="/" className="oth"><p><i className="bi bi-caret-left"></i>عودة</p></NavLink><img src="src/assets/pub/pub.png"/></div>
            <div className="view0-1">
            <div className="superfill">
          <div className="superfill2" >
            
            <div class="fillbox">
              <div class="filltext"><h2>فلتر</h2><i class="bi bi-sliders"></i></div>
              <button className="fillbox1" onClick={()=>{setfillout(1)}} style={{color: fillout===1? "gold" :"black",width: fillout===1? "95%" :"80%"}}>
                <label>النوع</label>
                <div className="numandar">

                  <div className="numfill"></div>
                  <i className="bi bi-caret-right"></i>
                  
                </div>

              </button>     
              <button className="fillbox1" onClick={()=>{setfillout(2)}} style={{color: fillout===2? "gold" :"black",width: fillout===2? "95%" :"80%"}}>
                <label>الماركة</label>
                <div className="numandar">

                  <div className="numfill"></div>
                  <i className="bi bi-caret-right"></i>
                  
                </div>
              </button>  
              <button className="fillbox1"  disabled={fill.mark==="الكل"}  onClick={()=>{setfillout(3)}} style={{color: fillout===3? "gold" :"black",width: fillout===3? "95%" :"80%" ,background: fill.mark=="الكل"? "rgba(200,200,200,0.5)":"white"}}>
                <label>الموديل</label>
                <div className="numandar">

                  <div className="numfill"></div>
                  <i className="bi bi-caret-right"></i>
                  
                </div>
              </button>       
              <div className="fillbox1" onClick={()=>{setfillout(4)}} style={{color: fillout===4? "gold" :"black",width: fillout===4? "95%" :"80%"}}><label>التاريخ</label>
                <div className="numandar">

                  <div className="numfill"></div>
                  <i className="bi bi-caret-right"></i>
                  
                </div>
              </div>
              <button className="fillbox1" onClick={()=>{setfillout(5)}} style={{color: fillout===5? "gold" :"black",width: fillout===5? "95%" :"80%"}}>
                <label>التحكم</label>
                <div className="numandar">

                  <div className="numfill"></div>
                  <i className="bi bi-caret-right"></i>
                  
                </div>
                
              </button>
              <button className="fillbox1" onClick={()=>{setfillout(6)}} style={{color: fillout===6? "gold" :"black",width: fillout===6? "95%" :"80%"}}>
                <label>السعر</label>
                <div className="numandar">

                  <div className="numfill"></div>
                  <i className="bi bi-caret-right"></i>
                  
                </div>
              </button>
              <button className="fillbox1" onClick={()=>{setfillout(7)}} style={{color: fillout===7? "gold" :"black",width: fillout===7? "95%" :"80%"}}>
                <label>المسافة المقطوعة</label>
                <div className="numandar">

                  <div className="numfill"></div>
                  <i className="bi bi-caret-right"></i>
                  
                </div>
              </button>
              <button className="fillbox1" onClick={()=>{setfillout(8)}} style={{color: fillout===8? "gold" :"black",width: fillout===8? "95%" :"80%"}}>
                <label>المساومة</label>
                <div className="numandar">

                  <div className="numfill"></div>
                  <i className="bi bi-caret-right"></i>
                  
                </div>
              </button>
              <button className="fillbox1" onClick={()=>{setfillout(9)}} style={{color: fillout===9? "gold" :"black",width: fillout===9? "95%" :"80%"}}>
                <label>فئة العرض</label>
                <div className="numandar">

                  <div className="numfill"></div>
                  <i className="bi bi-caret-right"></i>
                  
                </div>
              </button>
              <button className="fillbox1" onClick={()=>{setfillout(10)}} style={{color: fillout===10? "gold" :"black",width: fillout===10? "95%" :"80%"}}>
                <label>البائع</label>
                <div className="numandar">

                  <div className="numfill">8</div>
                  <i className="bi bi-caret-right"></i>
                  
                </div>
              </button>  
            </div>
            
          </div>
          <button className="superfill3" >{Goodfill.length}:ابحث</button>
          </div>
            <div className="view2">
            <div className="fillout" style={{height: fillout===1? "80vh" :"0px" , marginTop: fillout===1? "2vh" :"0px",border: fillout===1? "1px" :"0px"  }}>
              <div className="titre">الانواع<i className="bi bi-x" onClick={()=>{setfillout(0)}}></i></div>
              
              <input className="fillouttitre" placeholder="ابحث عن نوع"/>
              <div className="filldata">
                <div class="elim" onClick={()=>{if(fill.type==="min"){setfill({...fill,type:""})}else{setfill({...fill,type:"min"})}}} style={{filter: fill.type==="min"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/1.png"  /><label>صغيرة</label><input type="checkbox"/></div>
                <div class="elim" onClick={()=>{setfill({...fill,type:"class"})}}style={{filter: fill.type==="class"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/2.png" /><label>كلاسيكية</label><input type="checkbox"/></div>
                <div class="elim"onClick={()=>{setfill({...fill,type:"elct"})}}style={{filter: fill.type==="elct"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/3.png" /><label>كهربائية</label><input type="checkbox"/></div>
                <div class="elim"onClick={()=>{setfill({...fill,type:"suv"})}}style={{filter: fill.type==="suv"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/4.png" /><label>سيف</label><input type="checkbox"/></div>
                <div class="elim"onClick={()=>{setfill({...fill,type:"pickup"})}}style={{filter: fill.type==="pickup"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/5.png" /><label>شاحنة</label><input type="checkbox"/></div>
                <div class="elim"onClick={()=>{setfill({...fill,type:"sport"})}}style={{filter: fill.type==="sport"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/6.png" /><label>رياضية</label><input type="checkbox"/></div>
                <div class="elim"onClick={()=>{setfill({...fill,type:"seedan"})}}style={{filter: fill.type==="seedan"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/7.png" /><label>سيدان</label><input type="checkbox"/></div>
                <div class="elim"onClick={()=>{setfill({...fill,type:"tred"})}}style={{filter: fill.type==="tred"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/8.png" /><label>تجارية</label><input type="checkbox"/></div>
                <div class="elim"onClick={()=>{setfill({...fill,type:"good"})}}style={{filter: fill.type==="good"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/9.png" /><label>فخمة</label><input type="checkbox"/></div>
                <div class="elim"onClick={()=>{setfill({...fill,type:"chan"})}}style={{filter: fill.type==="chan"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/10.png" /><label>شاحنة</label><input type="checkbox"/></div>
                <div class="elim"onClick={()=>{setfill({...fill,type:"grandchan"})}}style={{filter: fill.type==="grandchan"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/11.png" /><label>شاحنات كبيرة</label><input type="checkbox"/></div>
                <div class="elim"onClick={()=>{setfill({...fill,type:"hagi"})}}style={{filter: fill.type==="hagi"? "invert(84%) sepia(58%) saturate(121%) hue-rotate(349deg) brightness(105%) contrast(103%)" :""}}><img src="src/assets/img/car2/12.png" /><label>هجينة</label><input type="checkbox"/></div>
              </div>
              
            </div> 
            <div className="fillout" style={{height: fillout===2? "90vh" :"0px" , marginTop: fillout===2? "2vh" :"0px" ,border: fillout===2? "1px" :"0px" }}>
              <div className="titre">الشعارات<i className="bi bi-x" onClick={()=>{setfillout(0)}}></i></div>
              
              <input className="fillouttitre" placeholder="ابحث عن ماركة"/>
              <div className="filldata">
                {mark}   
              </div></div>
            <div className="fillout" style={{height: fillout===3? "70vh" :"0px" , marginTop: fillout===3? "2vh" :"0px" ,border: fillout===3? "1px" :"0px" }}>
              <div className="titre">الشعارات<i className="bi bi-x" onClick={()=>{setfillout(0)}}></i></div>
              
              <input className="fillouttitre" placeholder="ابحث عن موديل"/>
              <div className="filldata" style={{height: fill.mark==="pego"? "70vh" :"0px" }}>
                <div class="elim"><input type="checkbox"/>Peugeot208</div>
                <div class="elim"><input type="checkbox"/>Peugeot301</div>
                <div class="elim"><input type="checkbox"/>Peugeot-Partner</div>
                <div class="elim"><input type="checkbox"/>Peugeot207</div>
                <div class="elim"><input type="checkbox"/>Peugeot206</div>
                <div class="elim"><input type="checkbox"/>Peugeot408</div>
                <div class="elim"><input type="checkbox"/>Peugeot3008</div>
                <div class="elim"><input type="checkbox"/>Peugeot2008</div>
                <div class="elim"><input type="checkbox"/>Peugeot308</div>
                <div class="elim"><input type="checkbox"/>Peugeot5008</div>
                <div class="elim"><input type="checkbox"/>Peugeot508</div>
              </div>
              <div className="filldata" style={{height: fill.mark==="fiat"? "70vh" : "0px" }}>
                <div className="elim"><input type="checkbox"/>Fiat500</div>
                <div className="elim"><input type="checkbox"/>Fiat500X</div>
                <div className="elim"><input type="checkbox"/>FiatTipo</div>
                <div className="elim"><input type="checkbox"/>FiatDoblo</div>
                <div className="elim"><input type="checkbox"/>FiatTitano</div>
                <div className="elim"><input type="checkbox"/>FiatScudo</div>
                <div className="elim"><input type="checkbox"/>FiatDucato</div>
              </div>

              <div className="filldata" style={{height: fill.mark==="geely"? "70vh" :"0px" }}>
                <div className="elim"><input type="checkbox"/>GeelyCoolray</div>
                  <div className="elim"><input type="checkbox"/>GeelyEmgrand</div>
                  <div className="elim"><input type="checkbox"/>GeelyStarray</div>
                  <div className="elim"><input type="checkbox"/>GeelyCityray</div>
                  <div className="elim"><input type="checkbox"/>GeelyOkavango</div>
                  <div className="elim"><input type="checkbox"/>GeelyGX3Pro</div>
                  <div className="elim"><input type="checkbox"/>GeelyMonjaro</div>
                  <div className="elim"><input type="checkbox"/>GeelyTugella</div>
                  <div className="elim"><input type="checkbox"/>GeelyPreface</div>
                  <div className="elim"><input type="checkbox"/>GeelyAzkarra</div>
                  <div className="elim"><input type="checkbox"/>GeelyGeometryC</div>
                  <div className="elim"><input type="checkbox"/>GeelyEX2</div>
                  <div className="elim"><input type="checkbox"/>GeelyEX5</div>

              
              </div>
            <div className="filldata" style={{height: fill.mark==="bmw"? "70vh" : "0px"}}>
              <div className="elim"><input type="checkbox"/>BMW 1 Series</div>
              <div className="elim"><input type="checkbox"/>BMW 2 Series</div>
              <div className="elim"><input type="checkbox"/>BMW 3 Series</div>
              <div className="elim"><input type="checkbox"/>BMW 4 Series</div>
              <div className="elim"><input type="checkbox"/>BMW 5 Series</div>
              <div className="elim"><input type="checkbox"/>BMW 7 Series</div>
              <div className="elim"><input type="checkbox"/>BMW 8 Series</div>
              <div className="elim"><input type="checkbox"/>BMW X1</div>
              <div className="elim"><input type="checkbox"/>BMW X2</div>
              <div className="elim"><input type="checkbox"/>BMW X3</div>
              <div className="elim"><input type="checkbox"/>BMW X4</div>
              <div className="elim"><input type="checkbox"/>BMW X5</div>
              <div className="elim"><input type="checkbox"/>BMW X6</div>
              <div className="elim"><input type="checkbox"/>BMW X7</div>
              <div className="elim"><input type="checkbox"/>BMW Z4</div>
              <div className="elim"><input type="checkbox"/>BMW i4</div>
              <div className="elim"><input type="checkbox"/>BMW i7</div>
              <div className="elim"><input type="checkbox"/>BMW iX</div>
              <div className="elim"><input type="checkbox"/>BMW M2</div>
              <div className="elim"><input type="checkbox"/>BMW M3</div>
              <div className="elim"><input type="checkbox"/>BMW M4</div>
              <div className="elim"><input type="checkbox"/>BMW M5</div>
              <div className="elim"><input type="checkbox"/>BMW M8</div>
            </div>
            <div className="fiildata" style={{height: fill.mark==="cit" ? "70vh" : "0px"}}>
              <div className="elim"><input type="checkbox"/>Citroën C1</div>
              <div className="elim"><input type="checkbox"/>Citroën C2</div>
              <div className="elim"><input type="checkbox"/>Citroën C3</div>
              <div className="elim"><input type="checkbox"/>Citroën C3 Aircross</div>
              <div className="elim"><input type="checkbox"/>Citroën C4</div>
              <div className="elim"><input type="checkbox"/>Citroën C4 Cactus</div>
              <div className="elim"><input type="checkbox"/>Citroën C4 Aircross</div>
              <div className="elim"><input type="checkbox"/>Citroën C4 X</div>
              <div className="elim"><input type="checkbox"/>Citroën C5</div>
              <div className="elim"><input type="checkbox"/>Citroën C5 Aircross</div>
              <div className="elim"><input type="checkbox"/>Citroën C5 X</div>
              <div className="elim"><input type="checkbox"/>Citroën C6</div>
              <div className="elim"><input type="checkbox"/>Citroën C8</div>
              <div className="elim"><input type="checkbox"/>Citroën C-Elysée</div>
              <div className="elim"><input type="checkbox"/>Citroën DS3</div>
              <div className="elim"><input type="checkbox"/>Citroën DS4</div>
              <div className="elim"><input type="checkbox"/>Citroën DS5</div>
              <div className="elim"><input type="checkbox"/>Citroën Berlingo</div>
              <div className="elim"><input type="checkbox"/>Citroën Jumpy</div>
              <div className="elim"><input type="checkbox"/>Citroën SpaceTourer</div>
              <div className="elim"><input type="checkbox"/>Citroën Nemo</div>
              <div className="elim"><input type="checkbox"/>Citroën Xsara</div>
              <div className="elim"><input type="checkbox"/>Citroën Xantia</div>
              <div className="elim"><input type="checkbox"/>Citroën Saxo</div>
              <div className="elim"><input type="checkbox"/>Citroën Ami</div>
            </div>

            
            </div>
            <div className="fillout" style={{height: fillout===4? "70vh" :"0px" , marginTop: fillout===4? "2vh" :"0px" ,border: fillout===4? "1px" :"0px" }}>
              <div className="titre">التاريخ<i className="bi bi-x" onClick={()=>{setfillout(0)}}></i></div>
                <div className="fillbox2">
                <label>التاريخ</label>
                <div className="prifill"><input type="number" placeholder="max" value={fill.maxpri} onChange={(e)=>{setfill({...fill,maxpri:e.target.value})}}/><input type="number" placeholder="min" value={fill.minpri} onChange={(e)=>{setfill({...fill,minpri:e.target.value})}}/></div>
              </div>

            
            </div>
            <div className="fillout" style={{height: fillout===5? "70vh" :"0px" , marginTop: fillout===5? "2vh" :"0px" ,border: fillout===5? "1px" :"0px" }}>
              <div className="titre">التاريخ<i className="bi bi-x" onClick={()=>{setfillout(0)}}></i></div>
                <div className="fillbox2">
                <label>السعر</label>
                <div className="prifill"><input type="number" placeholder="max" value={fill.maxpri} onChange={(e)=>{setfill({...fill,maxpri:e.target.value})}}/><input type="number" placeholder="min" value={fill.minpri} onChange={(e)=>{setfill({...fill,minpri:e.target.value})}}/></div>
              </div>

            
            </div>
            <div className="fillout" style={{height: fillout===6? "20vh" :"0px" , marginTop: fillout===6? "2vh" :"0px" ,border: fillout===6? "1px" :"0px" }}>
              <div className="titre">التاريخ<i className="bi bi-x" onClick={()=>{setfillout(0)}}></i></div>
                <div className="fillbox2">
                <label>السعر</label>
                <div className="prifill"><input type="number" placeholder="max" value={fill.maxpri} onChange={(e)=>{setfill({...fill,maxpri:e.target.value})}}/><input type="number" placeholder="min" value={fill.minpri} onChange={(e)=>{setfill({...fill,minpri:e.target.value})}}/></div>
              </div>
            
              </div>
            <div className="fillout" style={{height: fillout===7? "20vh" :"0px" , marginTop: fillout===7? "2vh" :"0px" ,border: fillout===7? "1px" :"0px"}}>
              <div className="titre">المسافة المقطوعة<i className="bi bi-x" onClick={()=>{setfillout(0)}}></i></div>
                <div className="fillbox2">
                <label>المسافة المقطوعة</label>
                <div className="prifill"><input type="number" placeholder="max" value={fill.maxpri} onChange={(e)=>{setfill({...fill,maxpri:e.target.value})}}/><input type="number" placeholder="min" value={fill.minpri} onChange={(e)=>{setfill({...fill,minpri:e.target.value})}}/></div>
              </div>
            
              </div>
            <div className="fillout" style={{height: fillout===8? "20vh" :"0px" , marginTop: fillout===8? "2vh" :"0px" ,border: fillout===8? "1px" :"0px"}}>
              <div className="titre">التاريخ<i className="bi bi-x" onClick={()=>{setfillout(0)}}></i></div>
                <div className="fillbox2">
                <label>المساومة</label>
                <div className="soldbox"><label className="sold"><input type="checkbox" checked={fill.sol} onChange={(i)=>{setfill({...fill,sol: i.target.checked})}}/><span className="slider"></span></label> <label style={{color:fill.sol===true? "green":"red"}}>{fill.sol===true? "قابل للتفواض" :"غير قابل للتفاوض" }</label></div>
              </div>
              </div>
            <div className="fillout" style={{height: fillout==9? "20vh" :"0px" , marginTop: fillout===9? "2vh" :"0px" ,border: fillout===9? "1px" :"0px"}}>
              <div className="titre">التاريخ<i className="bi bi-x" onClick={()=>{setfillout(0)}}></i></div>
                <div className="fillbox2">
                <label>فئة العرض</label>
                <input className="range" type="range" min="0" max="2" step="1" style={{accentColor: fill.t==="0"? "red":fill.t==="1"? "gold":"green"}} value={fill.t} onChange={(e)=>{setfill({...fill,t:e.target.value})}}/>
              </div>    
              </div>
            <div className="fillout" style={{height: fillout===10? "20vh" :"0px" , marginTop: fillout===10? "2vh" :"0px" ,border: fillout===10? "1px" :"0px"}}>
              <div className="titre">التاريخ<i className="bi bi-x" onClick={()=>{setfillout(0)}}></i></div>
                <div className="fillbox2">
                <label>البائع</label>
                <div className="botibox"><label className="boti"><input type="checkbox" checked={fill.trad} onChange={(e)=>{setfill({...fill,trad:e.target.checked})}}/><span className="slider2"></span></label> <label>{fill.trad===true? "خاص" :"مستودع " }</label></div>
              </div>              
              </div>



            
            
            
            <div className="exit"><p>البحث <span style={{color: "gold"}}>100</span> عروض </p><div><select><option>الترتيب: من الاغلى للارخص</option>  </select>   </div></div>
        <div className="good2" onClick={()=>{setfillout(0)}}>
          
          <div className="scrol3-2" >
            {Good}
            

            
          </div>
        </div>
        
              
          </div>
            </div>
          </div>
        </main>

    </>
  )
}