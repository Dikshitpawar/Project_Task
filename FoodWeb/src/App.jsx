import Header from "../src/pages/Header"
import Contact from "./assets/parallax/Contact"
import Nav from "./components/Nav"
import About from "./pages/About"
import BlogSection from "./pages/BlogSection"
import Brand from "./pages/Brand"
import MenuSection from "./pages/MenuSection"
import ParallexEffect from "./pages/ParallexEffect"
import Reviews from "./pages/Reviews"
import Shop from "./pages/Shop"
import "./styles/AppStyle.css"


const App = () => {
  return (
    <div className="web">
      <Nav />
      <Header />
      <About />
      <MenuSection />
      <BlogSection />
      <ParallexEffect />
      <Shop />
      <Brand />
      <Reviews />
      <Contact />
    </div>
  )
}

export default App