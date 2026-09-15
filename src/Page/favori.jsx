import { useState } from 'react'
import Left from '../add/left'
import '../Pagecss/favori.css'
export default
function Favori() {
  let favs=[
    {titre:"honda",src:"",model:"mijj",km:"100.000km",mazot:"Diesal",control:"auto",place:"El-Elma",price:"100,000DZ"},
    {titre:"honda",src:"",model:"mijj",km:"100.000km",mazot:"Diesal",control:"auto",place:"El-Elma",price:"100,000DZ"}
  ]
  let fav=favs.map((item)=>{
    return(
      <div class="favourit">
          <img src={item.src}/>
          <i class="bi bi-heart-fill"></i>
          <div class="">
          <h3 class="titre">{item.titre}</h3>
          <h3 class="model">{item.model}</h3>
          <span class="km">{item.km}</span>
          <span>.</span>
          <span class="mazot">{item.mazot}</span>
          <span>.</span>
          <span class="control">{item.control}</span>
          <span>.</span>
          <span class="place">{item.place}</span>
          <span class="price">{item.price}</span>
        </div>
      </div>)
  })
  return(
    <body>
      <main>
        <Left/>
        <div class="view">
          <div class="pub"></div>
          {fav}
        
        
        </div>
      </main>
    </body>
  )

  
}