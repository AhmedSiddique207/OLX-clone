// import React,{useState} from 'react';
// import { Link , NavLink} from 'react-router-dom';
// import { mobile,vehicles,sale,rent,electronics,bikes,business,services,jobs,animals,furniture,fashion,books,kids } from './data';
// import "./design.css"
// import Index from "../header/Index"
// import Footer from "../footer/Footer"
// import { useParams } from "react-router-dom";
// import ReactSlider from 'react-slider';
// import Button from '../Button/button';
// import LoginSignupModal from '../header/LoginSignupModal';



// const Adscreen = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);


//     const openModal = (isLogin) => {
//         setIsLogin(isLogin);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     const toggleMode = () => {
//         setIsLogin(!isLogin);
//     };

//     const onClickHandler = () => {
        
//     };
    
//     let { type } = useParams();
//  const allData = [
//         ...mobile,
//         ...vehicles,
//         ...sale,
//         ...rent,
//         ...electronics,
//         ...bikes,
//         ...business,
//         ...services,
//         ...jobs,
//         ...animals,
//         ...furniture,
//         ...fashion,
//         ...books,
//         ...kids,
        
//     ];
//     // const item = type.find((item) => item.type === parseInt(type));
//     console.log("Found item:", type);
//     const filteredItems = allData.filter(item => item.type === type);
//     const [minValue, setMinValue] = useState();
//     const [maxValue, setMaxValue] = useState(1000000000);
  
//     const handleSliderChange = (values) => {
//       setMinValue(values[0]);
//       setMaxValue(values[1]);
//     };
//     const formatCurrency = (value) => {
//       return value.toLocaleString('en-US', {
//         style: 'currency',
//         currency: 'PKR',
//         minimumFractionDigits: 0,
//         maximumFractionDigits: 0
//       }).replace('PKR', '');
//     };

//     return (
//         <>
//        <Index/>
       
//         <div className="main-filter-screen" >
//        <div className="filter-list">
     
//                     <NavLink to="../" className="home-link-filter">Home</NavLink>
//                     {filteredItems.length > 0 ? (
//                         <h3 className="type-heading">{type} in Pakistan <span className='ads-count'>{filteredItems.length} Ads</span></h3>
//                     ) : (
//                         <h3 className="categories-heading">No items found in this category</h3>
//                     )}
//      <h6 className='filter-heading'>Filters</h6>
//                <hr className='filter-hr-break'/>
//                <h6 className='categories-filter-heading'>Categories</h6>
//                <div className="mt-3">
//                <NavLink to="../" className="category-link-filter ">All Categories</NavLink>
//                </div>
// <div>
// {filteredItems ? (
//         <h3 className="type-heading-filter">{type}</h3>
        
//     ) : (
//         <h3 className="categories-heading">No items found in this category</h3>
//     )}
// </div>
// <div>
// {filteredItems.map((item)=>{
//     return(
//     <div>
//      <NavLink to="#" className="type-link-filter">{item.type} {"(10+ Ads)"}</NavLink>
//     </div>
// )})}
// </div>
// <hr className='filter-hr-break'/>
// <h6 className='categories-filter-heading'>Location</h6> 

// <div class="select-containerr select-containerr-filter ">
//                             <i class="fas fa-location-dot"></i>
//                             <select name="options" id="options" class="fw-semibold">
//                                 <option value="option1">Select Location</option>
//                                 <option value="option2">Sindh</option>
//                                 <option value="option3">Punjab</option>
//                                 <option value="option4">Khyber Pakhtunkhwa</option>
//                                 <option value="option5">Balochistan</option>
//                                 <option value="option6">Gilgit Baltistan</option>
//                             </select>
//                             <i class="fa-solid fa-caret-down"></i>
//                         </div>
                      

//        <div>
// {filteredItems ? (
//     <h3 className="location-heading-filter">Pakistan</h3>
    
