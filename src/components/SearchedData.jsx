import React from 'react'
import { Link } from 'react-router-dom';
export default function SearchedData({searchQuery,filteredItem}) {
    const onClickHandler = () => {

    };
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'PKR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).replace('PKR', '');
    };

  return (
   <>
   {searchQuery?(
    <>
      <div className="ms-5 ">
                <h3 className="moreAds-heading mt-5 ">Searched Ads:</h3>
            
            <div className='row '>
            
                {filteredItem.map((item) => (
                    <>
                       
                    <div className='col-sm-3 '>
                        <div key={item.id} className="card adddcard  mt-5" onClick={onClickHandler}>
                      <>
                            <Link to={`/adscreeninfo/${item.id}`} className='adlink' >
                                <span className="adlink">
                                    <img className="adddimg" src={item?.image}  />
                                    <div className="card-body">
                                        <div className="row ">
                                        <p className="card-text adprice fw-semibold fs-5">Rs {formatCurrency(item?.Price)}</p>
                                        <i className='fas fa-heart icon-heart '></i>
                                        </div>
                                        <p className="card-title fs-5">
                                            {item?.Title}
                                            
                                        </p>
                                        <p className="card-text addescription fw-lighter">{item?.location}</p>
                                    </div>
                                </span>
                            </Link>
                           </>
                            
                         
                        </div>
                    </div>
                    </>
                ))}

            </div>
        </div>
    </>
   ):null}
   </>
  )
}