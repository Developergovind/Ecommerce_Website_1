import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/products';
import { Link } from 'react-router-dom';
function MenProducts() {
    const [products, setProducts] = useState("");

    async function GetProductList() {
        const data = await getProducts(3)
        setProducts(data)
    }
    useEffect(() => {
        GetProductList()
    }, [])
    return (
        <React.Fragment>
            {console.log(products)}
            <section className="product1 section-p1">
                <h1 style={{ textAlign: 'center' }}>New Collection Bonanza Sale
                </h1>
                <p style={{ textAlign: 'center' }}>Summer collection new Modern Design</p>
                <Link style={{ textDecoration: 'none' }} to={"/productdetails"}>
                    <div className="pro-container">
                        {products && products.map((item, index) => {
                            return (
                                <>
                                    <div className="pro">
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

export default MenProducts


