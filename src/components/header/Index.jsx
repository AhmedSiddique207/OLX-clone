import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import logo from "./images/OLX-logo.png";
import "./style.css";
import { mobile, vehicles, sale, rent, electronics, bikes, business, services, jobs, animals, furniture, fashion, books, kids } from '../category screen/data';
import Nav from "../navbar/nav";
import LoginSignupModal from "./LoginSignupModal";
import Search from "../Search Screen/Search";

function Index() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const { type } = useParams();

    const allData = [
        ...mobile,
        ...vehicles,
        ...sale,
        ...rent,
        ...electronics,
        ...bikes,
        ...business,
        ...services,
        ...jobs,
        ...animals,
        ...furniture,
        ...fashion,
        ...books,
        ...kids,
    ];

    const filteredItem = allData.filter((item) =>
        item.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

    const isActive = (path) => {
        return location.pathname === path;
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault(); 
    };

    return (
        <>
            <div className="fixed-upper">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand olx me-5 pe-5" href="https://lapify.site/">
                            <span className="olx">
                                <img src={logo} alt="OLX Logo" />
                            </span>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-itemm nav-itemm-mot ">
                                    <Link
                                        className={`nav-link nav-link-motor me-5 pe-5 ${isActive("/adscreen/vehicles") ? "active" : ""}`}
                                        to="/adscreen/vehicles"
                                    >
                                        <span className="hover-car">
                                            <i className="fas fa-car " style={{ justifyContent: "center", alignItems: "center", display: "flex", backgroundImage: "linear-gradient(to bottom , #e5eaea, #ffffff)" }}></i>
                                            <p className="icon-text heading-bg">Motors</p>
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-itemm nav-itemm-build">
                                    <Link
                                        className={`nav-link nav-link-property me-5 pe-5 ${isActive("/adscreen/sale") ? "active" : ""}`}
                                        to="/adscreen/sale"
                                    >
                                        <span >
                                            <div className="hover-building">
                                                <i className="fas fa-building" style={{ justifyContent: "center", alignItems: "center", display: "flex", backgroundImage: "linear-gradient(to bottom , #e5eaea, #ffffff)" }}></i>
                                                <p className="icon-text heading-bg ">Property</p>
                                            </div>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <nav className="navbar secondary-tab">
                    <div className="container-fluid">
                        <div className="select-container">
                            <i className="fas fa-location-dot"></i>
                            <select name="options" id="options" className="fw-semibold">
                                <option value="option1">Select Location</option>
                                <option value="option2">Sindh</option>
                                <option value="option3">Punjab</option>
                                <option value="option4">Khyber Pakhtunkhwa</option>
                                <option value="option5">Balochistan</option>
                                <option value="option6">Gilgit Baltistan</option>
                            </select>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>

                        <form className="d-flex search" role="search" onSubmit={handleSearchSubmit}>
                            <input
                                className="search-bar"
                                type="search"
                                placeholder="Find Cars, Mobile Phones and more..."
                                aria-label="Search"
                                onChange={handleSearchChange}
                                value={searchQuery}
                            />
                            <button className="search-icon" type="submit">
                                <i className="fas fa-magnifying-glass"></i>
                            </button>

                            <div className="login-sell">
                                <button
                                    type="button"
                                    className="btn login-width btn login fw-bold"
                                    onClick={() => openModal(true)}
                                >
                                    Login
                                </button>
                                <button
                                    type="button"
                                    className="btn signup-width btn sell"
                                    onClick={() => openModal(false)}
                                >
                                    <span>
                                        <i className="fa-solid fa-plus"></i>
                                    </span>
                                    {" "} Sell
                                </button>
                                {isModalOpen && (
                                    <LoginSignupModal
                                        isLogin={isLogin}
                                        closeModal={closeModal}
                                        toggleMode={toggleMode}
                                    />
                                )}
                            </div>
                        </form>
                    </div>
                </nav>
            </div>

            <div className="main-content">
                <hr className="hr-index" />
                <div className="ms-1 pt-3">
                    <Nav />
                </div>
                <Search searchQuery={searchQuery} filteredItem={filteredItem} />
            </div>
        </>
    );
}

export default Index;


