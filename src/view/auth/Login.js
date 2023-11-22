// login pages bootsrap 
import React, { Component } from "react";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import AuthLogin from "../../controller/Login";

class Login extends Component {

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card mt-5">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <AuthLogin/>
                            </div>
                            <div className="card-footer">
                                <p>Don't have an account? <a href="/register">Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;