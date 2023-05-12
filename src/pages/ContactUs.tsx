import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import {AiOutlineHome} from "react-icons/ai";
import {BsPhone  , BsEnvelopeAt} from "react-icons/bs";
const ContactUs = () => {
  return (
    <>
      <PageTitle text="Contact Us"/>
      <div className="contact-us">
        <div className="container">
          <div className="contact-us-content">
            <form action="">
              <h1>Get in Touch</h1>
              <textarea name="" id="" placeholder="Enter Message"></textarea>
              <div className="input-grp">
                <input type="text" placeholder="Enter your name"/>
                <input type="email" placeholder="Enter your email"/>
              </div>
              <input type="text" placeholder="Enter your subject"/>
              <Button text="SEND MESSAGE"/>
            </form>
            <div className="contact">
                <div>
                 <i> <AiOutlineHome/></i>
                  <span>
                    <h5>Buttonwood, California.</h5>
                    <h6>Rosemead, CA 91770</h6>
                  </span>
                </div>
                <div>
                 <i> <BsPhone/></i>
                  <span>
                    <a href="tel:00(440)9865562">00 (440) 9865 562</a>
                    <h6>Mon to Fri 9am to 6pm</h6>
                  </span>
                </div>
                <div>
                 <i><BsEnvelopeAt/></i> 
                  <span>
                    <a href="emailto:support@colorlib.com">support@colorlib.com</a>
                    <h6>Send us your query anytime!</h6>
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs