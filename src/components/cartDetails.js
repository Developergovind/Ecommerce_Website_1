import React from "react";
import "./web.css"
import { Link } from "react-router-dom";
function AddToCart() {
    return (
        <React.Fragment>
           <div className="container">
           <section className="cart-add section-p1" >
                <div className="coupon">
                    <h3>Apply coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon code" />
                        <button className="normal">Apply</button>
                    </div>
                </div>
                <div className="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$335</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>$334</strong></td>
                        </tr>
                    </table>
                  <Link to={"/checkout"}><button>Procced to Checkout</button></Link>
                </div>
            </section>
           </div>
        </React.Fragment>
    );
}
export default AddToCart