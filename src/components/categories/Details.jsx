// import React from "react";
// import "./style.css";
// import { useParams } from "react-router-dom";
// import { Category } from "./Category";
// import { Link } from "react-router-dom";



// export default function Details() {
//     const onClickHandler = () => {

//     };
//     const { type } = useParams();
//     const item = Category.find((item) => item.type === parseInt(type));
//     // console.log("Found item:", item);
//     return (

//         <div>
//             <div>
//                 <h3 className="categories-heading">All Categories</h3>


//                 <div className='row  '>
//                     {Category.map((item) => {
//                         return (
//                             <div className="col-lg-2">
//                                 <div key={item.id} className="card adcard adcard-border mt-3" onClick={onClickHandler}>
//                                     <Link to={`/adscreen/${item.type}`} className='adlink' >
//                                         <div class="card catcard">

//                                             <span className="catanchor" >
//                                                 <img className="catimg" src={item.image} ></img>
//                                                 <div class="card-body">

//                                                     <h5 class="card-title cattitle">{item.Title}</h5>




//                                                 </div>
//                                             </span>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </div>
//                         )
//                     })}

//                 </div>

//             </div>
//         </div>


//     )
// }


import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { Category } from "./Category";
import { Link } from "react-router-dom";

export default function Details() {
    const onClickHandler = () => {};

    const { type } = useParams();
    const item = Category.find((item) => item.type === parseInt(type));

    return (
        <div>
            <div>
                <h3 className="categories-heading">All Categories</h3>
                <div className="categories-grid">
                    {Category.map((item) => (
                        <div key={item.id} className="category-item">
                            <div className="card adcard adcard-border mt-3" onClick={onClickHandler}>
                                <Link to={`/adscreen/${item.type}`} className="adlink">
                                    <div className="card catcard">
                                        <span className="catanchor">
                                            <img className="catimg" src={item.image} alt={item.Title} />
                                            <div className="card-body">
                                                <h5 className="card-title cattitle fw-semibold">{item.Title}</h5>
                                            </div>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
