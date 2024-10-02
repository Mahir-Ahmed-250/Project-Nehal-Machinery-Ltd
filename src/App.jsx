import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../src/Assets/logo.png";

function App() {
  return (
    <>
    <ScrollToTop smooth color="#6f00ff" />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<>THIS IS AboutUS</>} />
      </Routes>
      <FloatingWhatsApp
                phoneNumber="01725046048"
                accountName="Noman Machinery Ltd"
                avatar={logo}
                allowEsc
                allowClickAway
                notification
                notificationSound
                buttonStyle={{
                  right: "auto",
                  marginLeft:"20px"
                  }}
                  chatboxClassName="chat"
              />
      <Footer/>
    </>
  );
}

export default App;
