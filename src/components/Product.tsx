
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