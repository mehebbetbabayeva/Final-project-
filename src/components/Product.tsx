
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
const Product = () => {
  return (
    <div>
        <div className="card-title">
         <div className="container">
            <div className="card-content">
            <Card sx={{ minWidth: 250 }}>
     
     <CardMedia
       component="img"
       height="194"
       image=""
       alt="Paella dish"
     />
     <CardContent>
       <Typography variant="body2" color="text.secondary">
         This 
       </Typography>
       <Typography variant="body2" color="text.secondary">
         <span>$250</span>
       </Typography>
     </CardContent>
     <CardActions disableSpacing>
       <IconButton aria-label="add to favorites">
         <FavoriteIcon />
       </IconButton>
       <IconButton aria-label="LocalGroceryStoreIcon">
      < LocalGroceryStoreIcon/>
       </IconButton>
       
     </CardActions>
   
            </Card>
            <Card sx={{ minWidth: 250 }}>
     
     <CardMedia
       component="img"
       height="194"
       image=""
       alt="Paella dish"
     />
     <CardContent>
       <Typography variant="body2" color="text.secondary">
         This 
       </Typography>
       <Typography variant="body2" color="text.secondary">
         <span>$250</span>
       </Typography>
     </CardContent>
     <CardActions disableSpacing>
       <IconButton aria-label="add to favorites">
         <FavoriteIcon />
       </IconButton>
       <IconButton aria-label="LocalGroceryStoreIcon">
      < LocalGroceryStoreIcon/>
       </IconButton>
       
     </CardActions>
   
            </Card>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Product