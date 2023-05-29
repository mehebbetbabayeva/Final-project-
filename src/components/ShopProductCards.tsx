import ProductsCard from './ProductsCard';
interface Product {
  _id: number;
  title: string;
  price: number;
  oldPrice:number;
  category:string;
  quantity: number;
  image:string;
  
}
const ShopProductCards = ({ products }: { products: Product[] }) => {
  return (
    <div className="shop-products-title">
       
          
              {products.map((item:any)=>(
                <ProductsCard key={item._id} product={item}/>
               
              ))}
            
           
         </div>
       
  )
}

export default ShopProductCards