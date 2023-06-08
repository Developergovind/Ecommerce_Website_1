import React from "react";
import axios from "axios";
import { useState } from "react";
function NewsLetter() {
    function addemail(e) {
        const email = e.target.value;
        setemail(email);
    }

    const [email, setemail] = useState("")

    async function submitform() {
        await axios.post("http://localhost:8909/Subscribe",
            {
                email: email

            }).then((response) => {
                console.log(response);
                let res = response.status
                if (res !== 200) {
                    alert("data not saved")
                }
                else {
                    alert("data saved")
                }
            }, (error) => {
                console.log(error);
                alert("data not saved")
            });
    }

    return (
        <React.Fragment>
            <section className="newsletter section-p1"  >
                <div className="newtext">
                    <h4>Sign up for newsletter</h4>
                    <p>Get email updates our latest updates shop and special offers on time </p>
                </div>
                <form className="form">
                    <input type="text" placeholder="Your email address" value={email} onChange={addemail} />
                    <button className="subscriptionButton" type="submit" onClick={submitform}>Sign Up</button>
                </form>
            </section>
        </React.Fragment>
    );
}

export default NewsLetter

