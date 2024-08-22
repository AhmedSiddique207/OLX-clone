import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { arr } from './data';
import Index from "../header/Index";
import "./design.css";
import Footer from '../footer/Footer';
import Button from "../Button/button";
import LoginSignupModal from '../header/LoginSignupModal';
import user from "./images/usericonpic.png";
import ImageViewer from 'react-simple-image-viewer';
import Todos from '../Counter';

const ScreenAd = () => {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });

    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
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
    const item = arr.find((item) => item.id === parseInt(id));

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    useEffect(() => {
        const carousel = document.getElementById('carouselExample');
        if (carousel) {
            if (isViewerOpen) {
                carousel.classList.add('carousel-frozen');
            } else {
                carousel.classList.remove('carousel-frozen');
            }
        }
    }, [isViewerOpen]);

    const images = [item?.image,item?.imagetwo,item?.imagethree];


    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {
          style: 'currency',
          currency: 'PKR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).replace('PKR', '');
      };

   

    return (
        <div>
            {!isViewerOpen && <Index />}
            <div className="main-adscreen">
                {item ? (
                    <div className="item-adscreen">
                                <div className="background-carousel-image">
                                    <div className="border-left">
                                    <div className="border-right">
                        <div id="carouselExample" className={`carousel slide ${isViewerOpen ? 'carousel-frozen' : ''}`}>
                            <div className="carousel-inner">
                                {images.map((image, index) => (
                                    image ? (
                                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                            <img
                                                src={image}
                                                className="d-block item-picc"
                                                alt={`Slide ${index}`}
                                                onClick={() => openImageViewer(index)}
                                            />
                                        </div>
                                    ) : null
                                ))}
                                </div>
                            {!isViewerOpen && (
                                <div className="slider-buttons mt-2">
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden ">Next</span>
                                    </button>
                                </div>
                            )}
                            </div>
                            </div>
</div>
                        </div>


                        {isViewerOpen && (
                            <div>
                                
                                <ImageViewer
                                    src={images}
                                    currentIndex={currentImage}
                                    disableScroll={false}
                                    closeOnClickOutside={true}
                                    rightArrowComponent={<i class="fa-solid fa-chevron-right open-right"></i>}
                                    leftArrowComponent={<i class="fa-solid fa-chevron-left open-left"></i>}
                                    onClose={closeImageViewer}
                                    backgroundStyle={{ backgroundColor: "#000000b3" }}
                                    
                                />
                            </div>
                            
                        )}

                        <div className="card item-detail-cardd ">
                            <div className="card-body ">
                                <h5 className="card-title fs-1 fw-semibold">Rs{formatCurrency(item?.Price)}</h5>
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
                    <div className="card">
                        <h5 className='fw-semibold mt-3 ms-3 fs-4 listed'>Listed By Private User</h5>
                        <div className="card-body">
                            <img src={user} className='img-user' alt="User" />
                            <span className="card-title fw-light user-detailsss username-seller"> {item.name} </span>
                            <h6 className="card-subtitle text-body-secondary since">Member since {item.since}</h6>
                            <span className='see-more-arrow'>
                                <p className='see-more'>see more</p><i className="fa-solid fa-arrow-right"></i>
                            </span>
                            <Button title={"Show Phone Number"} backgroundColor="#002f34"
                                fontColor="#FFFFFF" icon="fa-solid fa-phone" onClick={() => openModal(true)} />
                            <Button title={"Chat"} backgroundColor="#FFFFFF" fontColor="#002f34" icon="fa-regular fa-comment" onClick={() => openModal(false)} />
                            {isModalOpen && (
                                <LoginSignupModal
                                    isLogin={isLogin}
                                    closeModal={closeModal}
                                    toggleMode={toggleMode}
                                />
                            )}
                        </div>
                    </div>
                    <div className="card item-detail-card location">
                        <div className="card-body">
                            <h2 className="card-title location-heading fs-4">Location </h2>
                            <h6 className="card-text mt-3"><i className="fas fa-location-dot"></i> &nbsp;{item.location}</h6>
                        </div>
                    </div>
                    <span className='idd'>Ad id:{item.id}</span>
                    <span className='report'><i className="fa-regular fa-circle-xmark"></i> Report this Ad</span>
                </div>
            </div>
            
            <span className='footer-span'>
                <Footer />
            </span>
        </div>
    );
};

export default ScreenAd;


