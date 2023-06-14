import React, { useState   } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./web.css"
import { productSearch } from "../services/products";

function Header() {

    const [searchValue, setSearchValue] = useState("")
    const Navigate = useNavigate();
    function getSearchValue(e) {
        const searchValue = e.target.value
        setSearchValue(searchValue)
    }
    const Searchedvalue = async () => {
        const data = await productSearch(searchValue)
        localStorage.setItem("productData",JSON.stringify(data));                      
        Navigate("/Shop")
        console.log("hello ", data);
    }
    return (
        <React.Fragment>
            <section className="header">
                <Link style={{ width: "833px" }} to={"http://localhost:3000/"}><img className="logo" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/800px-Louis_Vuitton_logo_and_wordmark.svg.png"} alt="" />  </Link>
                <input className="Search" type="search" placeholder="Search" value={searchValue} onChange={getSearchValue} /> <button onClick={Searchedvalue}>
                    <span class="material-symbols-outlined">
                        search
                    </span></button>
                <div>
                    <ul className="navbar">
                        <li><Link to="/" > Home </Link></li>
                        <li><Link to="/Shop" >Shop </Link> </li>
                        <li><Link to="/Blog" >Blog  </Link> </li>
                        <li><Link to="/About" >About  </Link> </li>
                        <li><Link to="/Contact" >Contact </Link> </li>
                        <li className="lg-bag"> <Link to="/Cart" ><span className="material-symbols-outlined">
                            shopping_bag
                        </span> </Link></li>
                        <Link to={"/login"}><button className="login-button">Login</button></Link>
                        <Link to="" className="close"><span className="material-symbols-outlined">
                            close
                        </span> </Link>
                    </ul>
                </div>
                <div className="mobile">
                    <a href="cart.html"><span className="material-symbols-outlined">
                        shopping_bag
                    </span></a>
                    <i className="bar"><span className="material-symbols-outlined">menu</span></i>

                </div>
            </section>
        </React.Fragment>
    );
}

export default Header


