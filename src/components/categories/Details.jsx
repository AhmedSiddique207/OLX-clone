import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { Category } from "./Category";
import { Link } from "react-router-dom";



export default function Details() {
    const onClickHandler = () => {};

    const { type } = useParams();
    const item = Category.find((item) => item.type === parseInt(type));

    return (
        <div>
            <div>
                <h3 className="categories-heading">All Categories</h3>
                <div className="categories-grid">
                    {Category.map((item) => (
                        <div key={item.id} className="category-item">
                            <div className="card adcard adcard-border mt-3" onClick={onClickHandler}>
                                <Link to={`/adscreen/${item.type}`} className="adlink">
                                    <div className="card catcard">
                                        <div className="catanchor ">
                                            <div>
                                            <img className="catimg" src={item.image} alt={item.Title} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title cattitle fw-bold">{item.Title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}
