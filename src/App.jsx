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



function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }
  
  return (
    <>
     <Wrapper>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path ='/contact' element={<ContactUs/>}/>
        <Route path ='/blog' element={<Blog/>}/>
      </Routes>
      <WhatsApp />
      <Scroll />
      <Footer />
      </Wrapper>
    </>
  );
}

export default App;
