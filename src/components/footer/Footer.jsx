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
    let arr = [
        { link: "https://apps.apple.com/pk/app/olx-pakistan-online-shopping/id1551315538", image: appstore },
        { link: "https://play.google.com/store/apps/details?id=com.olx.pk", image: googleplay },
        { link: "https://appgallery.huawei.com/#/app/C104375435", image: appgallery }
    ]
    return (
        <div className="mt-5 pt-5">
            <div className="row footertop-row">
                <div className="col-sm-4" >
                    <img src={topimg}></img>
                </div>
                <div className="col-sm-4" >
                    <h2 className="footertop-heading mt-4">TRY THE OLX APP</h2>
                    <h4 className="footertop-text fw-semibold fs-5 ">Buy, sell and find just about anything using the app on your mobile.</h4>
                </div>
                <div className="col-sm-4" >
                    <hr className="footertop-divider" />
                    <h6 className="footertop-dividerheading">GET YOUR APP TODAY</h6>


                    <div className="footertop-appgooglegallery">
                        {arr.map((item, index) => {
                            return (
                                <Link to={item.link} target="_blank" className="appgooglegallery">   <img src={item.image} className="w-25" />   </Link>
                            )
                        })}
                    </div>

                </div>
            </div>

        </div>
    )
}


function Footermedium() {
    let arr = [
        { link: "https://apps.apple.com/pk/app/olx-pakistan-online-shopping/id1551315538", image: appstore },
        { link: "https://play.google.com/store/apps/details?id=com.olx.pk", image: googleplay },
        { link: "https://appgallery.huawei.com/#/app/C104375435", image: appgallery },
        { heading: "POPULAR CATEGORIES", one: "Cars", two: "Flats for rent", three: "Mobile Phones", four: "Jobs" },
        { heading: "TRENDING SEARCHES", one: "Bikes", two: "Watches", three: "Books", four: "Dogs" },
        { heading: "OLX", one: "Help", two: "Sitemap", three: "Terms of use", four: "Privacy Policy" },
    ];

    return (
        <div className="footermedium-main">
            <hr />
            <div className="row footermedium-row">
              
                {arr.slice(3).map((item, index) => (
                    <div key={index} className="col-sm-3 footermedium-height-adjust">
                        <h6 className="footermedium-headings fw-bold">{item.heading}</h6>
                        <div className="items-medium">

                            {[item.one, item.two, item.three, item.four].map((linkText, linkIndex) => (
                                <a key={linkIndex} href="https://www.olx.com.pk" target="_blank" className="footermedium-links">
                                    <p style={{ marginBottom: '.4rem' }}>{linkText}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="col-sm-3">
                    <h6 className="footermedium-headings mt-1 fw-bold">FOLLOW US</h6>
                    <a href="https://twitter.com/OLX_Pakistan" className="footermedium-icons" target="_blank"><i className="fa-brands fa-twitter mt-3 footermedium-icons"></i></a>
                    <a href="https://www.facebook.com/olxpakistan" className="footermedium-icons" target="_blank"><i className="fa-brands fa-facebook ms-2 footermedium-icons"></i></a>
                    <a href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ" className="footermedium-icons" target="_blank"><i className="fa-brands fa-youtube ms-2 footermedium-icons"></i></a>
                    <a href="https://www.instagram.com/olx.pakistan/" className="footermedium-icons" target="_blank"><i className="fa-brands fa-instagram ms-2 footermedium-icons"></i></a>
                    <br />
                    <div className="footermedium-appgooglegallery">
                        {arr.slice(0, 3).map((item, index) => (
                            <a key={index} href={item.link} target="_blank">
                                <img src={item.image} className="footermedium-appicons" alt="olx download sources Icon" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


function Footerbottom() {
    return (
        <div className="footerbottom-main">
            <p className="pt-2 "> Free Classifieds in Pakistan . &copy; 2006-2024 OLX</p>
        </div>
    )
}






export default Footer