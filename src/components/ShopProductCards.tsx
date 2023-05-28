import ProductsCard from './ProductsCard';

const ShopProductCards = ({products}:any) => {
  return (
    <div className="shop-products-title">
       
          
              {products.map((item:any)=>(
                <ProductsCard key={item._id} product={item}/>
               
              ))}
            
           
         </div>
       
  )
}

export default ShopProductCards