import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io";
import card1 from "../assets/img/cart-1.jpg.webp";
import Button from "../components/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import TextField from '@mui/material/TextField';



 
const ProductPrice = () => {
  const [state, setState] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };
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
                    
                   </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ProductPrice