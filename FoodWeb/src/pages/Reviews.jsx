import "../styles/ReviewsStyle.css"
import img1 from "../assets/blog/review-author-1.jpg"
import img2 from "../assets/blog/review-author-2.jpg"
import img3 from "../assets/blog/review-author-3.jpg"
import img4 from "../assets/blog/review-author-5.jpg"
import { useState } from "react"


const Reviews = () => {

const author = [
    {
        img:img1,
        review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus fugit sed, necessitatibus iure earum illum est! Corrupti, iste possimus?",
        name : "BY AMELIE NEWLOVE"
    },
    {
        img:img2,
        review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus fugit sed, necessitatibus iure earum illum est! Corrupti, iste possimus?",
        name : "BY JOLLY PETERSON"
    },
    {
        img:img3,
        review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus fugit sed, necessitatibus iure earum illum est! Corrupti, iste possimus?",
        name : "BY JOHN DOE"
    },
    {
        img:img4,
        review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus fugit sed, necessitatibus iure earum illum est! Corrupti, iste possimus?",
        name : "BY ALICE PARKLE"
    }
]

const [idx, setidx] = useState(0);


const renderauhtor = (idx)=>{
      return(
        <div className="auth">
          <img src={author[idx].img} alt="" />
          <p>{author[idx].review}</p>
          <h1>{author[idx].name}</h1>
      </div>
      )
}


const nexthandler = ()=>{
  setidx(prev => (prev+1)%author.length)
  renderauhtor(idx)
}

const prevhandler = ()=>{
  setidx(prev => (prev-1+author.length)%author.length)
  renderauhtor(idx)
}



  return (
    <div className="container">
    <div className="review">
      <button onClick={nexthandler }>&lt;</button>
        {renderauhtor(idx)}
         <button onClick={prevhandler}>&gt;</button>
    </div>
    </div>
  )
}

export default Reviews