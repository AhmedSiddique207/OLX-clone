import React,{useState} from "react";
import { Link } from "react-router-dom";
import logo from "./images/OLX-logo.png"
import "./style.css"
import Nav from "../navbar/nav"
import LoginSignupModal from "./LoginSignupModal";


function Index() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
  
    const openModal = (isLogin) => {
      setIsLogin(isLogin);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const toggleMode = () => {
      setIsLogin(!isLogin);
    };
    return (

        <div className="main-position">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand olx me-5 pe-5" href="https://olx.com.pk" target="_blank">  <span className="olx"><img src={logo} /></span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link nav-link-motor me-5 pe-5" href="../adscreen/vehicles">   <i className="fas fa-car "><span className="icon-text ">Motors</span></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-link-property me-5 pe-5" href="../adscreen/sale "><i className="fas fa-building"><span className="icon-text property">Property</span></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


            <nav class="navbar secondary-tab ">
                <div class="container-fluid ">

                    <div class="select-container">
                        <i class="fas fa-location-dot"></i>
                        <select name="options" id="options" class="fw-semibold  ">
                            <option value="option1">Select Location</option>
                            <option value="option2">Sindh</option>
                            <option value="option3">Punjab</option>
                            <option value="option4">Khyber Pakhtunkhwa</option>
                            <option value="option5">Balochistan</option>
                            <option value="option6">Gilgit Baltistan</option>
                        </select>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>


                    <form class="d-flex search" role="search">
                        <input class=" search-bar" type="search" placeholder="Find Cars,Mobile Phones and more..." aria-label="Search" />
                        <a href="#" className="search-mag"> <button class=" search-icon" type="submit"> <i class="fas fa-magnifying-glass"></i></button></a>


                        <div className="login-sell">
                          
      <button type="button" className="btn  login-width btn login fw-bold" onClick={() => openModal(true)}>Login</button>
      <button type="button" className="btn  signup-width btn sell" onClick={() => openModal(false)}><span><i class="fa-solid fa-plus"></i></span>Sell</button>
      {isModalOpen && (
        <LoginSignupModal isLogin={isLogin} closeModal={closeModal} toggleMode={toggleMode} />
      )}
                       
                       
                        </div>
                    </form>
                    <hr />


                </div>
            </nav>
            <div className="ms-1 mt-2">
                <Nav />
            </div>
        </div>

    );

}

export default Index;