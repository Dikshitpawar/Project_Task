import "../styles/AboutStyle.css"
import about1 from "../assets/about/about-1.jpg"
import pizza from "../assets/about/pizza.png"
import salad from "../assets/about/salad.png"
import bike from "../assets/about/delivery-bike.png" 



const About = () => {


  return (
    <>
    <div className="about">
        <h1>THE BURGER TASTES BETTER WHEN <br /> YOU EAT IT WITH YOUR FAMILY</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit corrupti modi autem saepe nostrum, laboriosam reprehenderit. Nobis ipsa necessitatibus eligendi reiciendis veritatis ipsam voluptates nesciunt!</p>
        <button>EXPLORE FULL MENU</button>
        {/* <div className="del">
            <img src={about1} alt="" />
        </div> */}
         <div className="del">
            <div className="del-1 logo" >
                <img src={pizza} alt="" />
                <h2>ORIGINAL</h2>
                <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In excepturi ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nihil.</p>
            </div>
                 <div className="del-1 logo" >
                <img src={salad} alt="" />
                <h2>QUALITY FOODS</h2>
                <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In excepturi ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nihil.</p>
            </div>
             <div className="del-1 logo" >
                <img src={bike} alt="" />
                <h2>FASTEST DELIVERY</h2>
                <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In excepturi ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nihil.</p>
            </div>
            </div>

    </div>
    </>
  )
}

export default About