import {Link} from "react-router-dom";
import {FaFacebookF,FaTwitter,FaBehance} from "react-icons/fa";
import {BiColor} from "react-icons/bi";
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-features">
                    <div className="footer-card-group">
                    <div className="footer-card">
                        <h1>Top Products</h1>
                        <ul>
                            <li><Link to="">Managed Website</Link></li>
                            <li><Link to="">Manage Reputation</Link></li>
                            <li><Link to="">Power Tools</Link></li>
                            <li><Link to="">Marketing Service</Link></li>
                        </ul>
                    </div>
                    <div className="footer-card">
                        <h1>Quick Links</h1>
                        <ul>
                            <li><Link to="">Jobs</Link></li>
                            <li><Link to="">Brand Assets</Link></li>
                            <li><Link to="">Investor Relations</Link></li>
                            <li><Link to="">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="footer-card">
                        <h1>Features</h1>
                        <ul>
                            <li><Link to="">Jobs</Link></li>
                            <li><Link to="">Brand Assets</Link></li>
                            <li><Link to="">Investor Relations</Link></li>
                            <li><Link to="">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="footer-card">
                        <h1>Resources</h1>
                        <ul>
                            <li><Link to="">Guides</Link></li>
                            <li><Link to="">Research</Link></li>
                            <li><Link to="">Experts</Link></li>
                            <li><Link to="">Agencies</Link></li>
                        </ul>
                    </div>
                    </div>                   
                    <div className="footer-email">
                        <h1>Newsletter</h1>
                         <h2>You can trust us. we only send promo offers</h2>
                         <form action="">
                            <input type="email" placeholder="Your Email Address" />
                            <button>SUBSCRIBE</button>
                         </form>
                    </div>
                </div>
                <div className="footer-social">
                    <p>Copyright ©2023 All rights reserved | This template is made with  by <span>Colorlib</span></p>
                    <div className="social-group">
                          <i><FaFacebookF/></i> 
                          <i><FaTwitter/></i>
                          <i> <BiColor/></i>
                          <i> <FaBehance/></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer