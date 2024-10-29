import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Components/Footer/Footer";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { useLayoutEffect } from "react";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Blog from "./Pages/Blog/Blogs/Blog";
import DetailsBlog from "./Pages/Blog/DetailsBlog/DetailsBlog";
import Shop from "./Pages/Shop/Shop/Shop";
import DetailsShop from "./Pages/Shop/DetailsShop/DetailsShop";
import Affiliated from "./Pages/Affiliated/Affiliated";
import Machineries from "./Pages/ProductsAndServices/Machineries/Machineries/Machineries";
import DetailsMachinery from "./Pages/ProductsAndServices/Machineries/DetailsMachinery/DetailsMachinery";
import Molds from "./Pages/ProductsAndServices/Molds/Molds/Molds";
import DetailsMold from "./Pages/ProductsAndServices/Molds/DetailsMold/DetailsMold";
import RawMaterials from "./Pages/ProductsAndServices/RawMaterials/RawMaterials";
import Erection from "./Pages/ProductsAndServices/Erection/Erection";
import ConsultancyService from "./Pages/ProductsAndServices/ConsultancyService/ConsultancyService";
import { Toaster } from "react-hot-toast";
import Others from "./Pages/ProductsAndServices/Others/Others/Others";
import DetailsOther from "./Pages/ProductsAndServices/Others/DetailsOther/DetailsOther";
// import Scroll from "./Components/Scroll/Scroll";
import "react-multi-carousel/lib/styles.css";
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
          <Route path="/raw" element={<RawMaterials />} />
          <Route path="/erection" element={<Erection />} />
          <Route path="/consultancy" element={<ConsultancyService />} />
          <Route path="/others" element={<Others />} />
          <Route path="/others/:id" element={<DetailsOther />} />
          <Route path="/affiliated" element={<Affiliated />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<DetailsShop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<DetailsBlog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <WhatsApp />
        {/* <Scroll /> */}
        <Toaster position="top-right" />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
