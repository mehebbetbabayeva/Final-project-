import offer from "../assets/img/offer-bg.png.webp"
import Button from "./Button"

const Sale = () => {
  return (
    <div className="sale">
        <img src={offer} alt="offer-bg" />
        <div className="sale-title">
            <h2>ALL MEN’S COLLECTION</h2>
            <h1>50% OFF</h1>
            <Button text="DISCOVER NOW"/>
            <h3>Limited Time Offer</h3>
        </div>
    </div>
  )
}

export default Sale