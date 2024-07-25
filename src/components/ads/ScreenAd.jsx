import React,{useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { arr } from './data';
import Index from "../header/Index";
import "./design.css";
import Footer from '../footer/Footer';
import Button from "../Button/button"
import LoginSignupModal from '../header/LoginSignupModal';

const ScreenAd = () => {

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

    const { id } = useParams();
    console.log("Retrieved ID from params:", id);
    const item = arr.find((item) => item.id === parseInt(id));
    console.log("Found item:", item);

    return (
        <div>
            <Index />
            <div className="main-adscreen">
                {item ? (
                    <div className="item-adscreen">
                        <img src={item?.image} className="item-pic" alt={item?.Title} />

                        <div className="card item-detail-card">
                            <div className="card-body">
                                <h5 className="card-title fs-1 fw-semibold">{item?.Price}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary mt-3">{item?.subtitle}</h6>
                                <p className="card-text mt-3">
                                    <i className="fas fa-location-dot"></i> &nbsp; {item?.location}
                                </p>
                            </div>
                        </div>

                        <div className="card item-detail-card">
                            <div className="card-body">
                                <h5 className="card-title fs-3">Details</h5>

                                <p className="card-text mt-3">
                                    Deliverable: <span className="ms-5 fw-semibold">{item?.delivery}</span>
                                </p>
                                <p className="card-text mt-3">
                                    Price: <span className="ms-5 fw-semibold">{item?.Price}</span>
                                </p>
                                <p className="card-text mt-3">
                                    Brand: <span className="ms-5 fw-semibold">{item?.brand}</span>
                                </p>
                                <p className="card-text mt-3">
                                    Condition: <span className="ms-5 fw-semibold">{item?.condition}</span>
                                </p>
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
                    </div>
                ) : (
                    <i><b><h3>&nbsp;Sorry, Item not found!</h3></b></i>
                )}




                <div className="seller">
                    <div class="card  " >

                        <h5 className='fw-semibold mt-3 ms-3 fs-4 listed'>Listed By Private User</h5>
                        <div class="card-body">
                            <i className="fas fa-user"><span class="card-title fw-light user-detailss " > {item.username} </span></i>
                            <h6 class="card-subtitle mb-2 text-body-secondary  ms-5 mt-1 ">Member since {item.since}</h6>
                    
                    <br/>
                     {/* real buttons start */}


                     <Button title={"Show Phone Number"} backgroundColor="#002f34"
                                    fontColor="#FFFFFF" icon="fa-solid fa-phone"   onClick={() => openModal(true)}/>

                                <Button title={"Chat"} backgroundColor="#FFFFFF" fontColor="#002f34" icon="fa-regular fa-comment"  onClick={() => openModal(false)}/>
                        
                         
{/* real button end */}


                             
                                {isModalOpen && (
                                    <LoginSignupModal
                                        isLogin={isLogin}
                                        closeModal={closeModal}
                                        toggleMode={toggleMode}
                                    />
                                )}
                        </div>


                    </div>
                    <div class="card item-detail-card location" >
                        <div class="card-body">
                            <h2 class="card-title location-heading fs-4">Location </h2>

                            <h6 class="card-text mt-3"><i className="fas fa-location-dot"></i> &nbsp;{item.location}</h6>
                        </div>



                    </div>
                    <span className='idd'>Ad id:{item.id}</span>
                    <span className='report'><i class="fa-regular fa-circle-xmark"></i>  Report this Ad</span>
                </div>
         
            </div>
                <span className='footer-span'>
                    <Footer />
                </span>
        </div>
    )
};



export default ScreenAd;
