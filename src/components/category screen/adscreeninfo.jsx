import React from 'react';
import { useParams } from 'react-router-dom';
import { mobile,vehicles,sale,rent,electronics,bikes,business,services,jobs,animals,furniture,fashion,books,kids } from './data';
import "./design.css";
import Index from "../header/Index"
import Footer from "../footer/Footer"
import Button from "../ads/button";

const Adscreeninfo = () => {
    const { id } = useParams();

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
    const filteredItems = allData;

    console.log("Retrieved ID from params:", id);
    const item = filteredItems.find((item) => item.id === parseInt(id));
    console.log("Found item:", item);

    return (
        <div>
           <Index />
            {item ? (
                <>
                    <img src={item.image} className="item-pic" alt={item.Title} />

                    <div className="card item-detail-card">
                        <div className="card-body">
                            <h5 className="card-title fs-1 fw-semibold">{item.Price}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary mt-3">{item.subtitle}</h6>
                            <p className="card-text mt-3">
                                <i className="fas fa-location-dot"></i> &nbsp; {item.location}
                            </p>
                        </div>
                    </div>

                    <div className="card item-detail-card">
                        <div className="card-body">
                            <h5 className="card-title fs-3">Details</h5>
                            <p className="card-text mt-3">Deliverable: <span className="ms-5 fw-semibold">{item.delivery}</span></p>
                            <p className="card-text mt-3">Price: <span className="ms-5 fw-semibold">{item.Price}</span></p>
                            <p className="card-text mt-3">Brand: <span className="ms-5 fw-semibold">{item.brand}</span></p>
                            <p className="card-text mt-3">Condition: <span className="ms-5 fw-semibold">{item.condition}</span></p>
                        </div>
                    </div>

                    <div className="card item-detail-card-description">
                        <div className="card-body">
                            <h5 className="card-title fs-3">Description</h5>
                            <p className="card-text mt-3">Best Thing</p>
                            <p className="card-text">First Check Then Buy</p>
                            <p className="card-text">Fully Trusted User</p>
                            <p className="card-text">Condition 10/10</p>
                            <p className="card-text">If you are fully satisfied then buy</p>
                            <p className="card-text">All ok no any fault</p>
                            <p className="card-text">Fresh</p>
                            <p className="card-text">Only cash no exchange</p>
                        </div>
                    </div>
                </>
            ) : (
                <i><b><h3>&nbsp;Sorry, Item not found!</h3></b></i>
            )}

            {item && (
                <div className="seller">
                    <div className="card">
                        <div className="card-body">
                            <i className="fas fa-user">
                                <span className="card-title fw-light user-detailss">{item.name}</span>
                            </i>
                            <h6 className="card-subtitle mb-2 text-body-secondary mt-3 ms-4">Member since {item.since}</h6>
                            <center>
                                <Button title={"Show Phone Number"} />
                                <br />
                                <Button title={"Chat"} />
                            </center>
                        </div>
                    </div>

                    <div className="card item-detail-card location">
                        <div className="card-body">
                            <h5 className="card-title location-heading">Location</h5>
                            <p className="card-text mt-3">
                                <i className="fas fa-location-dot"></i> &nbsp;{item.location}
                            </p>
                        </div>
                    </div>
                    <span className='idd'>Ad id: {item.id}</span>
                    <span className='report'>
                        <i className="fa-regular fa-circle-xmark"></i> Report this Ad
                    </span>
                </div>
            )}

            <div>
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
            </div>

            <span className='footer-span'>
             <Footer/>
            </span>
        </div>
    );
};

export default Adscreeninfo;
