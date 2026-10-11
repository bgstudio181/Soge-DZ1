import { useState } from 'react'
import '../Pagecss/chat.css'
import Left from '../add/left'

export default
function Chat() {
  function Speak(){
    if (write!=""){
      setchats([...chats,{name:write,class:"bubble"}])
      setwrite("")
    }
    
  }
  function ca(e){
    setwrite(e.target.value)
  }
  let [write,setwrite]=useState("")
  let [chats,setchats]=useState([])
  let [img,setimg]=useState("")
  let chat=chats.map((item)=>{
    return(<><div class="bubble"> <h3>{item.name}</h3></div><div class="bubble2"> <h3>{item.name}</h3></div></>)
  })
  let calls=[
    {id:1,name:"ahmed",src:3,last:"يخي بوراس",time:'10:30'},{id:2,name:"ahmed",src:3,last:"هههههيخي بوراس"},{id:3,name:"ahmed",src:3,last:"يخي بوراس"},{id:4,name:"ahmed",src:3,last:"يخي بوراس"},{id:5,name:"ahmed",src:3,last:"يخي بوراس"},{id:6,name:"ahmed",src:3,last:"يخي بوراس"},{id:7,name:"ahmed",src:3,last:"يخي بوراس"}]
  let [page,setpage]=useState()
  let call=calls.map((item1)=>{
    return(<div class="card" onClick={()=>{setpage(item1.id)}} style={{background: page===item1.id? "rgba(255,240,0,0.2)" : "white"}}> <div className="profillimg"><img class="photo1" src={img}/><div className="online"></div></div> <div className="carddat"> <h3>{item1.name}</h3><h6>{item1.last}</h6></div><div className="time" ><h3>{item1.time}</h3></div></div>)
  })
  return (
    <> 
      <main id="mainchat">
        <Left/>
        <div className="namestext1">محادثات</div>
      <div className="viewchat">
        <div className="pub3"><img src="src/assets/pub/pub.png"/></div>
        <div class="chat">
        
        
        <div class="chat-block">
          <div class="cell">
            <div class="card2" > <div className="profillimg">
              <img class="photo1" /><div className="online"></div></div> <div className="carddat"><h6>خليل عمك</h6><p>متصل الان</p></div><div className="time" ><h3></h3></div></div>
            <i className="bi bi-three-dots-vertical"></i>

          </div>
          <div class="theoffer">
            <div>
              <img src="src/assets/img/Good/1.jpg" class="logo"/>
              <div>
                <p>استفسر عن:</p>
                <br/>
                <p>BMW</p>
              </div>
              <i className="bi bi-caret-left"></i>
            </div>
          </div>
          <div class="page">
            <div class="page2">
              {chat}
              
            </div>
            
          </div>
          <div class="sent">
            <div class="bi bi-telegram" id="sentbutton" onClick={Speak} ></div>
            <input className="chatinput" type="text" placeholder="راسل..." value={write} onChange={(e) => setwrite(e.target.value)} />
            <label class="bi bi-plus" id="sentbutton" htmlfor="4" onClick={Speak} ><input type="file" className="addimg" id="4" value={img} onChange={(e)=>{setimg(e.target.value)}}></input></label>
            
          </div>
        </div>
        <div class="names">
          <div className="namestext"><span>رسائلي</span><i className="bi bi-pencil-square"></i></div>
          <div className="divfill" ><input className="fillnames" placeholder="ابحث عن محادثة..." /><i className="bi bi-search"></i></div>
          
          <div className="calldiv"  >
            <div className="calldiv2">
              {call}
            </div>
          </div>
          
        </div>

        
    </div>
      </div>
      </main>


    </>
    )
}
