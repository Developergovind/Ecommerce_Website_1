import React from "react";
import axios from 'axios'
import { useState } from "react";
import "./web.css"
function FormDetails() {

    function addName(e) {
        const name = e.target.value;
        setname(name);
      }
    
      function addsubject(e) {
        const subject = e.target.value;
        setsubject(subject);
      }
    
      function addmessage(e) {
        const message = e.target.value;
        setmessage(message);
      
      }
    
      function addEmail(e) {
        const email = e.target.value;
        setemail(email);
      }
    async function submitform(){
     await   axios.post("http://localhost:8909/Contact",
            {
                name: name,
                email: email,
                subject: subject,
                message: message
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
    
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

    return (
        <React.Fragment>
            <section className="form-details section-p1" >
                <form>
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <p id="thank-you-message">
                        Thank you for contacting us. We will be in touch with you very soon.
                    </p>
                    <input type="text" placeholder="Your name" name="name" value={name} onChange={addName}/>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={addEmail}/>
                    <input type="text" placeholder="Subject" name="subject" value={subject} onChange={addsubject}/>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" value={message} onChange={addmessage}></textarea>
                    <button className="btn-submit" type="submit" onClick={submitform}>Submit</button>
                </form>
                <div className="people">
                    <div>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFGV6xzNOlFyu53lz1Y6e_kLgHrIc4TRfnw&usqp=CAU"} alt="" />
                        <p><span>John Doe</span> Senior Marketing Manager <br /> phone : +91 8726534643 <br /> Email : contact@gmail.com</p>
                    </div>
                    <div>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"} alt="" />
                        <p><span>William Smith</span> Senior Marketing Manager <br /> phone : +91 8726534643 <br /> Email : contact@gmail.com</p>
                    </div>
                    <div>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"} alt="" />
                        <p><span>Emma Stone</span> Senior Marketing Manager <br /> phone : +91 8726534643 <br /> Email : contact@gmail.com</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default FormDetails