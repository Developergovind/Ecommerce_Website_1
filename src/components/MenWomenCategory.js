import React from "react";
import "./web.css"
import { Link } from "react-router-dom";
function MenWomenCategory() {
    // const [categoryId, setCategoryId] = useState("");

    return (
        < React.Fragment >
            <div className="category-heading">
                <h2 style={{ marginLeft: '300px' }}>MEN'S CLOTHING</h2>
                <h2 style={{ marginRight: '300px' }}>WOMEN'S CLOTHING</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card MEN-banner-box category-box">
                            <Link to="/category/men"> <div >
                                <button className="normal">Buy Now</button>
                            </div> </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card women-banner-box banner-box2 category-box">
                            <Link to="/category/women"> <div >
                                <button className="normal ">Buy Now</button>
                            </div> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default MenWomenCategory