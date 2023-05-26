import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/eiserSlice";
import { ToastContainer,toast } from "react-toastify";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const [details,setDetails] = useState({});
  let [baseQty,setBaseQty]=useState(1);
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
                       <button onClick={()=>setBaseQty(baseQty===1 ? baseQty=1:baseQty-1)}>-</button>
                        <span>{baseQty}</span>
                        <button onClick={()=>setBaseQty(baseQty+1)}>+</button>
                       </div>
                      </div>
                      <button className="green-btn" onClick={()=>dispatch(addToCart({
                        _id:location.state.item._id,
                        title:location.state.item.title,
                        image:location.state.item.image,
                        price:location.state.item.price,
                        quantity:baseQty,
                        description:location.state.item.description,
                      }))
                      & toast.success(`${location.state.item.title} is added`)
                      
                      }>
                                 ADD TO CART 
                     </button>
                  </div>
              </div>
          </div>
        </div>
        <ToastContainer
         position="top-left"
         autoClose={2000}
         hideProgressBar={false}
         newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
   </div>
  )
}

export default ProductDetail