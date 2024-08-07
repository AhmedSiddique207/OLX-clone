import React from "react";
import AdsDetails from "./AdsDetails";
import ScreenAd from "./ScreenAd";
import "./design.css"
import raize from "./images/raize.webp"
import raizetwo from "./images/raize2.webp"
import raizethree from "./images/raize3.webp"
import mghs from "./images/mghs.webp"
import mghstwo from "./images/mghs2.webp"
import mghsthree from "./images/mghs3.webp"
import city from "./images/city.webp"
import citytwo from "./images/city2.webp"
import citythree from "./images/city3.webp"
import vezel from "./images/vezel.jpeg"
import vezeltwo from "./images/vezel2.webp"
import vezelthree from "./images/vezel3.webp"
import eleven from "./images/iphone11.webp"
import eleventwo from "./images/iphone112.webp"
import eleventhree from "./images/iphone113.webp"
import twelevemini from "./images/iphone12mini.webp"
import tweleveminitwo from "./images/iphone12mini2.webp"
import tweleveminithree from "./images/iphone12mini3.webp"
import tweleve from "./images/iphone12pro.webp"
import twelevetwo from "./images/iphone12pro2.webp"
import twelevethree from "./images/iphone12pro3.webp"
import fifteen from "./images/iphone15promax.webp"
import fifteentwo from "./images/iphone15promax2.webp"
import fifteenthree from "./images/iphone15promax3.webp"
import fivehalfmarla from "./images/5.5marla.webp"
import fivehalfmarlatwo from "./images/5.5marla2.webp"
import fivehalfmarlathree from "./images/5.5marla3.webp"
import fivemarla from "./images/5marla.webp"
import fivemarlatwoo from "./images/5marla22.webp"
import fivemarlathree from "./images/5marla23.webp"
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



