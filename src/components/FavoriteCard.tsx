import { useDispatch, useSelector } from 'react-redux';
import {GiCancel} from "react-icons/gi";
import {deleteFavoriteCart,resetFavoriteCart} from "../redux/eiserSlice"
import { Link } from 'react-router-dom';

const FavoriteCard = () => {
    const dispatch= useDispatch();
    const favoriteData = useSelector((state:any)=>state.eiser.favoriteData);
  return (
    <div className='card-item-content' >
    {favoriteData.map((item:any)=>(
       <div key={item._id} >
          <div className='product-content'>
            <GiCancel className='cancel-icon' onClick={()=>dispatch(deleteFavoriteCart(item._id))}/>
            <img src={item.image} alt="img" />
            <div className="product-card-title">
              <h2>{item.title}</h2>
              <p>${item.price}</p>
            </div>
           
           
          </div>

       </div>
    ))}
    <button className="green-btn" onClick={()=>dispatch(resetFavoriteCart())}>RESET CARD</button>
    <Link to="/">Go shopping</Link>
</div>
  )
}

export default FavoriteCard