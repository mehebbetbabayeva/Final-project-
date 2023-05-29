
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

const Product = ({ products }: { products: Product[] }) => {

 
  
  return (
  
        <div className="card-title">
         <div className="container">
            <div className="card-content"  >
              {products.map((item)=>(
                <ProductsCard key={item._id} product={item}/>
               
              ))}
            
            </div>
         </div>
        </div>
   
  )
}

export default Product