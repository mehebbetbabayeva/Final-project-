import headerlogo from "../assets/img/header-logo.png.webp";
import {NavLink, Link } from "react-router-dom";
import {AiOutlineUser,AiOutlineHeart} from "react-icons/ai"
import {SlBasket} from "react-icons/sl";
const Header = () => {
  return (
    <header>
      <div className="container">
         <div className="header-content">
           <div className="header-logo">
            <Link to="/"  ><img src={headerlogo} alt="logo" /></Link>
           </div>
           <nav>
            <ul>
              <li><NavLink to="/"  style={isActive => ({
    color: isActive ? "#71cd14" : "black"
  })}>HOME</NavLink></li>
              <li className="shop"> <NavLink to="/shop-category">SHOP</NavLink>
              <ul className="shop-menu">
                <li><Link to="/shop-category">SHOP CATEGORY</Link></li>
                <li><Link to="/product-detail">PRODUCT DETAILS</Link></li>
                <li><Link to="/shopping-card">SHOPPING CART</Link></li>
              </ul>
              </li>
              <li className="blog"><NavLink to="">BLOG</NavLink>
              </li>
              <li className="page"> <NavLink to="/track-order">PAGES</NavLink>
      
              </li>
              <li><NavLink to="/contact-us">CONTACT</NavLink></li>
            </ul>
           </nav>
           <div className="icon-nav">
              <ul>
                <li><Link to="/basket"><SlBasket/></Link></li>
                <li><Link to="/login"><AiOutlineUser/></Link></li>
                <li><Link to=""><AiOutlineHeart/></Link></li>
              </ul>
           </div>

         </div>
      </div>
    </header>
  )
}

export default Header