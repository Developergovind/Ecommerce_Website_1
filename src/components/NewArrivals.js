import React, { useState, useEffect } from 'react';
import "./web.css"
import { getNewArrivalProducts } from "../services/getPRoductList";   
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
function NewArrivals() {

    const [products, setProducts] = useState("");
    const navigate = useNavigate();

    async function GetProductList() {
        const data = await getNewArrivalProducts()
        setProducts(data)
    }
    const handleClick = async (id) => {
        localStorage.setItem("product_id", JSON.stringify(id))
        navigate("/productdetails")
    }

    useEffect(() => {
        GetProductList()
    }, [])
    return (
        <React.Fragment>
            <section className="product1 section-p1">
                <h1 style={{ textAlign: 'center' }}>New Arrivals
                </h1>
                <p style={{ textAlign: 'center' }}>Summer collection new Modern Design</p>
                <Link style={{ textDecoration: 'none' }} to={"/productdetails"}>
                    <div className="pro-container">
                        {products && products.map((item, index) => {
                            return (
                                <>
                                    <div className="pro" onClick={()=>{
                                        handleClick(item.id)
                                    }}>
                                        <img src={item.product_image} alt="" />
                                        <div className="des">
                                            <span>{item.brand_name}</span>
                                            <h5>{item.product_name}</h5>
                                            <span>{item.delivery_type}</span>
                                            <div className="star">
                                                <span className="material-symbols-outlined">star</span>
                                                <span className="material-symbols-outlined">star</span>
                                                <span className="material-symbols-outlined">star</span>
                                                <span className="material-symbols-outlined">star</span>
                                                <span className="material-symbols-outlined">star</span>

                                            </div>
                                            <h4>{`$${item.Price}`}</h4>
                                        </div>
                                        <a href=""><span className="material-symbols-outlined cart"> shopping_cart</span></a>

                                    </div>
                                </>
                            );
                        })}
                    </div>
                </Link>
            </section>

        </React.Fragment>
    );
}

export default NewArrivals