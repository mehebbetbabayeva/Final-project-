import PageTitle from "../components/PageTitle";
import {Link} from "react-router-dom";
import { useState } from 'react';
import { FormEvent  ,ChangeEvent } from 'react';
interface OrderData {
  order: string;
  orderemail: string;
}
const TrackOrder = () => {
  const [orderData, setOrderData] = useState<OrderData>({ order:'', orderemail: '' });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('orderData', JSON.stringify(orderData));
    setOrderData({ order:'', orderemail: '' });
  };
 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
 
  };

  return (
    <>
     <PageTitle text="Order Tracking" />
     <div className="track">
    <div className="container">
      <form className="track-content"   onSubmit={handleSubmit}>
        <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
        <input type="text" placeholder="Order ID" name="order" value={orderData.order} onChange={handleChange}/>
        <input type="email" placeholder="Billing Email Address" name="orderemail" value={orderData.orderemail} onChange={handleChange} />
        <button className="green-btn">TRACK ORDER</button>
      </form>
    </div>
     </div>
     </>
  )
}

export default TrackOrder