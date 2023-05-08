import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io";

const ProductPrice = () => {
  return (
    <div className="product-price">
        <div className="container">
            <div className="product-price-content">
                <table>
                <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>

                <tr>
    <td>
          <img src="" alt="" />
          <p>Minimalistic shop for multipurpose use</p>
    </td>
    <td>$360.00</td>
    <td>
        <div className="counter">
            <span></span>
            <div className="btn-group">
                <button className="increment"><IoIosArrowUp/></button>
                <button className="decrement"><IoIosArrowDown/></button>
            </div>
        </div>
    </td>
    <td>$360.00</td>
  </tr>
  
                </table>
            </div>
        </div>
    </div>
  )
}

export default ProductPrice