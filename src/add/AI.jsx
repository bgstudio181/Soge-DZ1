import { useState } from 'react'
import '../Pagecss/chat.css'
import Left from './left'

export default
function AI() {
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
  let calls=[{name:"ahmed",src:3},{name:"ahmed",src:3},{name:"ahmed",src:3},{name:"ahmed",src:3},{name:"ahmed",src:3},{name:"ahmed",src:3},{name:"ahmed",src:3}]
  let call=calls.map((item1)=>{
    return(<div class="card"> <img class="photo1" src="src/assets/img/car/2.png"/> <h3>{item1.name}</h3></div>)
  })
  return (
    <> 
      <main>

      <div class="chatAI">        
        <div class="chat-blockAI">
          <div class="pageAI">
            <div class="page2AI">
              {chat}
              
            </div>
            
          </div>
          <div class="sent">
            <div class="sent-button" onClick={Speak} ><i class="bi bi-telegram"></i></div>
            <input className="chatinput" type="text" placeholder="راسل..." value={write} onChange={(e) => setwrite(e.target.value)} />

            
          </div>
        </div>


        
      </div>

      </main>


    </>
    )
}
