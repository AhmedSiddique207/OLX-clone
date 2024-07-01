import React from "react";
import Index from "../header/Index"


import "./design.css";

// import Button from "../header/button"

function ScreenAd(props) {
    const { subtitle, image, location, condition, brand, price, delivery } = props



    return (
        <div>
            <Index />

            <div className="ad-details ">

                {/* <div className="seller">
<div class="card  " >

  <div class="card-body">
    
    <i className="fas fa-user"><span class="card-title fw-light user-detailss " > Ahmed </span></i>
    <h6 class="card-subtitle mb-2 text-body-secondary mt-3 ">Member since apr 2020</h6>
    <Button  title={"Show Phone Number"}/>
    <br/>
    <Button  title={"Chat"}/>
  </div>


</div>
<div class="card item-detail-card location" >
  <div class="card-body">
    <h5 class="card-title location-heading ">Location </h5>

    <p class="card-text mt-3"><i className="fas fa-location-dot"></i> &nbsp; Gulshan-e-Iqbal, Karachi</p>
  </div>


</div>
</div> */}

               

                    <img src={image} className="item-pic" />

                    <div class="card item-detail-card" >
                        <div class="card-body">
                            <h5 class="card-title fs-1 fw-semibold">{price} </h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary mt-3 ">{subtitle}</h6>
                            <p class="card-text mt-3"><i className="fas fa-location-dot"></i> &nbsp; {location}</p>
                        </div>


                    </div>







                    <div class="card item-detail-card" >
                        <div class="card-body">
                            <h5 class="card-title fs-3">Details</h5>

                            <p class="card-text mt-3 ">Deliverable: <span className="ms-5 fw-semibold">{delivery}</span> </p>
                            <p class="card-text mt-3 ">Price: <span className="ms-5 fw-semibold">{price}</span> </p>
                            <p class="card-text mt-3 ">Brand: <span className="ms-5 fw-semibold">{brand}</span> </p>
                            <p class="card-text mt-3 ">Condition: <span className="ms-5 fw-semibold">{condition}</span> </p>

                        </div>
                    </div>


                    <div class="card item-detail-card-description" >
                        <div class="card-body">
                            <h5 class="card-title fs-3">Description</h5>

                            <p class="card-text mt-3 ">Best Thing  </p>
                            <p class="card-text  ">First Check Then Buy </p>
                            <p class="card-text  ">Fully Trusted User    </p>
                            <p class="card-text  ">Condition 10/10  </p>
                            <p class="card-text  ">If you are fully satisfied tehn buy   </p>
                            <p class="card-text  ">All ok no any fault </p>
                            <p class="card-text ">Fresh     </p>
                            <p class="card-text  ">Only cash no exchange  </p>

                        </div>
                    </div>



            </div>


        </div>
    )

}
export default ScreenAd;