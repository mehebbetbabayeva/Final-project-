import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io";
import card1 from "../assets/img/cart-1.jpg.webp";

 
const ProductPrice = () => {
  return (
    <div className="product-price">
        <div className="container">
            <div className="product-price-content">
                <table>
                     <thead>
                     <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                     </tr>
                     </thead>
                   <tbody>
                   <tr>
                      <td>
                        <div className="product-description">
                        <img src={card1} alt="img" />
                        <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </td>
                      <td className="price">
                        
                        $<span>360.00</span>
                        
                      </td>
                      <td className="counter-content">
                        <div className="counter">
                          <span>1</span>
                          <div className="btn-group">
                            <button className="increment"><IoIosArrowUp/></button>
                            <button className="decrement"><IoIosArrowDown/></button>
                          </div>
                        </div>
                      </td>
                      <td className="total">
                       
                        $<span>360.00</span>
                        
                      </td>
                     </tr>
                     <tr>
                      <td>
                        <div className="product-description">
                        <img src={card1} alt="img" />
                        <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </td>
                      <td className="price">
                        
                        $<span>360.00</span>
                        
                      </td>
                      <td className="counter-content">
                        <div className="counter">
                          <span>1</span>
                          <div className="btn-group">
                            <button className="increment"><IoIosArrowUp/></button>
                            <button className="decrement"><IoIosArrowDown/></button>
                          </div>
                        </div>
                      </td>
                      <td className="total">
                       
                        $<span>360.00</span>
                        
                      </td>
                     </tr>

                     <tr>
                      <td>
                        <button className="update-cart">UPDATE CART</button>
                      </td>
                      <td >
                       <div className="coupon-code">
                       <input type="text" placeholder="Coupon Code" />
                       </div>
                      </td>
                      
                     
                     </tr>
                   </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ProductPrice