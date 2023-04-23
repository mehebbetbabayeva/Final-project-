import HomePage from "./pages/HomePage";
import { Routes,Route } from "react-router-dom";
import GiftCard from "./pages/GiftCard";
import TrackOrder from "./pages/TrackOrder";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
        <HomePage/>
        <Routes>
        <Route path="/gift-card" element={<GiftCard />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
