import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Logout from "../../controller/Logout";
import getProfile from "../../controller/Profile";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  componentDidMount() {
    getProfile().then((result) => {
      this.setState({
        name: result.name,
      });
    });
  }

  render() {
   
    return (
        <nav className="App navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
              {/*add icon bootsrap  */}
              <NavLink className="navbar-brand" to="/">
                  <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                  React SPA
              </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
             aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    {/* add menu doropdown data master */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                         data-bs-toggle="dropdown" aria-expanded="false">
                            Data Master
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to="/data-user">User</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/master/department">Department</NavLink></li>
                        </ul>
                    </li>
                </div>
            </div>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {this.state.name}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <Logout/>
                  </ul>
                </li>
              </ul>
        </div>
        
        </div>
      </nav>
    );
   }
}

export default Navbar;

