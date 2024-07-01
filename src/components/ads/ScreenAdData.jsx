import React from "react";
import ScreenAd from "./ScreenAd";
import "./design.css"
import raize from "./images/raize.webp"
import mghs from "./images/mghs.webp"
import city from "./images/city.webp"
import vezel from "./images/vezel.webp"
import eleven from "./images/iphone11.webp"
import twelevemini from "./images/iphone12mini.webp"
import tweleve from "./images/iphone12pro.webp"
import fifteen from "./images/iphone15promax.webp"
import fivehalfmarla from "./images/5.5marla.webp"
import fivemarla from "./images/5marla.webp"
import fivemarlatwo from "./images/5marla2.webp"
import sixmarla from "./images/6marla.webp"
import bmw from "./images/bmw.webp"
import beneli from "./images/beneli.webp"
import bse from "./images/bse.webp"
import ybr from "./images/ybr.webp"
import bed from "./images/bed.webp"
import woodenbed from "./images/wooden bed.webp"
import table from "./images/office table.webp"
import recliner from "./images/recliner.jfif"

function ScreenAdData() {

    let arr = [
        { price: "Rs 6,500,000", subtitle: "Toyota Raize  | 2020 | Imported", location: "Gulshan-e-Memar, Karachi ", delivery: "no", brand: "Toyota", condition: "used", image: raize },

        { price: "Rs 10,500,000", subtitle: "MG HS | PHEV | 2022", location: "Gulistan-e-Johar, Karachi ", delivery: "Yes", brand: "MG", condition: "New", image: mghs },

        { price: "Rs 6,000,000", subtitle: "Honda City | CVT | 2024", location: "Iqbal Town, Karachi ", delivery: "no", brand: "Honda", condition: "used", image: city },

        { price: "Rs 11,500,000", subtitle: "Honda Vezel  | Hybrid | 2021", location: "Korangi Town, Karachi ", delivery: "no", brand: "Honda", condition: "New", image: vezel },





        { price: "Rs 75,500", subtitle: "iPhone 11 | Pta Approved | 64gb", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "iPhone", condition: "used", image: eleven },

        { price: "Rs 525,000", subtitle: "iPhone 15 Pro Max | Factory Unlock | 512gb", location: "Clifton, Karachi ", delivery: "Yes", brand: "iPhone", condition: "New", image: fifteen },

        { price: "Rs 120,000", subtitle: "iPhone 12 Pro | JV | 128gb", location: "Defence Phase 8, Karachi ", delivery: "Yes", brand: "iPhone", condition: "Open Box", image: tweleve },

        { price: "Rs 100,000", subtitle: "iPhone 12 Mini | Non Pta | 256gb", location: "Clifton phase 2, Karachi ", delivery: "Yes", brand: "iPhone", condition: "Slightly used", image: twelevemini },




        { price: "Rs 11,500,000", subtitle: "5.5 marla house | Triple Story | Prime Location", location: "Latifabad unit no 6, Hyderabad ", delivery: "-", brand: "Arif Builder", condition: "New Construction", image: fivehalfmarla },

        { price: "Rs 18,000,000", subtitle: "5 marla house | Single Story | Prime Location", location: "Kohsar, Hyderabad ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", image: fivemarla },

        { price: "Rs 21,000,000", subtitle: "6 marla house | Double Story | Prime Location", location: "Memon Society, Hyderabad ", delivery: "-", brand: "Arif Builder", condition: "New Construction", image: sixmarla },

        { price: "Rs 18,500,000", subtitle: "5 marla house | Triple Story | Prime Location", location: "Liaquat Colony, Hyderabad ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", image: fivemarlatwo },



        { price: "Rs 750,000", subtitle: "T25 beneli  | 2018 | 250cc", location: "Gulshan-e-Memar, Karachi ", delivery: "no", brand: "Beneli", condition: "used", image: beneli },

        { price: "Rs 1,200,000", subtitle: "Bse Dirt Bike | 2020 | 250cc", location: "Gulistan-e-Johar, Karachi ", delivery: "Yes", brand: "BSE", condition: "New", image: bse },

        { price: "Rs 270,000", subtitle: "Yamaha YBR 125G | 2020 | 125cc", location: "Iqbal Town, Karachi ", delivery: "no", brand: "Yamaha", condition: "used", image: ybr },

        { price: "Rs 890,000", subtitle: "BMW s1000rr 400 replica  | 2023 | 2023", location: "Korangi Town, Karachi ", delivery: "no", brand: "Local", condition: "New", image: bmw },



        { price: "Rs 30,000", subtitle: "Office Table  | Attractive Design | Professional look", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new", image: table },

        { price: "Rs 146,000", subtitle: "Wedding Bed | Attractive Design | Classy Look", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new", image: bed },

        { price: "Rs 135,000", subtitle: "Wooden Bed  | Attractive Design | Original Wooden", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new", image: woodenbed },

        { price: "Rs 120,000", subtitle: "Recliner  | 2 seater | Attractive Design ", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new", image: recliner },

    ]



    return (

        <div>




            {arr.map((item, index) => {
                return (

                    <ScreenAd subtitle={item.subtitle} location={item.location} price={item.price} image={item.image} delivery={item.delivery} brand={item.brand} condition={item.condition} />


                )
            })}

        </div>





    )


}
export default ScreenAdData; 