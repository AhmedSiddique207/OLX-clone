import React from "react";

export default function Inputfield({placeholder,name,id,value,handleChange,handleBlur,style} ) {
    return (
        <div >
           <input
                        placeholder={placeholder}
                        id={id}
                        name={name}
                        className="rounded"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ style }}
                       
                    />
                 
        </div>
    )

}