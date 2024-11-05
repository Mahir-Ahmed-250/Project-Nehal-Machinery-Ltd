import React from "react";
import { useState } from "react";
import BannerTitle from "../../Components/BannerTitle/BannerTitle";
import useFirebase from "../../Hooks/useFirebase";

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
        <BannerTitle title="ADMIN LOGIN" />
        <div className="loginContainer">
          <div>{/* <img src={logo} alt="" width="100%" /> */}</div>
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
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                  onClick={togglePassword}
                />
                <label className="form-check-label">Show Password</label>
              </div>
              <button className="loginBtn">LOGIN</button>

              <div className="text-center text-lg-start mt-4 pt-2"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
