export default function Model() {
  let models=[
    {name:"MINI",num:200,img:"src/assets/img/car/MINI.png"},
    {name:"VAN",num:200,img:"src/assets/img/car/VAN.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    {name:"SUV",num:200,img:"src/assets/img/car/SUV.png"},
    ]
  let model=models.map((item)=>{
    return (<div class="car"><img src={item.img} alt="car" /><p>حوالي {item.num} اعلان</p></div>)
  })
}
