import {AiOutlineEye,AiOutlineHeart} from "react-icons/ai"
import {SlBasket} from "react-icons/sl";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, addToFavorite } from "../redux/eiserSlice";


const ProductsCard = ({product}:any) => {
  const dispatch=useDispatch()
  const navigate= useNavigate();
  const _id=product.title;
  const idString=(_id:string)=>{
    return String(_id).toLocaleLowerCase().split(" ").join("");
  }
  const rootId=idString(_id);
  const handleDetails=()=>{
    navigate(`/product/${rootId}`,{
        state:{
            item:product,
        }
    })
  }

  return (
    <div className="product-card" >
      
       <img src={product.image} alt="card" />
       
        <h3>{product.title}</h3>
          <div className="card-price-group">
           <span className='price'>${product.price}</span> 
            <span className='oldprice'>${product.oldPrice}</span>
        </div>  
        <div className="card-hover">
            <i onClick={handleDetails}><AiOutlineEye/></i>
            <i  onClick={()=>dispatch(addToFavorite({
                _id:product._id,
                title:product.title,
                image:product.image,
                price:product.price,
                quantity:1,
                description:product.description,
            }))}><AiOutlineHeart/></i>
            <i onClick={()=>dispatch(addToCart({
                _id:product._id,
                title:product.title,
                image:product.image,
                price:product.price,
                quantity:1,
                description:product.description,
            }))
            }><SlBasket/></i>
        </div>
       
    </div>
  )
}

export default ProductsCard