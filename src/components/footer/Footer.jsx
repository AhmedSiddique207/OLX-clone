import React from "react";
import "./footstyle.css";
import { Link } from "react-router-dom";
import topimg from "./images/footer top image one.webp"
import googleplay from "./images/googleplay.svg"
import appstore from "./images/appstore.svg"
import appgallery from "./images/appgallery.svg"

function Footer() {
    return (
        <div >
            <Footertop />
            <Footermedium />
            <Footerbottom />
        </div>
    )
};

function Footertop() {
    return (
        <div className="mt-5 pt-5">
            <div className="row footertop-row">
                <div className="col-sm-4" >
                    <img src={topimg}></img>
                </div>
                <div className="col-sm-4" >
                    <h2 className="footertop-heading">TRY THE OLX APP</h2>
                    <h4 className="footertop-text">Buy, sell and find just about anything using the app on your mobile.</h4>
                </div>
                <div className="col-sm-4" >
                    <hr className="footertop-divider" />
                    <h6 className="footertop-dividerheading">GET YOUR APP TODAY</h6>
                    <div className="footertop-appgooglegallery">
                        <Link to="https://apps.apple.com/pk/app/olx-pakistan-online-shopping/id1551315538" target="_blank">   <img src={appstore} className="w-25"></img>   </Link>
                        <Link to="https://play.google.com/store/apps/details?id=com.olx.pk" target="_blank">   <img src={googleplay} className="w-25"></img>   </Link>
                        <Link to="https://appgallery.huawei.com/#/app/C104375435" target="_blank" >   <img src={appgallery} className="w-25"></img>   </Link>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

function Footermedium() {
    return (
        <div className="footermedium-main">
            <div className="container row footermedium-row">
                <div className="col-sm-3">
                    <h6 className="footermedium-headings mt-1 fw-bold">POPULAR CATEGORIES</h6>
                    <a href="/" target="_blank" className="footermedium-links"><p>Cars</p></a>
                    <a href="/" target="_blank" className="footermedium-links"><p>Flats for rent</p></a>
                    <a href="/" target="_blank" className="footermedium-links"><p>Mobile Phones</p></a>
                    <a href="/" target="_blank" className="footermedium-links"><p>Jobs</p></a>
                </div>

                <div className="col-sm-3">
                    <h6 className="footermedium-headings mt-1 fw-bold">TRENDING SEARCHES</h6>
                    <a href="/" target="_blank" className="footermedium-links"><p>Bikes</p></a>
                    <a href="/" target="_blank" className="footermedium-links"><p>Watches</p></a>
                    <a href="/" target="_blank" className="footermedium-links"><p>Books</p></a>
                    <a href="/" target="_blank" className="footermedium-links"><p>Dogs</p></a>
                </div>

                <div className="col-sm-3">
                    <h6 className="footermedium-headings mt-1 fw-bold">OLX</h6>
                    <a href="/" target="_blank" className="footermedium-links"><p>Help</p></a>
                    <a href="/" target="_blank" className="footermedium-links"><p>Sitemap</p></a>
                    <a href="/" target="_blank" className="footermedium-links"><p>Terms of use</p></a>
                    <a href="/" target="_blank" className="footermedium-links"><p>Privacy Policy</p></a>
                </div>
                <div className="col-sm-3">
                    <h6 className="footermedium-headings mt-1 fw-bold ">FOLLOW US</h6>
                    <a href="https://twitter.com/OLX_Pakistan" className="footermedium-icons " target="_blank"><i className="fa-brands fa-twitter mt-3  footermedium-icons"></i></a>
                    <a href="https://www.facebook.com/olxpakistan" className="footermedium-icons" target="_blank"><i className="fa-brands fa-facebook ms-2 footermedium-icons"></i></a>
                    <a href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ" className="footermedium-icons" target="_blank"> <i className="fa-brands fa-youtube ms-2 footermedium-icons"></i></a>
                    <a href="https://www.instagram.com/olx.pakistan/" className="footermedium-icons" target="_blank"> <i className="fa-brands fa-instagram ms-2 footermedium-icons"></i></a>
                    <div className="footermedium-appgooglegallery">
                        <Link to="https://apps.apple.com/pk/app/olx-pakistan-online-shopping/id1551315538" target="_blank">   <img src={appstore} className="w-25  "></img>   </Link>
                        <Link to="https://play.google.com/store/apps/details?id=com.olx.pk" target="_blank">   <img src={googleplay} className="w-25"></img>   </Link>
                        <Link to="https://appgallery.huawei.com/#/app/C104375435" target="_blank" >   <img src={appgallery} className="w-25"></img>   </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}


function Footerbottom() {
    return (
        <div className="footerbottom-main">
            <h6 className="pt-2">Free Classifieds in Pakistan . © 2006-2024 OLX</h6>
        </div>
    )
}






export default Footer