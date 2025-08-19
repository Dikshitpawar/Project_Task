import "../styles/BlogStyle.css"
import blog_img from "../assets/promotion/pro.png"


const BlogSection = () => {
  return (
    <div className="blog-section">
        <div className="blog">
            <img src={blog_img} alt="" />
        </div>
        <div className="blog-det">
            <h1>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis dolore repellendus earum nostrum, quidem quos adipisci odit exercitationem temporibus porro harum minima incidunt atque quia ducimus eos, sapiente, laboriosam fuga quo delectus omnis! Dolorum illum quibusdam quo repellendus nobis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima deserunt aut incidunt error doloremque nihil quisquam totam officiis necessitatibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus rem quod, earum repellendus officia iste repudiandae esse odio, numquam non, fugiat sunt harum voluptatum debitis maiores! Id, voluptatibus nobis.</p>
            <p><li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni quos nam accusantium quisquam numquam dolorum omnis velit autem dignissimos.</li></p>
            <p><li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni quos nam accusantium quisquam numquam dolorum omnis velit autem dignissimos.</li></p>
        </div>

    </div>
  )
}

export default BlogSection