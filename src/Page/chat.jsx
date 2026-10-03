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
  let chat=chats.map((item)=>{
    return(<div class="bubble"> <h3>{item.name}</h3></div>)
  })
  let calls=[
    {id:1,name:"ahmed",src:3},{id:2,name:"ahmed",src:3},{id:3,name:"ahmed",src:3},{id:4,name:"ahmed",src:3},{id:5,name:"ahmed",src:3},{id:6,name:"ahmed",src:3},{id:7,name:"ahmed",src:3}]
  let [page,setpage]=useState()
  let call=calls.map((item1)=>{
    return(<div class="card" onClick={()=>{setpage(item1.id)}} style={{background: page===item1.id? "rgba(255,240,0,0.2)" : "white"}}> <div className="profillimg"><img class="photo1" src="src/assets/img/car/2.png"/><i className="bi bi-circle-fill"></i></div> <h3>{item1.name}</h3></div>)
  })
  return (
    <> 
      <main>
        <Left/>

      <div class="chat">
        
        
        
        <div class="chat-block">
          <div class="cell">
            <div></div>
          </div>
          <div class="theoffer">
            <div>
              <img src="src/assets/img/Good/1.jpg" class="logo"/>
              <div>
                <p>استفسر عن:</p>
                <br/>
                <p>BMW</p>
              </div>
            </div>
          </div>
          <div class="page">
            <div class="page2">
              {chat}
              
            </div>
            
          </div>
          <div class="sent">
            <div class="sent-button" onClick={Speak} ><i class="bi bi-telegram"></i></div>
            <input className="chatinput" type="text" placeholder="راسل..." value={write} onChange={(e) => setwrite(e.target.value)} />

            
          </div>
        </div>
        <div class="names">
          <div className="namestext">محادثات</div>
          <div className="divfill" ><input className="fillnames" placeholder="ابحث عن محادثة..." ></input></div>
          
          <div className="calldiv"  >
            <div className="calldiv2">
              {call}
            </div>
          </div>
          
        </div>

        
    </div>
      </main>


    </>
    )
}