export let arr = [
   
    { id: 1, subtitle: "Toyota Raize  | 2020 | Imported", location: "Gulshan-e-Memar, Karachi ", delivery: "no", brand: "Toyota", condition: "used", Title: "Toyota Raize 2020", Description: "Toyota Raize Imported", Price: "Rs 6,500,000", image: raize, subtitle: "Toyota Raize  | 2020 | Imported", location: "Gulshan-e-Memar, Karachi ", delivery: "no", brand: "Toyota", condition: "used",since:"nov 2007",username:"Ahmed",imagetwo:raizetwo,imagethree:raizethree },
    { id: 2, subtitle: "MG HS | PHEV | 2022", location: "Gulistan-e-Johar, Karachi ", delivery: "Yes", brand: "MG", condition: "New", Title: "MG HS PHEV 2022", Description: "MG HS phev", Price: "Rs 10,500,000", image: mghs, subtitle: "MG HS | PHEV | 2022", location: "Gulistan-e-Johar, Karachi ", delivery: "Yes", brand: "MG", condition: "New",since:"july 2014",username:"Arfeen",imagetwo:mghstwo,imagethree:mghsthree },
    { id: 3, subtitle: "Honda City | CVT | 2024", location: "Iqbal Town, Karachi ", delivery: "No", brand: "Honda", condition: "used", Title: "Honda City 1.2 CVT 2024 ", Description: "Honda City CVT", Price: "Rs 6,000,000", image: city, subtitle: "Honda City | CVT | 2024", location: "Iqbal Town, Karachi ", delivery: "no", brand: "Honda", condition: "used",since:"sep 2018",username:"Amin", imagetwo:citytwo,imagethree:citythree },
    { id: 4, subtitle: "Honda Vezel  | Hybrid | 2021", location: "Korangi Town, Karachi ", delivery: "No", brand: "Honda", condition: "New", Title: "Honda Vezel Hybrid 2021", Description: "Honda Vezel Z Pakage", Price: "Rs 11,500,000", image: vezel, subtitle: "Honda Vezel  | Hybrid | 2021", location: "Korangi Town, Karachi ", delivery: "no", brand: "Honda", condition: "New",since:"apr 2020",username:"Siddique" ,imagetwo:vezeltwo,imagethree:vezelthree},

    { id: 5, subtitle: "iPhone 11 | Pta Approved | 64gb", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "iPhone", condition: "used", Title: "iPhone 11", Description: "64gb | Pta Approved", Price: "Rs 75,500", image: eleventwo, subtitle: "iPhone 11 | Pta Approved | 64gb", location: "Gulshan-e-Iqbal, Karachi ", delivery: "Yes", brand: "iPhone", condition: "used",since:"aug 2002",username:"Adamji",imagetwo:eleven,imagethree:eleventhree },
    { id: 6, subtitle: "iPhone 15 Pro Max | Factory Unlock | 512gb", location: "Clifton, Karachi ", delivery: "Yes", brand: "iPhone", condition: "New", Title: "iPhone 15 Pro Max", Description: "512gb | Factory unlock", Price: "Rs 525,000", image: fifteen, subtitle: "iPhone 15 Pro Max | Factory Unlock | 512gb", location: "Clifton, Karachi ", delivery: "Yes", brand: "iPhone", condition: "New",since:"aug 2005",username:"Shoaib",imagetwo:fifteentwo,imagethree:fifteenthree },
    { id: 7, subtitle: "iPhone 12 Pro | JV | 128gb", location: "Defence Phase 8, Karachi ", delivery: "Yes", brand: "iPhone", condition: "Open Box", Title: "iPhone 12 Pro ", Description: "128gb | JV", Price: "Rs 120,000", image: tweleve, subtitle: "iPhone 12 Pro | JV | 128gb", location: "Defence Phase 8, Karachi ", delivery: "Yes", brand: "iPhone", condition: "Open Box",since:"june 2011",username:"Shafay",imagetwo:twelevetwo,imagethree:twelevethree },
    { id: 8, subtitle: "iPhone 12 Mini | Non Pta | 256gb", location: "Clifton phase 2, Karachi ", delivery: "Yes", brand: "iPhone", condition: "Slightly used", Title: "iPhone 12 Mini", Description: "256gb | Non Pta", Price: "Rs 100,000", image: twelevemini, subtitle: "iPhone 12 Mini | Non Pta | 256gb", location: "Clifton phase 2, Karachi ", delivery: "Yes", brand: "iPhone", condition: "Slightly used",since:"oct 2006",username:"Arshmaan",imagetwo:tweleveminitwo,imagethree:tweleveminithree  },

    { id: 9, subtitle: "5.5 marla house | Triple Story | Prime Location", location: "Latifabad unit no 6, Hyderabad ", delivery: "-", brand: "Arif Builder", condition: "New Construction", Title: "5.5 Marla House", Description: "Triple Story | Latifabad unit no 6 hyd ", Price: "Rs 11,500,000", image: fivehalfmarla, subtitle: "5.5 marla house | Triple Story | Prime Location", location: "Latifabad unit no 6, Hyderabad ", delivery: "-", brand: "Arif Builder", condition: "New Construction",since:"feb 2018",username:"Asfahaan",imagetwo:fivehalfmarlatwo,imagethree:fivehalfmarlathree },
    { id: 10, subtitle: "5 marla house | Single Story | Prime Location", location: "Kohsar, Hyderabad ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction", Title: "5 Marla House", Description: "Single Story | Kohsar hyd", Price: "Rs 18,000,000", image: fivemarla, subtitle: "5 marla house | Single Story | Prime Location", location: "Kohsar, Hyderabad ", delivery: "-", brand: "Imran Builder", condition: "Renovated Construction",since:"june 2013",username:"Abhiyaan",imagetwo:fivemarlatwoo,imagethree:fivemarlathree},
    { id: 11, subtitle: "6 marla house | Double Story | Prime Location", location: "Memon Society, Hyderabad ", delivery: "-", brand: "Arif Builder", condition: "New Construction", Title: "6 Marla House", Description: "Double Story | Memon Society hyd", Price: "Rs 21,000,000", image: sixmarla, subtitle: "6 marla house | Double Story | Prime Location", location: "Memon Society, Hyderabad ", delivery: "-", brand: "Arif Builder", condition: "New Construction",since:"sep 2019",username:"Rohaan",imagetwo:fivemarlatwoo,imagethree:fivemarlathree },
    { id: 12, subtitle: "5 marla house | Triple Story | Prime Location", location: "Liaquat Colony, Hyderabad ", delivery: "-", brand: "Imran Builder", condition: "Old Construction", Title: "5 Marla House ", Description: "Triple Story | Liaquat Colony hyd", Price: "Rs 18,500,000", image: fivemarlatwo, subtitle: "5 marla house | Triple Story | Prime Location", location: "Liaquat Colony, Hyderabad ", delivery: "-", brand: "Imran Builder", condition: "Old Construction",since:"dec 2013",username:"Hamza",imagetwo:fivemarlatwoo,imagethree:fivemarlathree },

    { id: 13, Price: "Rs 750,000", image: beneli, subtitle: "T25 beneli  | 2018 | 250cc", location: "Gulshan-e-Memar, Karachi ", delivery: "no", brand: "Beneli", condition: "used", Title: "T25 beneli", Description: "2018 | 250cc", Price: "Rs 750,000", image: beneli, subtitle: "T25 beneli  | 2018 | 250cc", location: "Gulshan-e-Memar, Karachi ", delivery: "no", brand: "Beneli", condition: "used",since:"march 2011",username:"Sameer",imagetwo:fivemarlatwoo,imagethree:fivemarlathree },
    { id: 14, Price: "Rs 1,200,000", image: bse, subtitle: "Bse Dirt Bike | 2020 | 250cc", location: "Gulistan-e-Johar, Karachi ", delivery: "Yes", brand: "BSE", condition: "New", Title: "Bse Dirt Bike  ", Description: "2020 | 250cc", Price: "Rs 1,200,000", image: bse, subtitle: "Bse Dirt Bike | 2020 | 250cc", location: "Gulistan-e-Johar, Karachi ", delivery: "Yes", brand: "BSE", condition: "New",since:"july 2016" ,username:"Abu Zar",imagetwo:fivemarlatwoo,imagethree:fivemarlathree},
    { id: 15, Price: "Rs 270,000", image: ybr, subtitle: "Yamaha YBR 125G | 2020 | 125cc", location: "Iqbal Town, Karachi ", delivery: "no", brand: "Yamaha", condition: "used", Title: "Yamaha YBR 125G ", Description: "2020 | 125cc ", Price: "Rs 270,000", image: ybr, subtitle: "Yamaha YBR 125G | 2020 | 125cc", location: "Iqbal Town, Karachi ", delivery: "no", brand: "Yamaha", condition: "used",since:"may 2017",username:"Ameer Hamza",imagetwo:fivemarlatwoo,imagethree:fivemarlathree },
    { id: 16, Price: "Rs 890,000", image: bmw, subtitle: "BMW s1000rr 400 replica  | 2023 | 2023", location: "Korangi Town, Karachi ", delivery: "no", brand: "Local", condition: "New", Title: "BMW s1000rr replica 400", Description: "2023 | 400cc", Price: "Rs 890,000", image: bmw, subtitle: "BMW s1000rr 400 replica  | 2023 | 2023", location: "Korangi Town, Karachi ", delivery: "no", brand: "Local", condition: "New",since:"sep 2018",username:"Farooq",imagetwo:fivemarlatwoo,imagethree:fivemarlathree },

    { id: 17, subtitle: "Office Table  | Attractive Design | Professional look", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new", Title: "Office Table", Description: "Professional Office Table", Price: "Rs 30,000", image: table, subtitle: "Office Table  | Attractive Design | Professional look", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new",since:"nov 2011",username:"Aslam",imagetwo:fivemarlatwoo,imagethree:fivemarlathree },
    { id: 18, subtitle: "Wedding Bed | Attractive Design | Classy Look", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new", Title: "Wedding Bed", Description: "New Wedding Furniture Bed", Price: "Rs 146,000", image: bed, subtitle: "Wedding Bed | Attractive Design | Classy Look", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new",since:"dec 2010",username:"Faheem",imagetwo:fivemarlatwoo,imagethree:fivemarlathree },
    { id: 19, subtitle: "Wooden Bed  | Attractive Design | Original Wooden", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new", Title: "Wooden Bed", Description: "Real Wooden Bed", Price: "Rs 135,000", image: woodenbed, subtitle: "Wooden Bed  | Attractive Design | Original Wooden", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new",since:"jan 2009",username:"Ahmed",imagetwo:fivemarlatwoo,imagethree:fivemarlathree },
    { id: 20, subtitle: "Recliner  | 2 seater | Attractive Design ", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new", Title: "Sofa Recliner ", Description: "Two Seater Recliner", Price: "Rs 120,000", image: recliner, subtitle: "Recliner  | 2 seater | Attractive Design ", location: "Chandni opposite Kaka Bakery, Hyderabad ", delivery: "yes", brand: "Bandook Wala Furniture House", condition: "new",since:"feb 2008",username:"Yasin",imagetwo:fivemarlatwoo,imagethree:fivemarlathree },





]







