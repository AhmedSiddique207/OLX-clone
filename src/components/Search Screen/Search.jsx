import React from 'react';
import { Link } from 'react-router-dom';
import BackToTopButton from '../backTop/BackToTopButton';

const Search = ({ searchQuery, filteredItem }) => {
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
            {searchQuery ? (
                filteredItem.length > 0 ? (
                    filteredItem.map((item) => (
                        <div className='col-sm-4' key={item.id}>
                            <div className="card addcard mt-5">
                                <Link to={`/adscreeninfo/${item.id}`} className='adlink'>
                                    <span className="adlink">
                                        <img className="adddimg" src={item?.image} alt={item?.Title} />
                                        <div className="card-body">
                                            <div className="row">
                                                <p className="card-text adprice fw-semibold fs-5">Rs {formatCurrency(item?.Price)}</p>
                                                <i className='fas fa-heart icon-heart'></i>
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
                    ))
                ) : (
                    <b><p>No items found</p></b>
                )
            ) : (
              null
            )}
            <BackToTopButton />
        </div>
    );
}

export default Search;
