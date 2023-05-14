import PageTitle from "../components/PageTitle";
import ImageSlider from "../components/ImageSlider";
const ProductDetail = ({ product }:any) => {
  return (
    <div>
        <PageTitle text="Product Details"/>
        <div className="product-detail-info">
          <div className="container">
            <div className="product-detail-info-content">
              <ImageSlider  images={product.images} thumbnails={product.thumbnails} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetail