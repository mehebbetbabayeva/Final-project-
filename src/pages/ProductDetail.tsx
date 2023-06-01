import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/eiserSlice";
import ProductDetailView from "./ProductDetailView";

export type ProductDetailProp={
  _id:string,
  image:string,
  title:string,
  description:string,
  price:string,
  category:string,
}
const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation()
  const details:ProductDetailProp=location.state.item
  const onAddToCardClickHandler=(baseQty:number)=>
  dispatch(addToCart({
    _id:details._id,
    title:details.title,
    image:details.image,
    price:details.price,
    quantity:baseQty,
    description:details.description,
  }))
 
  return (
  <ProductDetailView {...details} onClick={onAddToCardClickHandler} />
  )
}

export default ProductDetail