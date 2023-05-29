import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ShopProductCards from './ShopProductCards';
import { useEffect ,useState,ChangeEvent} from "react";
import { useLoaderData } from "react-router-dom";

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
  const [products,setProducts]= useState([])
  const data:any = useLoaderData()
  useEffect(()=>{
    setProducts(data.data)
  },[data])


  const [selectedCategory, setSelectedCategory] = useState("allCategory");
  const [selectedClothes, setSelectedClothes] = useState("allClothes");
  const [selectedColor, setSelectedColor] = useState("allColor");
    const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleClothesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedClothes(e.target.value);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };
const checkColorInTitle = (title: string, color: string): boolean => {
  const colors: { [key: string]: string[] } = {
    blue: ["blue","lightblue"],
    khakhi: ["khakhi"],
    black: ["black"],
    red: ["red"],
    pink: ["pink"],
    yellow: ["yellow"],
  };

  const colorKeys = Object.keys(colors);
  for (let i = 0; i < colorKeys.length; i++) {
    const key = colorKeys[i];
    const variations = colors[key];
    for (let j = 0; j < variations.length; j++) {
      if (title.toLowerCase().includes(variations[j])) {
        if (key === color.toLowerCase()) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  return false;
};

const checkClothesInTitle = (title: string, clothes: string): boolean => {
  const clotheses: { [key: string]: string[] } = {
    jacket: ["jacket"],
    tshirt: ["t-shirt"],
    jeans: ["jeans","jins"],
    velvet: ["velvet"],
    hoody: ["hoody"],
     tops: ["tops"],
  };

  const clothesKeys = Object.keys(clotheses);
  for (let i = 0; i < clothesKeys.length; i++) {
    const key = clothesKeys[i];
    const variations = clotheses[key];
    for (let j = 0; j < variations.length; j++) {
      if (title.toLowerCase().includes(variations[j])) {
        if (key === clothes.toLowerCase()) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  return false;
};

  const filteredProducts = products.filter((product:any) => {
    const categoryMatch =
      selectedCategory === "allCategory" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();
  const clothesMatch =
     selectedClothes === "allClothes" || checkClothesInTitle(product.title, selectedClothes);
    const colorMatch = selectedColor === "allColor" || checkColorInTitle(product.title, selectedColor);
    return categoryMatch && clothesMatch && colorMatch;
  });




  return (
    <div className="shop-product">
        <div className="container">
            <div className="shop-product-content">
                <div className="shop-product-radio-grp">
                <FormControl style={formstyle}>
      <FormLabel id="demo-radio-buttons-group-label" style={categories}>Categories</FormLabel>
      <RadioGroup
         aria-labelledby="category-label"
        defaultValue="Browse Categories"
        name="radio-buttons-group"
        value={selectedCategory}
        onChange={handleCategoryChange}

      
      
      >
        <FormControlLabel value="allCategory" control={<Radio />} label="All"  />
        <FormControlLabel value="women" control={<Radio />} label="Woman"  />
        <FormControlLabel value="men" control={<Radio />} label="Man"   />
        <FormControlLabel value="kids" control={<Radio />} label="Kids"   />
      </RadioGroup>
                </FormControl>
                <FormControl style={formstyle}>
      <FormLabel id="demo-radio-buttons-group-label" style={categories}>Clothes Filter</FormLabel>
      <RadioGroup
        aria-labelledby="clothes-label"
        defaultValue="clothes filter"
        name="radio-buttons-group"
        value={selectedClothes}
        onChange={handleClothesChange}

      >
        <FormControlLabel value="allClothes" control={<Radio />} label="All" />
        <FormControlLabel value="jacket" control={<Radio />} label="Jacket" />
        <FormControlLabel value="tshirt" control={<Radio />} label="T-shirt" />
        <FormControlLabel value="hoody" control={<Radio />} label="Hoody" />
        <FormControlLabel value="velvet" control={<Radio />} label="Velvet" />
        <FormControlLabel value="jeans" control={<Radio />} label="Jeans" />
        <FormControlLabel value="tops" control={<Radio />} label="Tops" />
      </RadioGroup>
                </FormControl>
                <FormControl style={formstyle}>
      <FormLabel id="demo-radio-buttons-group-label" style={categories}>Color Filter</FormLabel>
      <RadioGroup
      
        defaultValue="Color Filter"
        name="radio-buttons-group"
        aria-labelledby="color-label"
        value={selectedColor}
        onChange={handleColorChange}

      
      >
        

        <FormControlLabel value="allColor" control={<Radio />} label="All" />
        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
        <FormControlLabel value="khakhi" control={<Radio />} label="Khakhi" />
        <FormControlLabel value="black" control={<Radio />} label="Black" />
        <FormControlLabel value="red" control={<Radio />} label="Red" />
        <FormControlLabel value="pink" control={<Radio />} label="Pink" />
        <FormControlLabel value="yellow" control={<Radio />} label="Yellow" />
      </RadioGroup>
                </FormControl>
                
                </div>
                <div className="shop-product-cards">
                 <ShopProductCards products={filteredProducts} />                
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopProduct