import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GiftCard from "./pages/GiftCard";
import Footer from "./components/Footer";
import { Routes,Route } from "react-router-dom";
import TrackOrder from "./pages/TrackOrder";
import ContactUs from "./pages/ContactUs";
import ShopCategory from "./pages/ShopCategory";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Button from "./components/Button";



function App() {
  return (
    <div className="App">
       <HeaderTop/>
       <Header/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift-card" element={<GiftCard />} />
        <Route path="/shopping-card" element={<GiftCard />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shop-category" element={<ShopCategory />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/basket" element={<GiftCard/>} />
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
