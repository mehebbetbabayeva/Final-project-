import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io";
import card1 from "../assets/img/cart-1.jpg.webp";
import Button from "../components/Button";
 
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
                      <td></td>
                      <td></td>
                      <td >
                       <div className="coupon-code">
                       <input type="text" placeholder="Coupon Code"/>
                       <Button text="APPLY"/>
                       <button className="close-coupon">CLOSE COUPON</button>
                       </div>
                      </td>
                     </tr>
                     <tr>
                      <td></td>
                      <td></td>
                      <td><h5>Subtotal</h5></td>
                      <td><h5>$210.00</h5></td>
                     </tr>
                     <tr>
                      <td></td>
                      <td></td>
                      <td><h5>Shipping</h5></td>
                      <td className="shopping-area">
                          <form action="">
                           <span>
                            <label htmlFor="">Flat Rate: $5.00</label>
                            <input type="radio" name="price" id="" />
                           </span>
                           <span>
                            <label htmlFor="">Free Shipping</label>
                            <input type="radio" name="price" id="" />
                           </span>
                           <span>
                            <label htmlFor="">Flat Rate: $10.00</label>
                            <input type="radio" name="price" id="" />
                           </span>
                           <span>
                            <label htmlFor="">Local Delivery: $2.00</label>
                            <input type="radio" name="price" id="" />
                           </span>
                           <select name="country"  >
                           <option value="">Select a State</option> 
                           <option value="Azerbaijan">Azerbaijan</option>
                           <option value="Turkey">Turkey</option>
                           <option value="Pakistan">Pakistan</option>
                           </select>
                          </form>
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