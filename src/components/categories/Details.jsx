import React from "react";
import "./style.css";



export default function Details(props) {
    const {title,image,link} = props
    return (
       
            
                <div 
                class="card catcard"
                >
                    <a href={link} className="catanchor" target="_blank">
                    <img className="catimg" src={image} ></img>
                 <div class="card-body">

                        <h5 class="card-title cattitle">{title}</h5>

                    

                      
                    </div>
                    </a>
                </div>
         

     
    )
}