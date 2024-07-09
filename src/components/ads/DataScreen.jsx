import React from "react";
import AdsDetails from "./AdsDetails";
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

function DataScreen() {

    let arr = [

        {  id:1,Price: "Rs 6,500,000", image: raize, subtitle: "Toyota Raize  | 2020 | Imported", location: "Gulshan-e-Memar, Karachi ", delivery: "no", brand: "Toyota", condition: "used" },
        {  id:2,Price: "Rs 10,500,000", image: mghs, subtitle: "MG HS | PHEV | 2022", location: "Gulistan-e-Johar, Karachi ", delivery: "Yes", brand: "MG", condition: "New" },
        {  id:3,Price: "Rs 6,000,000", image: city, subtitle: "Honda City | CVT | 2024", location: "Iqbal Town, Karachi ", delivery: "No", brand: "Honda", condition: "used" },
        {  id:4,Price: "Rs 11,500,000", image: vezel, subtitle: "Honda Vezel  | Hybrid | 2021", location: "Korangi Town, Karachi ", delivery: "No", brand: "Honda", condition: "New" },

        { id:5,Price: "Rs 75,500", image: eleven, subtitle: "iPhone 11 | Pta Approved | 64gb", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "iPhone", condition: "used" },
        {  id:6,Price: "Rs 525,000", image: fifteen, subtitle: "iPhone 15 Pro Max | Factory Unlock | 512gb", location: "Clifton, Karachi ", delivery: "Yes", brand: "iPhone", condition: "New" },
        {  id:7,Price: "Rs 120,000", image: tweleve, subtitle: "iPhone 12 Pro | JV | 128gb", location: "Defence Phase 8, Karachi ", delivery: "Yes", brand: "iPhone", condition: "Open Box" },
        {  id:8,Price: "Rs 100,000", image: twelevemini, subtitle: "iPhone 12 Mini | Non Pta | 256gb", location: "Clifton phase 2, Karachi ", delivery: "Yes", brand: "iPhone", condition: "Slightly used" },

        { id:9, Price: "Rs 11,500,000", image: fivehalfmarla, subtitle: "5.5 marla house | Triple Story | Prime Location", location: "Latifabad unit no 6, Hyderabad ", delivery: "-", brand: "Arif Builder", condition: "New Construction" },
        { id:10, Price: "Rs 18,000,000", image: fivemarla, subtitle: "5 marla house | Single Story | Prime Location", location: "Kohsar, Hyderabad ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction" },
        { id:11,Price: "Rs 21,000,000", image: sixmarla, subtitle: "6 marla house | Double Story | Prime Location", location: "Memon Society, Hyderabad ", delivery: "-", brand: "Arif Builder", condition: "New Construction" },
        { id:12, Price: "Rs 18,500,000", image: fivemarlatwo, subtitle: "5 marla house | Triple Story | Prime Location", location: "Liaquat Colony, Hyderabad ", delivery: "-", brand: "Imran Builder", condition: "Old Construction" },

        { id:13 ,Price:"Rs 750,000", image: beneli, subtitle: "T25 beneli  | 2018 | 250cc", location: "Gulshan-e-Memar, Karachi ", delivery: "no", brand: "Beneli", condition: "used" },
        {  id:14,Price: "Rs 1,200,000", image: bse, subtitle: "Bse Dirt Bike | 2020 | 250cc", location: "Gulistan-e-Johar, Karachi ", delivery: "Yes", brand: "BSE", condition: "New" },
        { id:15, Price: "Rs 270,000", image: ybr, subtitle: "Yamaha YBR 125G | 2020 | 125cc", location: "Iqbal Town, Karachi ", delivery: "no", brand: "Yamaha", condition: "used" },
        {  id:16,Price: "Rs 890,000", image: bmw, subtitle: "BMW s1000rr 400 replica  | 2023 | 2023", location: "Korangi Town, Karachi ", delivery: "no", brand: "Local", condition: "New" },

        { id:17, Price: "Rs 30,000", image: table, subtitle: "Office Table  | Attractive Design | Professional look", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new" },
        {  id:18,Price: "Rs 146,000", image: bed, subtitle: "Wedding Bed | Attractive Design | Classy Look", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new" },
        { id:19, Price: "Rs 135,000", image: woodenbed, subtitle: "Wooden Bed  | Attractive Design | Original Wooden", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new" },
        {id:20, Price: "Rs 120,000", image: recliner, subtitle: "Recliner  | 2 seater | Attractive Design ", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new" },





    ]



    return (

        <div>

           
            {arr.map((item, index) => {
                // console.log(`we need to show job description of the job with id ${item.id}`)
                return (
                    <div>
                        <ScreenAd
                            key={index}
                            item={item}
                        />
                    
                    </div>
                    
                )
            })}


        </div>
    )

    
}

export default DataScreen;




