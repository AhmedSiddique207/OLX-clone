import React from "react";
import Details from "./Details";
import "./style.css"
import mobiles from "./images/Mobiles.png"
import vehicles from "./images/Vehicles.png"
import propertySale from "./images/Property for Sale.png"
import propertyRent from "./images/Property for Rent.png"
import electronic from "./images/Electronic Home Appliances.png"
import bikes from "./images/Bikes.png"
import agriculture from "./images/Business Industrial Agriculture.png"
import services from "./images/Services.png"
import jobs from "./images/Jobs.png"
import animals from "./images/Animals.png"
import Furniture from "./images/Furniture Home Decor.png"
import fashion from "./images/Fashion Beauty.png"
import books from "./images/Books Sports Hobbies.png"
import kids from "./images/Kids.png"




function Category() {
    let arr = [
        { Title: "Mobiles", image: mobiles,link:"#" },
        { Title: "Vehicles", image: vehicles, link:"#" },
        { Title: "Property For Sale", image: propertySale , link:"#" },
        { Title: "Property For Rent", image: propertyRent , link:"#" },
        { Title: "Electronics & Home Appliances", image: electronic , link:"#"},
        { Title: "Bikes", image: bikes , link:"#"},
        { Title: "Business Industrial & Agriculture", image: agriculture , link:"#" },
        { Title: "Services", image: services , link:"#"},
        { Title: "Jobs", image: jobs , link:"#"},
        { Title: "Animals", image: animals , link:"#"},
        { Title: "Furniture & Home Decor", image: Furniture , link:"#"},
        { Title: "Fashion & Beauty", image: fashion , link:"#"},
        { Title: "Books, Sports & Hobbies", image: books , link:"#"},
        { Title: "Kids", image: kids , link:"#"},
     ]



    return (

        <div>

            <h3 className="categories-heading">All Categories</h3>

            <div className='row mt-4'>

                {arr.map((item, index) => {
                    return (
                        <div className='col-sm-2'>
                       <Details title={item.Title} image={item.image} link={item.link} />
                        </div>

                    )
                })}


            </div>



        </div>
    )


}


export default Category;