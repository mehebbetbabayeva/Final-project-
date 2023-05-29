
import { useDispatch, useSelector } from 'react-redux';
import {GiCancel} from "react-icons/gi";
import {decrementQuantity, deleteCart,resetCart,increamentQuantity} from "../redux/eiserSlice"
import { Link } from 'react-router-dom';

const CartItem = () => {
  
  const dispatch= useDispatch();
  const productData = useSelector((state:any)=>state.eiser.productData);
  return (
    <div className='card-item-content'>
        {productData.map((item:any)=>(
           <div key={item._id} >
              <div className='product-content'>
                <GiCancel className='cancel-icon' onClick={()=>dispatch(deleteCart(item._id))}/>
                <img src={item.image} alt="img" />
               <div className='cart-item-content'>
               <div className="product-card-title">
                  <h2>{item.title}</h2>
                  <p>${item.price}</p>
                </div>
                <div className="quantity">
                     
                       <div className="btn-group">
                       <button onClick={()=>dispatch(decrementQuantity({
                        _id:item._id,
                        title:item.title,
                        image:item.image,
                        price:item.price,
                        quantity:1,
                        description:item.description,
                       }))}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={()=>dispatch(increamentQuantity({
                        _id:item._id,
                        title:item.title,
                        image:item.image,
                        price:item.price,
                        quantity:1,
                        description:item.description,
                       }))}>+</button>
                       </div>
                       
                </div>
                <p>${item.quantity * item.price}</p>
               </div>
              </div>

           </div>
        ))}
        <button className="green-btn" onClick={()=>dispatch(resetCart())}>RESET CARD</button>
        <Link to="/">Go shopping</Link>
    </div>
  )
}

export default CartItem