import React  from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { style } from "./style.css"


function Index() {

    return (

        <div  >







            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand olx me-5 pe-5" href="https://olx.com.pk" target="_blank">  <h1 className="olx"><span>OLX</span></h1></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link  me-5 pe-5" href="#">   <i className="fas fa-car "><span className="icon-text">Motors</span></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-5 pe-5" href="#"><i className="fas fa-building"><span className="icon-text property">Property</span></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


            <nav class="navbar secondary-tab">
                <div class="container-fluid">
                    <div class="select-container">
                        <i class="fas fa-location-dot"></i>
                        <select name="options" id="options" class="fw-bold ">
                            <option value="option1 " >Select Location</option>
                            <option value="option2">Sindh</option>
                            <option value="option3">Punjab</option>
                            <option value="option4">Khyber Pakhtunkhwa</option>
                            <option value="option5">Balochistan</option>
                            <option value="option6">Gilgit Baltistan</option>
                        </select>
                    </div>
                    <form class="d-flex search" role="search">
                        <input class=" search-bar" type="search" placeholder="Find Cars,Mobile Phones and more..." aria-label="Search" />
                        <a href="#"> <button class=" search-icon" type="submit"> <i class="fas fa-magnifying-glass"></i></button></a>
                       <div className="login-sell">
                        <Link to="./Login"> <button className="btn login" >Login</button></Link>
                        <Link to="./Login"><button className="btn sell" ><span><i class="fa-solid fa-plus"></i> </span> Sell</button></Link>
                        </div>
                    </form>
                    <hr />
                </div>
            </nav>
        
        </div>

    );

}

export default Index;