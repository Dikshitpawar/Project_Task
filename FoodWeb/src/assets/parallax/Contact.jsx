import "../../styles/Contactstyle.css"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"


const Contact = () => {
  return (
    <div className="contact">
        <div className="in">
            <h3>WE GUARANTEE</h3>
        <h1>30 MINUTES DELIVERY!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illo nostrum dolore consequuntur sequi expedita.</p>
        <button>Call: 999-888-7777</button>
        </div>
        <div className="footer">
            <div className="f1">
                <h1>LOCATION</h1>
                <p>5505, Waterford District </p>
                <p>Dr. Miami, FL 33126</p>
                <p>United States</p>
            </div>
            <div className="f2">
                <h1>WORKING HOURS</h1>
                <p>Mon-Fri : 9:00AM to 10:00PM</p>
                <p>Saturday: 10:00AM to 8:30PM</p>
                <p>Sunday: 12:00PM to 5:00PM</p>
            </div>
            <div className="f3">
                <h1>ORDER NOW</h1>
                <p>Here's Our Contact number</p>
                <p className="cont">999-888-7777</p>
            </div>
            <div className="f4">
                <h1>FOLLOW US</h1>
                <p>Our Social meda accounts</p>
                 <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebook size={30} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter size={30} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram size={30} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedin size={30} />
      </a>
    </div>
            </div>
        </div>
        <div className="down">
            <p>&copy; 2025 PAWARDIKSHIT All Rights Reserved | About us | Terms of use | Privacy Policy</p>
        </div>
    </div>
  )
}

export default Contact