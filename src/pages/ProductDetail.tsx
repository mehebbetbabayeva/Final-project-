import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
const ProductDetail = () => {
  const [details,setDetails] = useState({});
  const location = useLocation()
  useEffect(()=>{
    setDetails(location.state.item)
  },[])
 
  return (
   <div>
        <PageTitle text="Product Details"/>
        <div className="product-detail">
          <div className="container">
              <div className="product-detail-content">
                  <div className="detail-image">
                    <img src={location.state.item.image} alt="img" />
                  </div>
                  <div className="detail">
                      <h3>{location.state.item.title}</h3>
                      <span>${location.state.item.price}</span>
                      <h4>category:{location.state.item.category} </h4>
                      <p>{location.state.item.description}</p>
                      <div className="quentity">
                        <p>Quentity:</p>
                       <div className="btn-group">
                       <button>-</button>
                        <span>{1}</span>
                        <button>+</button>
                       </div>
                      </div>
                      <Button text="ADD TO CART"/>
                  </div>
              </div>
          </div>
        </div>
   </div>
  )
}

export default ProductDetail