import React, { useState, useEffect } from 'react';
// import { productSearch } from '../services/products'; 
function ProductFound() {
    const [products, setProducts] = useState("")


    try {
        useEffect(() => {
            setProducts(JSON.parse(localStorage.getItem("productData")))
        }, [])

    } catch (error) {
        console.log(error);
    }

    return (
        <React.Fragment>
            <section className="product1 section-p1">
                <div className="pro-container">
                    {
                        products && products.map((item, index) => {
                            return (
                                <>
                                    <div className="pro">
                                        <img src={item.product_image} alt="" />
                                        <div className="des">
                                            <span >{item.brand_name}</span>
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
            </section>

        </React.Fragment>
    );
}
function ProductNotFound() {
    return (
        <>
            <h1>Products not found related with your search</h1>
        </>
    );
}
function SearchProducts(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <ProductFound />;
    }
    else {
        console.log("hello wordl");
        return <ProductNotFound isGoal={false}/>;
    }

}

export default SearchProducts