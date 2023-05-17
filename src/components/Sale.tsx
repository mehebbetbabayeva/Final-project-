import offer from "../assets/img/offer-bg.png.webp";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <div className="sale">
        <img src={offer} alt="offer-bg" />
        <div className="sale-title">
            <h2>ALL MEN’S COLLECTION</h2>
            <h1>50% OFF</h1>
            <Link to="/login" className="green-btn">DISCOVER NOW</Link>
            <h3>Limited Time Offer</h3>
        </div>
    </div>
  )
}

export default Sale