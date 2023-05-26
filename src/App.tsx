import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GiftCard from "./pages/GiftCard";
import Footer from "./components/Footer";
import { Routes,Route ,createBrowserRouter,Outlet,RouterProvider,ScrollRestoration} from "react-router-dom";
import TrackOrder from "./pages/TrackOrder";
import ContactUs from "./pages/ContactUs";
import ShopCategory from "./pages/ShopCategory";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { productsData } from "./api/Api";

const Layout =()=>{
  return(
    <div>
      <HeaderTop/>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const routers = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<HomePage/>,
        loader:productsData
      },
      {
        path:"/gift-card",
        element:<GiftCard/>
      },
      {
        path:"/product/:id",
        element:<ProductDetail/>
      },
      {
        path:"/shopping-card",
        element:<GiftCard/>
      },
      {
        path:"/track-order",
        element:<TrackOrder/>
      },
      {
        path:"/contact-us",
        element:<ContactUs/>
      },
      {
        path:"/shop-category",
        element:<ShopCategory/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/basket",
        element:<GiftCard/>
      },


    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
