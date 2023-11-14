// create export default function Router
import React, { Component } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./view/layout/NavBar";
import Home from "./view/pages/Home";
import About from "./view/pages/About";
import Contact from "./view/pages/Contact";
import Footer from "./view/layout/Footer";
import DataUser from "./view/pages/master/DataUser";
import DataUsers from "./view/pages/master/DataUsers";
import Login from "./view/auth/Login";
import NoPage from "./view/pages/NoPage";

import { Routes, Route, topbar } from 'react-router-loading';

// config topbar
topbar.config({
    barColors: {
      0: 'rgba(26,  188, 156, .7)',
      .3: 'rgba(41,  128, 185, .7)',
      1.0: 'rgba(231, 76,  60,  .7)'
    },
    shadowBlur: 0
  });
  

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isLoggedIn: false,
        isLoading: true,
        };
    }
 
    
    componentDidMount() {
        
        if (localStorage.getItem('token') != null) {

            this.setState({
                isLoggedIn: true,
            });

        }else{

            this.setState({
                isLoggedIn: false,
            });

        }

        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 1000)
    }

    render() {
        return (
            this.state.isLoading ? (
                null
            ) : (

        <BrowserRouter>
            {this.state.isLoggedIn ? (
            <>
            <Navbar />
            <div className="content">
                <Routes>
                <Route exact path="/" element={<Home/>} loading></Route>
                <Route exact path="/about" element={<About />} loading ></Route>
                <Route exact path="/contact" element={<Contact />} loading></Route>
                <Route exact path="/data-user" element={<DataUser />} loading></Route>
                <Route exact path="/data-users" element={<DataUsers />} loading></Route>
                <Route exact path="*" element={<NoPage/>} loading></Route>
                
                </Routes>
            </div>
            
            <Footer />
            </>
            ) : (
            <Login />
            )}
        </BrowserRouter>
            )
        );
    }
}

export default Router;