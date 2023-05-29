import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import PageTitle from "../components/PageTitle";
import {useState,useEffect} from "react"
import { Link } from "react-router-dom";
interface Product {
  _id: number;
  title: string;
  price: number;
  oldPrice:number;
  category:string;
  quantity: number;
  image:string;
  
}

const GiftCard = () => {
  const productData= useSelector((state:{ eiser: { productData: Product[] } })=>state.eiser.productData)
  const [totalAmt,setTotalAmt]=useState("")
  useEffect(()=>{
let price= 0;
productData.map((item)=>{
price += item.price * item.quantity;
return price
});
setTotalAmt(price.toFixed(2).toString())
  },[productData])
  return (
    <div>
      <PageTitle text="Cart" />
     <div className="gift-card-content">
     <div className="container" style={{display:"flex"}}>
      <CartItem/>
      <div className="product-total">
        <h2>Cart totals</h2>
        <p>Subtotal:{" "}
        <span>$ {totalAmt}</span>
        </p>
        <p>
          Shipping:{"  "}
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ex.
          </span>
        </p>
        <p>
          
          Total:{"  "} <span>$ {totalAmt}</span>
        </p>
        <Link to="/register" className="green-btn">PROCEED CHECKOUT</Link>
      </div>
      </div>
     </div>
    </div>
  )
}

export default GiftCard