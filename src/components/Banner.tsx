import banner from "../assets/img/banner-bg.jpg.webp"
import { Link } from "react-router-dom"

const Banner = () => {
 
  return (
    <div className='banner'>
        <img src={banner} alt="banner" />
        <div className="banner-title">
            <h1>MEN COLLECTION</h1>
            <h2>Show<span> Your Personal </span>Style</h2>
            <h3>Fowl saw dry which a above together place.</h3>
             <Link to="/login" className="green-btn">VIEW COLLECTION</Link>
        </div>
    </div>
  )
}

export default Banner