import React from "react";


import "./Style.css";

export default function Button({ title, onClick, backgroundColor, fontColor,icon }) {
    return (
        <div >
            <button type="button" className="buttonnn " onClick={onClick} style={{ backgroundColor, color: fontColor }}>
            {icon && <i className={`button-icon ${icon}`}></i>}
                {title}
            </button>
        </div>
    )

}