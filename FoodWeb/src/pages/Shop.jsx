import "../styles/ShopStyle.css"
import appstore from "../assets/shop/appstore.png"
import playstore from "../assets/shop/googleplay.png"
import eshop from "../assets/shop/e-shop.png"


const Shop = () => {
  return (
    <div className="shop">
        <div className="left">
            <h1>DOWNLOAD MOBILE APP AND</h1>
            <h1 className="h1">SAVE UP TO 20%</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Sit, nam. Lorem ipsum dolor sit amet.</p>
            <div className="btn">
                <img src={appstore} alt="" />
                <img src={playstore} alt="" />
            </div>
        </div>
        <div className="right">
            <img src={eshop} alt="" />
        </div>

    </div>
  )
}

export default Shop