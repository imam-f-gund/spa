import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="text-center mt-5">
                <footer className="bg-dark text-center text-sm-start fixed-bottom">
                    {/* text color light */}
                    <div className="text-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        {/* text color white */}
                        <a className="text-white" href="https://mdbootstrap.com/">@MDBootstrap.com</a>
                    </div>
                </footer>
            </div>
        );
    }
    }

export default Footer;