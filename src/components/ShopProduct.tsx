import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const formstyle={
    border:"1px solid #eeeeee",
    padding:"20px",
    width:"300px"
}
const categories={
    fontSize:"20px",
    borderBottom:"1px solid #71cd14",
    color:"#2a2a2a",
    paddingBottom:"10px"
}



 
const ShopProduct = () => {
 



  return (
    <div className="shop-product">
        <div className="container">
            <div className="shop-product-content">
                <div className="shop-product-radio-grp">
                <FormControl style={formstyle}>
      <FormLabel id="demo-radio-buttons-group-label" style={categories}>Categories</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Browse Categories"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="Man" control={<Radio />} label="Man" />
        <FormControlLabel value="Kids" control={<Radio />} label="Kids" />
      </RadioGroup>
                </FormControl>
                <FormControl style={formstyle}>
      <FormLabel id="demo-radio-buttons-group-label" style={categories}>Size Filter</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="size filter"
        name="radio-buttons-group"
      >
        <FormControlLabel value="xs" control={<Radio />} label="XS" />
        <FormControlLabel value="s" control={<Radio />} label="S" />
        <FormControlLabel value="m" control={<Radio />} label="M" />
        <FormControlLabel value="l" control={<Radio />} label="L" />
        <FormControlLabel value="xl" control={<Radio />} label="XL" />
        <FormControlLabel value="xxl" control={<Radio />} label="XXL" />
      </RadioGroup>
                </FormControl>
                <FormControl style={formstyle}>
      <FormLabel id="demo-radio-buttons-group-label" style={categories}>Color Filter</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Color Filter"
        name="radio-buttons-group"
      >
        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
        <FormControlLabel value="gray" control={<Radio />} label="Gray" />
        <FormControlLabel value="black" control={<Radio />} label="Black" />
        <FormControlLabel value="red" control={<Radio />} label="Red" />
        <FormControlLabel value="pink" control={<Radio />} label="Pink" />
        <FormControlLabel value="yellow" control={<Radio />} label="Yellow" />
      </RadioGroup>
                </FormControl>
                
                </div>
                <div className="shop-product-cards">
                <Card sx={{ maxWidth: 250 }}>
     
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

export default ShopProduct