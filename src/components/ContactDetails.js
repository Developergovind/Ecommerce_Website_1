import React from "react";
import "./web.css"
function ContactDetails() {
    return (
        <React.Fragment>
            <section className="contact-details section-p1" >
                <div className="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency locations or contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>
                            <i className="fa-solid fa-map"></i>
                            <p>56 Glassford Street Glasgow G1 1UL New York</p>
                        </li>
                        <li>
                            <i className="fa-sharp fa-solid fa-address-book"></i>
                            <p>Contact@gmail.com</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <p>Contact@gmail.com</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-clock"></i>
                            <p>Monday to Saturday 9:00 am to 16:00 pm</p>
                        </li>
                    </div>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86684.43015844398!2d-1.6303750986218966!3d47.23832796435305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ee81f0a8aead%3A0x40d37521e0ded30!2sNantes%2C%20France!5e0!3m2!1sen!2sin!4v1678027644265!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </section>
        </React.Fragment>
    );
}
export default ContactDetails