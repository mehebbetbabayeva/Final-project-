import {GrMoney} from "react-icons/gr";
import {BsTruck} from "react-icons/bs";
import {BiSupport} from "react-icons/bi";
import {MdPayment} from "react-icons/md";

const featuresData = [
    {
     icon:<GrMoney/>,
     header: "MONEY BACK GURANTEE",
     description:"Shall open divide a one"
    },
    {
        icon: <BsTruck/>,
        header: "FREE DELIVERY",
        description:"Shall open divide a one"
    },
    {
        icon:  <BiSupport/>,
        header: "ALWAY SUPPORT",
        description:"Shall open divide a one"
    },
    {
        icon:  <MdPayment/>,
        header: "SECURE PAYMENT",
        description:"Shall open divide a one"
    },

]
const Features = () => {
  return (
    <div className="features">
        <div className="container">
            <div className="features-content">
                {featuresData.map(({icon,header,description},index)=>(
                    <div className="features-card" key={index}>
                    <div className="card-icon">
                        {icon}
                    </div>
                    <h1>{header}</h1>
                    <h2>{description}</h2>                 
                    </div>
               ))}  
            </div>
        </div>
    </div>
  )
}

export default Features