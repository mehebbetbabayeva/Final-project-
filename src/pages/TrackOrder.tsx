import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
const TrackOrder = () => {
  return (
    <>
     <PageTitle text="Order Tracking" />
     <div className="track">
    <div className="container">
      <div className="track-content">
        <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
        <input type="text" placeholder="Order ID" />
        <input type="email" placeholder="Billing Email Address" />
        <Button text="TRACK ORDER"/>
      </div>
    </div>
     </div>
     </>
  )
}

export default TrackOrder