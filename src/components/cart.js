import React from "react";
import "./web.css"
function Cart() {
    return (
        <React.Fragment>
            <section className="cart section-p1" >
                <table width="100%">
                    <thead>
                        <tr>
                            <th>Remove</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#"><i className="fa-solid fa-xmark"></i></a></td>
                            <td><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJAy1CKcbxpEfrwUeafZtkE0YvAME7mWBfg&usqp=CAU"} alt="" /></td>
                            <td>Cartoons Astronaut T-shirts</td>
                            <td>$120</td>
                            <td><input type="number" value="1" min="1" /></td>
                            <td>$120</td>
                        </tr>
                        <tr>
                            <td><a href="#"><i className="fa-solid fa-xmark"></i></a></td>
                            <td><img src={"https://images-na.ssl-images-amazon.com/images/I/71EuxHmb+AL._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg"} alt="" /></td>
                            <td>Cartoons Astronaut T-shirts</td>
                            <td>$120</td>
                            <td><input type="number" value="1" min="1" /></td>
                            <td>$120</td>
                        </tr>
                        <tr>
                            <td><a href="#"><i className="fa-solid fa-xmark"></i></a></td>
                            <td><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOB-txM6j4fbHvZ4IA26Jox6lh1tcIvfNmyteU5O6PKjSDRL_0fGPZ8NgIEvMDNQnzfmk&usqp=CAU"} alt="" /></td>
                            <td>Cartoons Astronaut T-shirts</td>
                            <td>$120</td>
                            <td><input type="number" value="1" min="1" /></td>
                            <td>$120</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </React.Fragment>
    );
}
export default Cart