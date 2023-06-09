import headerlogo from "../assets/img/header-logo.png.webp";
import {NavLink, Link  } from "react-router-dom";
import {AiOutlineUser,AiOutlineHeart} from "react-icons/ai"
import {SlBasket} from "react-icons/sl";
import {BiMenu} from "react-icons/bi";

import { MdClose} from "react-icons/md";
import { useState,useEffect } from 'react';
import { useSelector } from "react-redux";








const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (scrollPosition > 100) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  }, [scrollPosition]);
  //
   const productData = useSelector((state: any )=>state.eiser.productData);
   const favoriteData = useSelector((state: any)=>state.eiser.favoriteData);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleButtonClick = () => {   
       setIsMenuOpen(!isMenuOpen);
       
      }
      function handleMenuItemClick() {
        setIsMenuOpen(false);
      }
     const [pagesOpen, setIPagesOpen] = useState(false);
       const openPagesMenu =()=>{
         setIPagesOpen(!pagesOpen)
       }
  return (
    <>
    <header id="site-header" className={headerVisible ? 'visible' : ''} >
      <div className="container">
         <div className="header-content">
           <div className="header-logo">
            <Link to="/"  ><img src={headerlogo} alt="logo" /></Link>
           </div>
           <nav>
            
            <ul>
              <li ><NavLink to="/"   >HOME</NavLink></li>
              <li className="shop" > <NavLink to="">SHOP</NavLink>
              <ul className="shop-menu">
                <li ><Link to="/shopping-category" >SHOP CATEGORY</Link></li>
                <li ><Link to="/shopping-card" >SHOP CART</Link></li>
              </ul>
              </li>
              <li className="blog" ><NavLink to="/blog" >BLOG</NavLink>
              </li>
              <li className="page" > <NavLink to="/track-order">PAGES</NavLink>
      
              </li>
              <li ><NavLink to="/contact-us">CONTACT</NavLink></li>
            </ul>
            
           </nav>
           <div className="icon-nav">
              <ul>
                <li className="icon-nav-basket"><Link to="/basket"><SlBasket/>
                <span>{productData.length}</span>
                </Link></li>
                <li><Link to="/register"><AiOutlineUser/></Link></li>
                <li className="icon-nav-basket"><Link to="/favorite"><AiOutlineHeart/>
                <span>{favoriteData.length}</span>
                </Link></li>
              </ul>
           </div>
          
           
           <div className="header-btn" onClick={handleButtonClick}>
        {isMenuOpen ? (
          <MdClose/>
          
        ) : (
          <BiMenu/>
        )}
      </div>
           
          
         </div>
      </div>
     </header>
     {isMenuOpen && (
              
                <ul className="menu-open">
                  <li onClick={handleMenuItemClick}><NavLink to="/"  style={isActive => ({
        color: isActive ? "#71cd14" : "black"
      })}>HOME</NavLink></li>
                  <li className="shop" > <NavLink to="" onClick={openPagesMenu}>SHOP</NavLink>
                  {pagesOpen &&(
                  <ul className="shop-menu">
                   <li onClick={handleMenuItemClick}><Link to="/shopping-category">SHOP CATEGORY</Link></li>
                    <li onClick={handleMenuItemClick}><Link to="/shopping-card">SHOP CART</Link></li>
                  </ul>
                    )}
                  </li>
                  <li className="blog" onClick={handleMenuItemClick}><NavLink to="">BLOG</NavLink>
                  </li>
                  <li className="page" onClick={handleMenuItemClick}> <NavLink to="/track-order">PAGES</NavLink>
          
                  </li>
                  <li onClick={handleMenuItemClick}><NavLink to="/contact-us">CONTACT</NavLink></li>
                  <div className="icon-nav">
               <ul>
                 <li onClick={handleMenuItemClick} className="icon-nav-basket"><Link to="/basket"><SlBasket/>
                 <span>{productData.length}</span>
                 </Link></li>
                 <li onClick={handleMenuItemClick}><Link to="/register"><AiOutlineUser/></Link></li>
                 <li className="icon-nav-basket" onClick={handleMenuItemClick}><Link to="/favorite"><AiOutlineHeart/>
                 <span>{favoriteData.length}</span>
                 </Link></li>
               </ul>
            </div>
                </ul>
               
          
                  )}
    </>
  )
}

export default Header