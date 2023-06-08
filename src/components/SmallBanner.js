import React from "react";
import "./web.css"
function smallBanner() {
    return (
        <React.Fragment>

            <section className="sm-banner section-p1" >
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h1>Buy 1 Get 1 Free</h1>
                    <span> The best classic dress is on sale at MyShop</span>
                    <button className="white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>Spring Summer</h4>
                    <h1>Upcoming Season</h1>
                    <span> The best classic dress is on sale at MyShop</span>
                    <button className="white">Collection</button>
                </div>
            </section>
        </React.Fragment>
    );
}

export default smallBanner