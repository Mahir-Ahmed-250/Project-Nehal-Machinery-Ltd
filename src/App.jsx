import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Components/Footer/Footer";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import Scroll from "./Components/Scroll/Scroll";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { useLayoutEffect } from "react";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Blog from "./Pages/Blog/Blogs/Blog";
import DetailsBlog from "./Pages/Blog/DetailsBlog/DetailsBlog";
import Shop from "./Pages/Shop/Shop/Shop";
import DetailsShop from "./Pages/Shop/DetailsShop/DetailsShop";
import Affiliate from "./Pages/Agents/Affiliate";
import Machineries from "./Pages/ProductsAndServices/Machineries/Machineries/Machineries";
import DetailsMachinery from "./Pages/ProductsAndServices/Machineries/DetailsMachinery/DetailsMachinery";
import Molds from "./Pages/ProductsAndServices/Molds/Molds/Molds";
import DetailsMold from "./Pages/ProductsAndServices/Molds/DetailsMold/DetailsMold";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <>
      <Wrapper>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/machineries" element={<Machineries />} />
          <Route path="/machineries/:id" element={<DetailsMachinery />} />
          <Route path="/molds" element={<Molds />} />
          <Route path="/molds/:id" element={<DetailsMold />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<DetailsShop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<DetailsBlog />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <WhatsApp />
        <Scroll />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
