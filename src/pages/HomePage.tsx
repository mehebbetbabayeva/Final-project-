import Banner from "../components/Banner";
import Features from "../components/Features";
import Sale from "../components/Sale";
import Blog from "../components/Blog";
import Product from "../components/Product";
import Title from "../components/Title";
import { useEffect ,useState} from "react";
import { useLoaderData } from "react-router-dom";
interface Products {
  _id: number;
  title: string;
  price: number;
  oldPrice:number;
  category:string;
  quantity: number;
  image:string;
  
}

const HomePage = () => {
  const [products,setProducts]= useState<Products[]>([])
  const data:any = useLoaderData()
  useEffect(()=>{
    setProducts(data.data)
  },[data])

 
  return (
    <>
    <Banner/>
    <Features/>
    <Title text="FEATURED PRODUCT"/>
    <Product products={products}/>
    <Sale/>
    <Title text="NEW PRODUCTS"/>
    <Product products={products}/>
    <Title text="INSPIRED PRODUCTS"/>
    <Product products={products}/>
    <Blog/>
    
    </>
  )
}

export default HomePage