import React from "react";
import { useState } from "react";
import BannerTitle from "../../Components/BannerTitle/BannerTitle";
import useFirebase from "../../Hooks/useFirebase";
import Button from "../../Components/Button/Button";
import "./AdminLogin.css";
import Login from "../../Assets/login.png";

const AdminLogin = () => {
  const { loginUser, loading } = useFirebase();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    const result = event.target.value;
    setEmail(result);
  };
  const handlePassword = (event) => {
    const result = event.target.value;
    setPassword(result);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };
  return (
    <>
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <BannerTitle title1="Admin Login" title2="Nehal Machinery Ltd" />
        <div className="loginContainer">
          <div>
            <img src={Login} alt="" width="100%" />
          </div>
          <div className="loginForm">
            <form onSubmit={handleLogin}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg mb-2 w-100"
                  onChange={handleEmail}
                  required
                  placeholder="Admin Email"
                />
              </div>

              <div className="form-outline">
                <input
                  className="form-control form-control-lg mb-2 w-100"
                  type={passwordShown ? "text" : "password"}
                  required
                  onChange={handlePassword}
                  placeholder="Enter a password"
                />

                <input
                  className="form-check-input ms-1"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                  onClick={togglePassword}
                />
                <label className="form-check-label ms-4">Show Password</label>
              </div>
              <Button
                title="Login"
                width="200px"
                border="2px solid black"
                color="black"
                fontSize="22px"
              />
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default AdminLogin;
