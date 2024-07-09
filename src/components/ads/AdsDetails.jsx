import React from 'react';
import { Link } from 'react-router-dom';
import { arr } from './data';
import "./design.css"

const AdsDetails = () => {

    const onClickHandler = () => {

    };

    return (
        <div>
            <h3 className="moreAds-heading mt-3">More Ads</h3>
            <div className='row mt-4'>

                {arr.map((item) => (
                    <div className='col-sm-3'>
                        <div key={item.id} className="card adcard mt-5" onClick={onClickHandler}>
                            <Link to={`/ScreenAd/${item.id}`} className='adlink' >
                                <span className="adlink">
                                    <img className="adimg" src={item?.image} alt={item?.Title} />
                                    <div className="card-body">
                                        <h5 className="card-title adtitle">
                                            {item?.Title}
                                            <i className="fa-solid fa-heart icon-heart"></i>
                                        </h5>
                                        <p className="card-text addescription">{item?.Description}</p>
                                        <p className="card-text adprice fw-semibold fs-5">{item?.Price}</p>
                                    </div>
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default AdsDetails;
