
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ProductsCard from './ProductsCard';

const Product = ({products}:any) => {

 
  
  return (
  
        <div className="card-title">
         <div className="container">
            <div className="card-content"  >
              {products.map((item:any)=>(
                <ProductsCard key={item._id} product={item}/>
               
              ))}
            
            </div>
         </div>
        </div>
   
  )
}

export default Product