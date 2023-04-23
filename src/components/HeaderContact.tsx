import { Link } from "react-router-dom";

const HeaderContact = () => {
  return (
    <header>
       <div className="container">
          <div className="header-content">
             <div className="header-content-item1">
              <a href="tel:+0125625235">PHONE: +01 256 25 235</a>
              <a href="mailto:INFO@EISER.COM">EMAIL: INFO@EISER.COM</a>
             </div>
             <div className="header-content-item2">
              <Link to="/gift-card">GIFT CARD</Link>
              <Link to="/track-order">TRACK ORDER</Link>
              <Link to="/contact-us">CONTACT US</Link>
             </div>
          </div>
       </div>
       
    </header>
  )
}

export default HeaderContact