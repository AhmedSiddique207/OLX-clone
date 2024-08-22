import React, { useState,useEffect } from 'react';
import './login2.css';
import logo from './images/OLX-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { signup, loginuser } from '../../features/LoginSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Index() {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({ FirstName: '', Password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.login.currentUser);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = () => {
    if (isLogin) {
      dispatch(loginuser(credentials));
    } else {
      dispatch(signup(credentials)); 
      alert('Signup successful! Please login.'); 
      setIsLogin(true); 
    }
  };

useEffect(() => {
    if (currentUser) {
      navigate("/Homepage"); 
    }
  }, [currentUser, navigate]);

  return (
    <div className="login-containerrrrr">
      <div className="form-content">
        <div className="form-header">
          <img src={logo} alt="OLX Logo" className="olx-logooo" />
          <h5 className="form-title">
            {isLogin ? 'Login to your OLX account' : 'Sign up for an OLX account'}
          </h5>
        </div>
        <div className="form-body">
          <input 
            type="text" 
            className="social-buttonnn google-buttonnn" 
            placeholder='FirstName' 
            value={credentials.FirstName}
            onChange={(e) => setCredentials({ ...credentials, FirstName: e.target.value })}
          />
        
         <input 
            type="password" 
            className="social-buttonnn google-buttonnn" 
            placeholder='Password' 
            value={credentials.Password}
            onChange={(e) => setCredentials({ ...credentials, Password: e.target.value })}
          />

         <button className='submitt' onClick={handleSubmit}>{isLogin ? 'Login' : 'Signup'}</button> 
   
          {!isLogin && (
            <div className="row terms-container">
              <label htmlFor="terms-checkbox" className="terms-label">
                By creating a new account, you agree to{' '}
                <Link
                  target="_blank"
                  to="https://help.olx.com.pk/hc/en-us/articles/4402989977487-What-are-the-terms-of-use"
                >
                  <span className="privacy fw-bold">OLX's Terms and Conditions</span>
                </Link>{' '}
                and{' '}
                <Link
                  target="_blank"
                  to="https://help.olx.com.pk/hc/en-us/categories/4402989237007-Legal-Privacy-information"
                >
                  <span className="privacy fw-bold">Privacy Policy</span>
                </Link>
              </label>
            </div>
          )}
        </div>
        <div className="form-footer">
          <p className="me-5 pe-5">
            {isLogin ? 'New to OLX?' : 'Already have an account?'}
            <span className="toggle-link" onClick={toggleMode}>
              {isLogin ? ' Create an account' : ' Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

