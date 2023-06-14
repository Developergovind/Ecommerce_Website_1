import React from "react";
import '../../components/web.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header'
function forGotPassword() {

    return (
        <React.Fragment>
            <Header> </Header>
            <>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
                />
                <link
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <div className="form-gap" />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="text-center">
                                        <h3>
                                            <i className="fa fa-lock fa-4x" />
                                        </h3>
                                        <h2 className="text-center">Forgot Password?</h2>
                                        <p>You can reset your password here.</p>
                                        <div className="panel-body">
                                            <form
                                                id="register-form"
                                                role="form"
                                                autoComplete="off"
                                                className="form"
                                                method="post"
                                            >
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-envelope color-blue" />
                                                        </span>
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            placeholder="email address"
                                                            className="form-control"
                                                            type="email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input style={{ backgroundColor: " #008178", color: "white" }}
                                                        name="recover-submit"
                                                        className="btn btn-lg  btn-block"
                                                        defaultValue="Reset Password"
                                                        type="submit"
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-center  pt-3">
                                                    <Link style={{ textDecoration: "none" }} to="/login"> <span style={{ color: "#008178", cursor: "pointer", fontSize: "20px", marginLeft: "10px" }}>Back To Login</span> </Link>
                                                </div>
                                                <input
                                                    type="hidden"
                                                    className="hide"
                                                    name="token"
                                                    id="token"
                                                    defaultValue=""
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </React.Fragment>
    );
}


export default forGotPassword;