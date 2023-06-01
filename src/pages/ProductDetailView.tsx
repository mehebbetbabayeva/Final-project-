import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { ToastContainer,toast } from "react-toastify";
import { ProductDetailProp } from "./ProductDetail";

type ProductDetailsViewProps = ProductDetailProp & {
    onClick:(baseQty:number)=>void
}
const ProductDetailView = ({title,price,category,description,image,onClick}:ProductDetailsViewProps) => {
  const [baseQty,setBaseQty]=useState(1)
  return (
    <div>
        <PageTitle text="Product Details"/>
        <div className="product-detail">
          <div className="container">
              <div className="product-detail-content">
                  <div className="detail-image">
                    <img src={image} alt="img" />
                  </div>
                  <div className="detail">
                      <h3>{title}</h3>
                      <span>${price}</span>
                      <h4>category:{category} </h4>
                      <p>{description}</p>
                      <div className="quentity">
                        <p>Quentity:</p>
                       <div className="btn-group">
                       <button onClick={()=>{if(baseQty>1) setBaseQty(baseQty-1)}}>-</button>
                        <span>{baseQty}</span>
                        <button onClick={()=>setBaseQty(baseQty+1)}>+</button>
                       </div>
                      </div>
                      <button className="green-btn" onClick={()=>{
                        onClick(baseQty)
                        toast.success(`${title} is added`)
                    }}>
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

export default ProductDetailView