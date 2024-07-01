import React, { useState, useEffect } from "react";
import "./design.css";
import { Link } from "react-router-dom";




export default function AdsDetails(props) {
    const { title, image,  Description, Price } = props
   
    return (



        <div class="card adcard mt-5">

             <Link to={"/ScreenAd"} className="adlink">         
            
                <span className="adlink " >
                <img className="adimg" src={image}  ></img>
                <div class="card-body">

                    <h5 class="card-title adtitle">{title} <i class="fa-solid fa-heart icon-heart"></i>
                    </h5>
                    <p class="card-text addescription">{Description}</p>

                    <p class="card-text adprice fw-semibold fs-5"> {Price}</p>


                </div>
            </span>
                    </Link>
            
        </div>








    )
}