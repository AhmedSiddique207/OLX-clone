import React, { useState, useEffect } from "react";
import "./design.css";
import { Link } from "react-router-dom";
import Data from "./data"




function AdsDetails(props) {
const {item}=props
    // console.log(title)
    return (



        <div class="card adcard mt-5">


            <Link to={"/ScreenAd"} className="adlink">

                <span className="adlink " >
                    <img className="adimg" src={item?.image}></img>
                    <div class="card-body">

                        <h5 class="card-title adtitle">{item?.Title}<i class="fa-solid fa-heart icon-heart"></i>
                        </h5>
                        <p class="card-text addescription">{item?.Description}</p>

                        <p class="card-text adprice fw-semibold fs-5"> {item?.Price}</p>


                    </div>
                </span>
            </Link>

        </div>








    )
}
export default AdsDetails




