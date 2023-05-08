import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GiftCard from "./pages/GiftCard";
import Footer from "./components/Footer";
import { Routes,Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
       <HeaderTop/>
       <Header/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift-card" element={<GiftCard />} />
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
