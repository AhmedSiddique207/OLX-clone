import React from "react";


import "../header/buttonStyle/Style.css";

export default function Button({ title, onclick }) {
    return (
        <div >
            <button className="btn  buttonn"   onClick={onclick}>{title}</button>
        </div>
    )

}