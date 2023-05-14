import Banner from "../components/Banner";
import Features from "../components/Features";
import Sale from "../components/Sale";
import Blog from "../components/Blog";
import Product from "../components/Product";
import Title from "../components/Title";
const HomePage = () => {
  return (
    <>
    <Banner/>
    <Features/>
    <Title text="FEATURED PRODUCT"/>
    <Product/>
    <Sale/>
    <Title text="NEW PRODUCTS"/>
    <Product/>
    <Title text="INSPIRED PRODUCTS"/>
    <Product/>
    <Blog/>
    
    </>
  )
}

export default HomePage