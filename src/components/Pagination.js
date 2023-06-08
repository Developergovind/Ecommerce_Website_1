import React from "react";
import "./web.css"
function Pagination() {
    return (
        <React.Fragment>
            <div className="container justify-content-center">
                <section className="pagination section-p1" >
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href=""><i className="fa fa-long-arrow-alt-right"></i></a>
                </section>
            </div>
        </React.Fragment>
    );
}

export default Pagination