// ) : (
//     <h3 className="categories-heading">No items found in this category</h3>
// )}
// </div>
// <div>
// {filteredItems.map((item)=>{
//     return(
//         <div>
//      <NavLink to="#" className="location-link-filter">{item.location} {"(20+ Ads)"}</NavLink>
//     </div>
// )})}
// </div>
// <div>
// <h6 className='categories-filter-heading fw-bold'>Price</h6> 
// <div className="filter-bar">
//       <div className="price-inputs">
//         <input
//           type="number"
//           value={minValue}
//           onChange={(e) => setMinValue(Number(e.target.value))}
//         />
       
//         <input
//           type="number"
//           value={maxValue}
//           onChange={(e) => setMaxValue(Number(e.target.value))}
//         />
//       </div>
//       <div className="currency ">PKR {formatCurrency(maxValue)}</div>
     
//       <ReactSlider
//         className="slider"
//         value={[minValue, maxValue]}
//         onChange={handleSliderChange}
//         min={0}
//         max={1000000000}
//       />
//     </div>
// </div>
// <hr className='filter-hr-break'/>
// <div className="last-selling-div" onClick={() => openModal(true)}>
// <h5>Want to see your stuff here?</h5>
// <p>Make some extra cash by selling things<br/> in your community. Go on, it's quick and<br/> easy.</p>
// <div className="filter-button-div">
// <Button title={"Start Selling"} backgroundColor="#3a77ff" fontColor="white" />
// </div>
// </div>
// {isModalOpen && (
//                                     <LoginSignupModal
//                                         isLogin={isLogin}
//                                         closeModal={closeModal}
//                                         toggleMode={toggleMode}
//                                     />
//                                 )}
// </div>
//        <div className='row  category-ads-three'>
//                 {filteredItems.map((item) => (
//                     <div className='col-sm-4'>
//                         <div key={item.type} className="card addcard mt-5" onClick={onClickHandler}>
//                             <Link to={`/adscreeninfo/${item.id}`} className='adlink' >
//                                 <span className="adlink">
//                                     <img className="adddimg" src={item?.image} alt={item?.Title} />
//                                     <div className="card-body">
//                                         <div className="row ">
//                                         <p className="card-text adprice fw-semibold fs-5">Rs {formatCurrency(item?.Price)}</p>
//                                         <i className='fas fa-heart icon-heart '></i>
//                                         </div>
//                                         <p className="card-title fs-5">
//                                             {item?.Title}
                                            
//                                         </p>
//                                         <p className="card-text addescription fw-lighter">{item?.location}</p>
//                                     </div>
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//             <Footer/>
// </>
//     );
// };
// export default Adscreen;
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { mobile, vehicles, sale, rent, electronics, bikes, business, services, jobs, animals, furniture, fashion, books, kids } from './data';
import "./design.css";
import ReactSlider from 'react-slider'; 
import Button from '../Button/button'; 
import LoginSignupModal from '../header/LoginSignupModal'; 
import Footer from '../footer/Footer'; 
import Index from '../header/Index'; 

const Adscreen = () => {
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

  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000000000);
  const [filtered, setFiltered] = useState([]);
  const { type } = useParams();

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

  const handleSliderChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const filterItems = (min, max, type) => {
    console.log(`Filtering items for type: ${type}, min: ${min}, max: ${max}`);
    const filteredItems = allData.filter(item => {
      const price = Number(item.Price);
      const isTypeMatch = item.type === type;
      const isPriceMatch = price >= min && price <= max;
      return isTypeMatch && isPriceMatch;
    });
    return filteredItems;
  };

  useEffect(() => {
    console.log(`Category changed to: ${type}, Min Value: ${minValue}, Max Value: ${maxValue}`);
    
    
    setFiltered([]);
    
   
    if (type) {
      const newFilteredItems = filterItems(minValue, maxValue, type);
      setFiltered(newFilteredItems);
      //console checking what data showing
      console.log(newFilteredItems,"new-filtered-items --line 290 :)")
    }
  }, [type, minValue, maxValue]);

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
      <Index />

      <div className="main-filter-screen">
        <div className="filter-list">
          <NavLink to="../" className="home-link-filter">Home</NavLink>
          {filtered.length > 0 ? (
            <h3 className="type-heading">{type} in Pakistan <span className='ads-count'>{filtered.length} Ads</span></h3>
          ) : (
            <h3 className="categories-heading">No items found in this category</h3>
          )}
          <h6 className='filter-heading'>Filters</h6>
          <hr className='filter-hr-break' />
          <h6 className='categories-filter-heading'>Categories</h6>
          <div className="mt-3">
            <NavLink to="../" className="category-link-filter">All Categories</NavLink>
          </div>
          <div>
            {filtered.length > 0 ? (
              <h3 className="type-heading-filter">{type}</h3>
            ) : (
              <h3 className="categories-heading">No items found in this category</h3>
            )}
          </div>
          <div>
            {filtered.map((item) => (
              <div key={item.id}>
                <NavLink to="#" className="type-link-filter">{item.type} {"(10+ Ads)"}</NavLink>
              </div>
            ))}
          </div>
          <hr className='filter-hr-break' />
          <h6 className='categories-filter-heading'>Location</h6>
          <div className="select-containerr select-containerr-filter">
            <i className="fas fa-location-dot"></i>
            <select name="options" id="options" className="fw-semibold">
              <option value="option1">Select Location</option>
              <option value="option2">Sindh</option>
              <option value="option3">Punjab</option>
              <option value="option4">Khyber Pakhtunkhwa</option>
              <option value="option5">Balochistan</option>
              <option value="option6">Gilgit Baltistan</option>
            </select>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          <div>
            {filtered.length > 0 ? (
              <h3 className="location-heading-filter">Pakistan</h3> 
            ) : (
              <h3 className="categories-heading">No items found in this category</h3>
            )}
          </div>
          <div>
            {filtered.map((item) => (
              <div key={item.id}>
                <NavLink to="#" className="location-link-filter">{item.location} {"(20+ Ads)"}</NavLink>
              </div>
            ))}
          </div>
          <div>
            <h6 className='categories-filter-heading fw-bold'>Price</h6>
            <div className="filter-bar">
              <div className="price-inputs">
                <input
                  type="number"
                  value={minValue}
                  onChange={(e) => setMinValue(Number(e.target.value))}
                  placeholder="Min Price"
                  min="0"
                />
                <input
                  type="number"
                  value={maxValue}
                  onChange={(e) => setMaxValue(Number(e.target.value))}
                  placeholder="Max Price"
                  min="0"
                />
              </div>
              <div className="currency">PKR {formatCurrency(maxValue)}</div>
              <ReactSlider
                className="slider"
                value={[minValue, maxValue]}
                onChange={handleSliderChange}
                min={0}
                max={1000000000}
                step={100}
              />
            </div>
          </div>
          <hr className='filter-hr-break' />
          <div className="last-selling-div" onClick={() => openModal(true)}>
            <h5>Want to see your stuff here?</h5>
            <p>Make some extra cash by selling things<br /> in your community. Go on, it's quick and<br /> easy.</p>
            <div className="filter-button-div">
              <Button title={"Start Selling"} backgroundColor="#3a77ff" fontColor="white" />
            </div>
          </div>
          {isModalOpen && (
            <LoginSignupModal
              isLogin={isLogin}
              closeModal={closeModal}
              toggleMode={toggleMode}
            />
          )}
        </div>
        <div className='row category-ads-three'>
          {filtered.map((item) => (
            <div className='col-sm-4' key={item.id}>
              <div className="card addcard mt-5">
                <Link to={`/adscreeninfo/${item.id}`} className='adlink' >
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
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Adscreen;

