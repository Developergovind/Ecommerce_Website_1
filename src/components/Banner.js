import React from "react";
import "./web.css"
function Banner() {
    return (
        <React.Fragment>

            <section className="banner section-p1">
                <h4>Repair Service</h4>
                <h1>Upto <span>70% Off</span> on All t-shirts and Accessories </h1>
                <button className="normal">Explore More</button>
            </section>
        </React.Fragment>
    );
}

export default Banner