import React from 'react';
import { Link } from 'react-router-dom';
import { mobile,vehicles,sale,rent,electronics,bikes,business,services,jobs,animals,furniture,fashion,books,kids } from './data';
import "./design.css"
import Index from "../header/Index"
import Footer from "../footer/Footer"
import { useParams } from "react-router-dom";


const Adscreen = () => {

    const onClickHandler = () => {
        
    };
    
    let { type } = useParams();
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
    // const item = type.find((item) => item.type === parseInt(type));
    console.log("Found item:", type);
    const filteredItems = allData.filter(item => item.type === type);

    return (
        <div >
       <Index/>
            <div className='row ps-5'>

                {filteredItems.map((item) => (
                    <div className='col-sm-3'>
                        <div key={item.type} className="card adddcard mt-5" onClick={onClickHandler}>
                            <Link to={`/adscreeninfo/${item.id}`} className='adlink' >
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
                ))}

            </div>
            <Footer/>
        </div>
    );
};

export default Adscreen;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { mobile, vehicles } from './data';
// import "./design.css"
// import Index from "../header/Index"
// import Footer from "../footer/Footer"
// import { useParams } from "react-router-dom";


// const Adscreen = () => {
//     const { type } = useParams();

//     // Filter the data based on the type parameter
//     let filteredData = mobile.filter(item => item.type === type);
    
//     const onClickHandler = () => {
//         // Handle click event
//     };

//     return (
//         <div>
//        <Index/>
//             <div className='row '>

//                 {filteredData.map((item) => (
//                     <div className='col-sm-3'>
//                         <div key={item.type} className="card adcard mt-5" onClick={onClickHandler}>
//                             <Link to={`/adscreeninfo/${item.id}`} className='adlink' >
//                                 <span className="adlink">
//                                     <img className="adimg" src={item?.image} alt={item?.Title} />
//                                     <div className="card-body">
//                                         <h5 className="card-title adtitle">
//                                             {item?.Title}
//                                             <i className="fa-solid fa-heart icon-heart"></i>
//                                         </h5>
//                                         <p className="card-text addescription">{item?.Description}</p>
//                                         <p className="card-text adprice fw-semibold fs-5">{item?.Price}</p>
//                                     </div>
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>
//                 ))}

//             </div>
//             <Footer/>
//         </div>
//     );
// };

// export default Adscreen;
