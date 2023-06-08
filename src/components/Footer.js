import React from "react";
import "./web.css"
function Footer() {
    return (
        <React.Fragment>
            <footer className="section-p1">
                <div className="footer">
                    <div className="col">
                        <h4>Contact</h4>
                        <p><strong> Adrress:</strong> 562 wellington Road street 32, San Francisco</p>
                        <div className="follow">
                            <h4>Follow Us</h4>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-telegram"></i>
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>
                    <div className="col">
                        <h4>About</h4>
                        <a href="">About Us</a>
                        <a href="">Delivery Information</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Contact Us</a>
                    </div>
                    <div className="col">
                        <h4>My Account</h4>
                        <a href="">Sign In </a>
                        <a href="">Viw Cart</a>
                        <a href="">My Wishlist</a>
                        <a href="">Track My Order</a>
                        <a href="">Help</a>
                    </div>
                    <div className="install">
                        <h4>Payments</h4>
                        <p>Secured Payment Gateways</p>

                    </div>
                </div>
                <div className="copyright">
                    <p >© 2023 Tech etc TTML CSS JAVASCRIPT</p>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer

