import headerlogo from "../assets/img/header-logo.png.webp";
import {NavLink, Link } from "react-router-dom";
import {AiOutlineSearch,AiOutlineUser,AiOutlineHeart} from "react-icons/ai"
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
              <li className="shop"> <NavLink to="/shop">SHOP</NavLink>
              <ul className="shop-menu">
                <li><NavLink to="">SHOP CATEGORY</NavLink></li>
                <li><NavLink to="">PRODUCT DETAILS</NavLink></li>
                <li><NavLink to="">PRODUCT CHECKOUT</NavLink></li>
                <li><NavLink to="">SHOPPING CART</NavLink></li>
              </ul>
              </li>
              <li className="blog"><NavLink to="">BLOG</NavLink>
              <ul className="blog-menu">
                <li><NavLink to="">BLOG</NavLink></li>
                <li><NavLink to="">BLOG DETAILS</NavLink></li>
              </ul>
              </li>
              <li className="page"> <NavLink to="/pages">PAGES</NavLink>
              <ul className="page-menu">
                <li><NavLink to="">TRACKING</NavLink></li>
                <li><NavLink to="">ELEMENTS</NavLink></li>
              </ul>
              </li>
              <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
           </nav>
           <div className="icon-nav">
              <ul>
                <li><Link to=""><AiOutlineSearch/></Link></li>
                <li><Link to=""><SlBasket/></Link></li>
                <li><Link to=""><AiOutlineUser/></Link></li>
                <li><Link to=""><AiOutlineHeart/></Link></li>
              </ul>
           </div>

         </div>
      </div>
    </header>
  )
}

export default Header