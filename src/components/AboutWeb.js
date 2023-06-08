import React from "react";
import video from '../resources/pexels-anete-lusina-6353353.mp4'
import "./web.css"
function AboutWeb() {
    return (
        <React.Fragment>
            <section className="About-web section-p1" >
                <h1>Have a Great experience With Our Products</h1>
                <div className="video">
                    <video width="750" height="500" controls >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </section>
        </React.Fragment>
    );
}
export default AboutWeb