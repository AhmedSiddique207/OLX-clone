import React from "react";
import AdsDetails from "./AdsDetails";
import "./design.css"
import raize from "./images/raize.webp"
import mghs from "./images/mghs.webp"
import city from "./images/city.webp"
import vezel from "./images/vezel.webp"
import eleven from "./images/iphone11.webp"
import twelevemini from "./images/iphone12mini.webp"
import tweleve  from "./images/iphone12pro.webp"
import fifteen from "./images/iphone15promax.webp"
import fivehalfmarla from "./images/5.5marla.webp"
import fivemarla from "./images/5marla.webp"
import fivemarlatwo  from "./images/5marla2.webp"
import sixmarla from "./images/6marla.webp"
import bmw from "./images/bmw.webp"
import beneli from "./images/beneli.webp"
import bse from "./images/bse.webp"
import ybr from "./images/ybr.webp"
import bed from "./images/bed.webp"
import woodenbed from "./images/wooden bed.webp"
import table from "./images/office table.webp"
import recliner from "./images/recliner.jfif"

function Ads() {

    let arr = [
        { Title: "Toyota Raize 2020", Description: "Toyota Raize Imported", Price: "Rs 6,500,000", image: raize,  },
        { Title: "MG HS PHEV 2022", Description: "MG HS phev", Price: "Rs 10,500,000", image: mghs,  },
        { Title: "Honda City 1.2 CVT 2024 ", Description: "Honda City CVT", Price: "Rs 6,000,000", image: city,  },
        { Title: "Honda Vezel Hybrid 2021", Description: "Honda Vezel Z Pakage", Price: "Rs 11,500,000", image: vezel,  },



        { Title: "iPhone 11", Description: "64gb | Pta Approved", Price: "Rs 75,500", image: eleven,  },
        { Title: "iPhone 15 Pro Max", Description: "512gb | Factory unlock", Price: "Rs 525,000", image: fifteen, },
        { Title: "iPhone 12 Pro ", Description: "128gb | JV", Price: "Rs 120,000", image: tweleve, },
        { Title: "iPhone 12 Mini", Description: "256gb | Non Pta", Price: "Rs 100,000", image: twelevemini, },





        { Title: "5.5 Marla House", Description: "Triple Story | Latifabad unit no 6 hyd ", Price: "Rs 11,500,000", image: fivehalfmarla,  },
        { Title: "5 Marla House", Description: "Single Story | Kohsar hyd", Price: "Rs 18,000,000", image: fivemarla, },
        { Title: "6 Marla House", Description: "Double Story | Memon Society hyd", Price: "Rs 21,000,000", image: sixmarla,  },
        { Title: "5 Marla House ", Description: "Triple Story | Liaquat Colony hyd", Price: "Rs 18,500,000", image: fivemarlatwo,  },




        
        { Title: "T25 beneli", Description: "2018 | 250cc", Price: "Rs 750,000", image: beneli, },
        { Title: "Bse Dirt Bike  ", Description: "2020 | 250cc", Price: "Rs 1,200,000", image: bse,  },
        { Title: "Yamaha YBR 125G ", Description: "2020 | 125cc ", Price: "Rs 270,000", image: ybr,  },
        { Title: "BMW s1000rr replica 400", Description: "2023 | 400cc", Price: "Rs 890,000", image: bmw, },





        
        { Title: "Office Table", Description: "Professional Office Table", Price: "Rs 30,000", image: table,  },
        { Title: "Wedding Bed", Description: "New Wedding Furniture Bed", Price: "Rs 146,000", image: bed,  },
        { Title: "Wooden Bed", Description: "Real Wooden Bed", Price: "Rs 135,000", image: woodenbed,  },
        { Title: "Sofa Recliner ", Description: "Two Seater Recliner", Price: "Rs 120,000", image: recliner,  },




        
     ]



    return (

        <div>

            <h3 className="moreAds-heading mt-3">More Ads</h3>

            <div className='row mt-4'>

                {arr.map((item, index) => {
                    return (
                        <div className='col-sm-3'>
                            <AdsDetails title={item.Title} Description={item.Description} Price={item.Price} image={item.image} link={item.link} />
                        </div>

                    )
                })}


            </div>



        </div>
    )


}
export default Ads; 