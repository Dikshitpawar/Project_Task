import "../styles/MenuStyle.css"
import BurgerCart from "./BurgerCart"
import ad1 from "../assets/menu/ads-1.jpg"
import ad2 from "../assets/menu/ads-2.jpg"



const MenuSection = () => {
  return (
    <div className="menu">
    <div className="top">
    <h1>OUR CRAZY BURGERS</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit nesciunt ea vel ad ipsam placeat deleniti, sunt veniam sit? Lorem ipsum dolor sit amet.</p>
    </div>
    <BurgerCart />

     <div className="ads">
      <div className="ad1">
        <img src={ad1} alt="" />
        <div className="text">
          <h1>GET YOUR FREE</h1>
        <h1>CHEESE FRIES</h1>
        <button>LEARN MORE</button>
        </div>
      </div>
      <div className="ad2">
      <img src={ad2} alt="" />
      <div className="text1">
          <h1>GET YOUR FREE</h1>
        <h1>CHEESE FRIES</h1>
        <button>LEARN MORE</button>
        </div>
      </div>
     </div>
    </div>
   
  )
}

export default MenuSection