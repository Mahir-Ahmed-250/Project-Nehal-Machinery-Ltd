import React from "react";
import "./WhatsApp.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../Assets/logo.png";

const WhatsApp = () => {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+8801329681886"
        accountName="Nehal Machinery Ltd"
        avatar={logo}
        allowEsc
        allowClickAway
        notification
        notificationSound
        // buttonStyle={{
        //   right: "auto",
        //   marginLeft: "20px",
        // }}
        chatboxClassName="chat"
      />
    </>
  );
};

export default WhatsApp;
