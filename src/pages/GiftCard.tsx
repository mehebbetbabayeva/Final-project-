import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import PageTitle from "../components/PageTitle";
import {useState,useEffect} from "react"


const GiftCard = () => {
  const productData= useSelector((state:any)=>state.eiser.productData)
  const [totalAmt,setTotalAmt]=useState("")
  useEffect(()=>{
let price= 0;
productData.map((item:any)=>{
price += item.price * item.quantity;
return price
});
setTotalAmt(price.toFixed(2).toString())
  },[productData])
  return (
    <>
      <PageTitle text="Cart" />
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
        <button className="green-btn">PROCEED CHECKOUT</button>
      </div>
      </div>
    </>
  )
}

export default GiftCard