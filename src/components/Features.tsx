import {GrMoney} from "react-icons/gr";
import {BsTruck} from "react-icons/bs";
import {BiSupport} from "react-icons/bi";
import {MdPayment} from "react-icons/md";
const Features = () => {
  return (
    <div className="features">
        <div className="container">
            <div className="features-content">
                <div className="features-card">
                <div className="card-icon">
                    <GrMoney/>
                </div>
                <h1> MONEY BACK GURANTEE</h1>
                <h2>Shall open divide a one</h2>
                </div>
                <div className="features-card">
                <div className="card-icon">
                    <BsTruck/>
                </div>
                <h1>FREE DELIVERY</h1>
                <h2>Shall open divide a one</h2>
                </div>
                <div className="features-card">
                <div className="card-icon">
                    <BiSupport/>
                </div>
                <h1>ALWAY SUPPORT</h1>
                <h2>Shall open divide a one</h2>
                </div>
                <div className="features-card">
                <div className="card-icon">
                    <MdPayment/>
                </div>
                <h1>SECURE PAYMENT</h1>
                <h2>Shall open divide a one</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features