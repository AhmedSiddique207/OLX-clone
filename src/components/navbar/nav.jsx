// import React from 'react'

// //import style
// import "./stylesheet.css"

// export default function Nav() {
//   return (
//     <>
//       <nav class="navbar navbar-expand-lg nav-cat">
//         <div class="container-fluid">
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav">



//               <div class="dropdown">

//                 <a class="nav-link navi active dropdown-toggle fw-semibold" aria-current="page" data-bs-toggle="dropdown" aria-expanded="false">All Categories</a>


//                 <ul class="dropdown-menu">
//                   <li><a class="dropdown-item" href="../adscreen/mobile">Mobiles Phones</a></li>
//                   <hr />
//                   <li><a class="dropdown-item" href="../adscreen/vehicles">Vehicles</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/sale">Property for Sale</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/rent">Property for Rent</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/electronics">Electronics & Home Appliances</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/bikes">Bikes</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/business">Business Industrial & Agriculture</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/services">Services</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/jobs">Jobs</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/animals">Animals</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/furniture">Furniture & Home Decor</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/books">Books, Sports & Hobbies</a></li><hr />
//                   <li><a class="dropdown-item" href="../adscreen/kids">Kids</a></li>



//                 </ul>
//               </div>



//               <li class="nav-item">
//                 <a class="nav-link navi  " aria-current="page" href="../adscreen/mobile">Mobile Phones</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link navi" href="../adscreen/vehicles">Cars</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link navi" href="../adscreen/bikes">Motorcycles</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link navi" href="../adscreen/rent">Houses</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link navi" href="../adscreen/services">Video Audios</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link navi" href="../adscreen/sale">Land & Plots</a>
//               </li>

//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }


import React from 'react';
import { NavLink } from 'react-router-dom';
import "./stylesheet.css";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-cat">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <div className="dropdown">
                <NavLink
                  className="nav-link navi active dropdown-toggle fw-semibold"
                  aria-current="page"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Categories
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/mobile"
                      activeClassName="active"
                    >
                      Mobiles Phones
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/vehicles"
                      activeClassName="active"
                    >
                      Vehicles
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/sale"
                      activeClassName="active"
                    >
                      Property for Sale
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/rent"
                      activeClassName="active"
                    >
                      Property for Rent
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/electronics"
                      activeClassName="active"
                    >
                      Electronics & Home Appliances
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/bikes"
                      activeClassName="active"
                    >
                      Bikes
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/business"
                      activeClassName="active"
                    >
                      Business Industrial & Agriculture
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/services"
                      activeClassName="active"
                    >
                      Services
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/jobs"
                      activeClassName="active"
                    >
                      Jobs
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/animals"
                      activeClassName="active"
                    >
                      Animals
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/furniture"
                      activeClassName="active"
                    >
                      Furniture & Home Decor
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/books"
                      activeClassName="active"
                    >
                      Books, Sports & Hobbies
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="../adscreen/kids"
                      activeClassName="active"
                    >
                      Kids
                    </NavLink>
                  </li>
                </ul>
              </div>

              <li className="nav-item">
                <NavLink
                  className="nav-link navi"
                  aria-current="page"
                  to="../adscreen/mobile"
                  activeClassName="active"
                >
                  Mobile Phones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link navi"
                  to="../adscreen/vehicles"
                  activeClassName="active"
                >
                  Cars
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link navi"
                  to="../adscreen/bikes"
                  activeClassName="active"
                >
                  Motorcycles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link navi"
                  to="../adscreen/rent"
                  activeClassName="active"
                >
                  Houses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link navi"
                  to="../adscreen/services"
                  activeClassName="active"
                >
                  Video Audios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link navi"
                  to="../adscreen/sale"
                  activeClassName="active"
                >
                  Land & Plots
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
