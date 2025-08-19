import burger from "../assets/hero/hero-2.png"
import "../styles/HeaderStyle.css"

const Header = () => {

  return (
    <>
    
    <div className="header">
        <div className="burger-img">
            <img src={burger} alt="" />
        </div>
        <div className="desc">
            <h1><span>NEW</span> BURGER</h1>
            <h2>WITH ONION</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ratione harum error et eligendi nisi, sint voluptates ab velit. Animi!</p>
            <button className="order-btn">ORDER NOW</button>
        </div>
    </div>
    <div className="burger-price">
        <h3>ONLY</h3>
        <h1>$6.99</h1>
    </div>

    </>
  )
}

export default Header