import "../styles/Brandstyle.css"
import img1 from "../assets/brands/brand-11.png"
import img2 from "../assets/brands/brand-12.png"
import img3 from "../assets/brands/brand-13.png"
import img4 from "../assets/brands/brand-14.png"
import img5 from "../assets/brands/brand-15.png"
import img6 from "../assets/brands/brand-16.png"
import img7 from "../assets/brands/brand-17.png"
import img8 from "../assets/brands/brand-18.png"


const images = [img1,img2,img3,img4,img5,img6,img7,img8, img1,img2,img3,img4,img5,img6,img7,img8];




const Brand = () => {
  return (
    <div className="brands">
        <div className="img-tracker">
            {images.map((img , idx)=>(
                <div className="logo" key={idx}>
                    <img src={img} alt="" />
                </div>
            ))}
        </div>

    </div>
  )
}

export default Brand