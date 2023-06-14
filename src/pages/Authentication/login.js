import React from "react";
import '../../components/web.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header'
 function Login()  {
    
    return (
        <React.Fragment>
              <Header> </Header>
            <section className="h-50 ">
                <div className="container h-50">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img
                                            src="https://img.freepik.com/free-photo/cheerful-happy-woman-enjoying-shopping-summer-sale-she-is-carrying-shopping-bags-walking_74952-3018.jpg?size=626&ext=jpg&ga=GA1.2.1299406422.1685704617&semt=sph"
                                            alt="Sample photo"
                                            className="img-fluid"
                                            style={{
                                                borderTopLeftRadius: ".25rem",
                                                borderBottomLeftRadius: ".25rem"
                                            }}
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">
                                                Login
                                            </h3>
                                            <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example99">
                                                    Enter Email Or Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    id="form3Example99"
                                                    className="form-control form-control-lg"
                                                    placeholder="Email Or Phone"
                                                />
                                            </div>
                                            <div className="form-outline mb-8   ">
                                            <label className="form-label" htmlFor="form3Example97">
                                                  Enter Password
                                                </label>
                                                <input
                                                    type="email"
                                                    id="form3Example97"
                                                    className="form-control form-control-lg"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="d-flex mt-4 pt-3">
                                                <button type="button" className="btn normalButton btn-lg ms-2">
                                                    Login
                                                </button>
                                                <Link style={{textDecoration:"none"}} to="/forgotpassword"> <span style={{color: "#008178", cursor:"pointer",fontSize:"20px",marginLeft:"10px"}}>Forgot Your Password</span> </Link>
                                            </div>
                                            <div className="d-flex justify-content-center mt-5 pt-3">
                                                <h4>Don't have an account ? <Link style={{textDecoration:"none"}} to="/signUp"> <span style={{color: "#008178", cursor:"pointer"}}>Sign Up</span> </Link> </h4>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}


export default Login;