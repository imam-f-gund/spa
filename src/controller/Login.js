import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Buttons from "../view/component/LoadingButton/Button";
import '../App.css';
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [username , setUsername ] = useState('');
    const [password, setPassword] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const onSubmit = () => {
      setShowLoader(true)
      // set timeout with promise
      setTimeout(() => {
        setShowLoader(false)
        axios.post(process.env.REACT_APP_API_LINK + "auth/login", {
          username: username,
          password: password
        })
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data.data.token);
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("nama", res.data.data.user.nama);
            navigate('/');
            navigate(0);
          }else{
            alert('Username  atau Password salah');
          }
         
        }).catch((error) => {
          console.log(error.response.data.message);
        });
          
      }, 1000)
    }
    return (
        <>
        
        <div className="mb-3">
          <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
          <input type="text" className="form-control username" id="exampleInputUsername1" name="username" aria-describedby="usernameHelp" onChange={(e) => setUsername(e.target.value)}/>
          <div id="usernameHelp" className="form-text">We'll never share your username with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <div className="mb-3">
            <Buttons text="Login" variant="sucess" onSubmit={onSubmit} loading={showLoader} disabled={showLoader} />
        </div>
      </>
    )
}
