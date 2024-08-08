import React from 'react';
import { Link } from 'react-router-dom';
import { arr } from './data';
import "./design.css"

const AdsDetails = () => {
    
    const onClickHandler = () => {

    };

    return (
        <div className="ms-5">
            <h3 className="moreAds-heading mt-5 ">More Ads</h3>
            <div className='row '>

                {arr.map((item) => (
                    <>
                       
                    <div className='col-sm-3 '>
                        <div key={item.id} className="card adddcard  mt-5" onClick={onClickHandler}>
                            <Link to={`/ScreenAd/${item.id}`} className='adlink' >
                                <span className="adlink">
                                    <img className="adddimg" src={item?.image} alt={item?.Title} />
                                    <div className="card-body">
                                        <div className="row ">
                                        <p className="card-text adprice fw-semibold fs-5">{item?.Price}</p>
                                        <i className='fas fa-heart icon-heart '></i>
                                        </div>
                                        <p className="card-title fs-5">
                                            {item?.Title}
                                            
                                        </p>
                                        <p className="card-text addescription fw-lighter">{item?.location}</p>
                                    </div>
                                </span>
                            </Link>
                        </div>
                    </div>
                    </>
                ))}

            </div>
        </div>
    );
};

export default AdsDetails;


