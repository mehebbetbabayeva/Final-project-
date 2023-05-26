import CartItem from "../components/CartItem";
import PageTitle from "../components/PageTitle";
// import ProductPrice from "../components/ProductPrice";


const GiftCard = () => {
  return (
    <>
      <PageTitle text="Cart" />
      {/* <ProductPrice/> */}
      <div>
      <CartItem/>
      <div className="product-total">
        <h2>Cart totals</h2>
        <p>Subtotal{""}
        <span>${totalAmt}</span>
        </p>
        <p>
          Shipping{""}
          <span>test</span>
        </p>
        <p>
          {""}
          Total <span>${totalAmt}</span>
        </p>
      </div>
      </div>
    </>
  )
}

export default GiftCard