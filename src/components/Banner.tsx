import banner from "../assets/img/banner-bg.jpg.webp"
import Button from "./Button";
const Banner = () => {
  return (
    <div className='banner'>
        <img src={banner} alt="banner" />
        <div className="banner-title">
            <h1>MEN COLLECTION</h1>
            <h2>Show<span> Your Personal </span>Style</h2>
            <h3>Fowl saw dry which a above together place.</h3>
             <Button text="VIEW COLLECTION"/>
        </div>
    </div>
  )
}

export default Banner