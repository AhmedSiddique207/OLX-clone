import React from "react";
import "./style.css";
import logo from "./images/OLX-logo.png"
import fb from "./images/facebook.png"
import google from "./images/google.png"
import email from "./images/email.jpg"
import phone from "./images/phone.png"

const LoginSignupModal = ({ isLogin, closeModal, toggleMode }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img src={logo} alt="OLX Logo" className="olx-logo" />
              <button type="button" className="btn-close fa-solid fa-xmark" onClick={closeModal}></button>
            </div>
            <div className="modal-body text-center">
              <h5 className="modal-title">
                {isLogin ? "Login to your OLX account" : "Sign up for an OLX account"}
              </h5>
              <button type="button" className="social-button google-button">
                <img src={google} alt="Google Icon" /> {isLogin ? "Login" : "Sign up"} with Google
              </button>
              <button type="button" className="social-button facebook-button">
                <img src={fb} alt="Facebook Icon" /> {isLogin ? "Login" : "Sign up"} with Facebook
              </button>
              <div className="separator">OR</div>
              <button type="button" className="social-button email-button">
                <img src={email} alt="Email Icon" /> {isLogin ? "Login" : "Sign up"} with Email
              </button>
              <button type="button" className="social-button phone-button">
                <img src={phone} alt="Phone Icon" /> {isLogin ? "Login" : "Sign up"} with Phone
              </button>
         
              {!isLogin && (
  <div className="row terms-container">
    <input type="checkbox" id="terms-checkbox" className="terms-checkbox" />
    <label htmlFor="terms-checkbox" className="terms-label">
      When creating a new account you agree to{" "}
      <span className="privacy fw-bold">OLX's Terms and Conditions</span> and{" "}
      <span className="privacy fw-bold">Privacy Policy</span>
    </label>
  </div>
)}

  
    

            </div>
            <div className="modal-footer">
              <p className="me-5">
                {isLogin ? "New to OLX?" : "Already have an account?"}
                <span className="toggle-link" onClick={toggleMode}>
                  {isLogin  ? " Create an account" : " Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
