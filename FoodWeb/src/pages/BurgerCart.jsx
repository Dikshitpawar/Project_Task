import "../styles/BurgerCartStyle.css"
import burger1 from "../assets/menu/burger-11.jpg"
import burger2 from "../assets/menu/burger-12.jpg"
import burger3 from "../assets/menu/burger-13.jpg"
import burger4 from "../assets/menu/burger-14.jpg"
import burger5 from "../assets/menu/burger-15.jpg"
import burger6 from "../assets/menu/burger-16.jpg"
import burger7 from "../assets/menu/burger-17.jpg"
import burger8 from "../assets/menu/burger-18.jpg"


const BurgerCart = () => {
 const burgers = [
    {
    image:burger1,
    name : "Crispy Chicken",
    desc :"Chicken breast, chilli sauce, tomatoes, pickles, colesalw",
    price :"$99.15"
 },
 {
    image:burger2,
    name : "Crispy Chicken",
    desc :"Chicken breast, chilli sauce, tomatoes, pickles, colesalw",
    price :"$99.15"
 },
 {
    image:burger3,
    name : "Crispy Chicken",
    desc :"Chicken breast, chilli sauce, tomatoes, pickles, colesalw",
    price :"$99.15"
 },
 {
    image:burger4,
    name : "Crispy Chicken",
    desc :"Chicken breast, chilli sauce, tomatoes, pickles, colesalw",
    price :"$99.15"
 },
 {
    image:burger5,
    name : "Crispy Chicken",
    desc :"Chicken breast, chilli sauce, tomatoes, pickles, colesalw",
    price :"$99.15"
 },
 {
    image:burger6,
    name : "Crispy Chicken",
    desc :"Chicken breast, chilli sauce, tomatoes, pickles, colesalw",
    price :"$99.15"
 },
 {
    image:burger7,
    name : "Crispy Chicken",
    desc :"Chicken breast, chilli sauce, tomatoes, pickles, colesalw",
    price :"$99.15"
 },
 {
    image:burger8,
    name : "Crispy Chicken",
    desc :"Chicken breast, chilli sauce, tomatoes, pickles, colesalw",
    price :"$99.15"
 }
]

const burgerrender = burgers.map((burger,idx)=>{
    return (
        <div key={idx}>
        <div className="burg">
            <img src={burger.image} alt="" />
            <h2>{burger.name}</h2>
            <p>{burger.desc}</p>
            <button>{burger.price}</button>
        </div>
        </div>
    )
})

  return (
    <div className="burgercart">
        {burgerrender}

    </div>
  )
}

export default BurgerCart