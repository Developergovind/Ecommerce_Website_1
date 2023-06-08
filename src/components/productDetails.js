import React, { useEffect, useState } from 'react';
import { getProductDetails } from '../services/products';
import '../components/details.css'

function MenProducts() {
    const [productDetails, setProductDetails] = useState({});
    const [productimages, setProductImages] = useState({});

    const getproduct_Details = async () => {
        const id = JSON.parse(localStorage.getItem("product_id"))
        const data = await getProductDetails(id)
        setProductDetails(data.productDescription[0])
        setProductImages(data.productImages)
    }
    useEffect(() => {
        getproduct_Details();
    }, [])

    return (
        <React.Fragment>
            {console.log("hello world", productDetails)}
            <section className="section-p1 prodetails">
                <div className="single-pro-image">
                    <img
                        src={productDetails.product_image}
                        width="100%"
                        className="mainImg"
                    />

                        <div className="small-image-group">
                            
                            <div className="small-img-column">
                                <img
                                    src={productimages[0]?.product_image}
                                    alt=""
                                    width="100%"
                                    className="small-img"
                                />
                            </div>
                            <div className="small-img-column">
                                <img
                                    src={productimages[1]?.product_image}
                                    alt=""
                                    width="100%"
                                    className="small-img"
                                />
                            </div>
                            <div className="small-img-column">
                                <img
                                    src={productimages[2]?.product_image}
                                    alt=""
                                    width="100%"
                                    className="small-img"
                                />
                            </div>
                            <div className="small-img-column">
                                <img
                                    src={productimages[3]?.product_image}
                                    alt=""
                                    width="100%"
                                    className="small-img"
                                />
                            </div>
                        </div>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="card">
                                <button className='AddTOCART'> <span class="material-symbols-outlined">
                                    shopping_cart
                                </span>Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <button className='AddTOCART'> <span class="material-symbols-outlined">
                                    bolt
                                </span>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-pro-details">
                    <h2>Fashion T Shirts</h2>
                    <h4><span style={{ color: "#008178", fontSize: "25px", float: "left" }}>Product Name :</span>{productDetails.product_name}</h4>
                    <h2><span style={{ color: "#008178", fontSize: "25px", float: "left" }}>Price </span>{`$${productDetails.Price}`}</h2>
                    <span style={{ color: "#008178", fontSize: "25px", float: "left" }}>Select Size </span>
                    <select className='select'>
                        <option>Select Size</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Large</option>
                    </select>
                    <span style={{ color: "#008178", fontSize: "25px", float: "left" }}>Quantity </span>
                    <input type="number" defaultValue={1} min={0} />
                    <h3 style={{ color: "cyan" }}><span style={{ color: "#008178", fontSize: "25px", float: "left", }}>Seller </span>{productDetails.seller}</h3>
                    <h2>Product Details</h2>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam atque
                        optio ex voluptate, illum qui maiores magni eum expedita delectus, eveniet
                        ad? Assumenda quisquam ratione, sed corporis dolore dicta. Consectetur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum
                        ducimus maiores sit quod dolorem reprehenderit accusantium facere, cum
                        tempora culpa eos eligendi, modi expedita hic eaque nam sunt quia! Lorem
                        ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
                        praesentium dolor consequatur quidem iste, harum veritatis optio! Eaque
                        laborum consectetur ipsa et, consequatur minus laudantium sequi, aperiam,
                        quia quod esse.
                    </span>
                </div>
            </section>
        </React.Fragment>
    );
}

export default MenProducts


