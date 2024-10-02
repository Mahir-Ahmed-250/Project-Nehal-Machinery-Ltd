import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Components/Footer/Footer";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import Scroll from "./Components/Scroll/Scroll";
import MessageFromChairMan from "./Pages/Messages/MessageFromChairMan/MessageFromChairMan";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chairman" element={<MessageFromChairMan/>} />
      </Routes>
      <WhatsApp/>
      <Scroll/>
      <Footer/>
    </>
  );
}

export default App;
