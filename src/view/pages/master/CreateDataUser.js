import React, { useState } from 'react';
import {redirect, useNavigate} from 'react-router-dom';
import Button from "../../component/LoadingButton/Button";
import '../../../App.css';
import axios from "axios";

export default function Create() {

    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);
    const [dataPost, setDataPost] = useState({
            name: "",
            email: "",
            password: "",
            username: "",
            phone: "",
            role: ""
          });

    const handleChange = (e) => {
      const value = e.target.value;
      setDataPost({ ...dataPost, [e.target.name]: value });
    };

    
    const token = localStorage.getItem("token");

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  //  console.log(props.data);
    const handleSubmit = (e) => {
    
      e.preventDefault();
     
      const userData = {
        name: dataPost.name,
        email: dataPost.email,
        password: dataPost.password,
        username: dataPost.username,
        phone: dataPost.phone,
        role: dataPost.role,
      };
      // console.log(userData);
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false)
        axios.post(process.env.REACT_APP_API_LINK + "user", userData, {headers: headers})
        .then((res) => {
          // console.log(res.data.status);
          if (res.data.status == 'success') {
        
            alert('berhasil menambahkan data');
           
          }else{
            alert('gagal menambahkan data');
          }
         
        }).catch((error) => {
          console.log(error.response.data.message);
        });
          
      }, 1000)
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputname" className="form-label">name</label>
            <input type="text" className="form-control name" id="exampleInputname" name="name" aria-describedby="nameHelp" value={dataPost.name} onChange={handleChange}/>
            <div id="nameHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputemail" className="form-label">email</label>
            <input type="email" className="form-control email" id="exampleInputemail" name="email" aria-describedby="emailHelp" value={dataPost.email} onChange={handleChange}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputpassword" className="form-label">password</label>
            <input type="password" className="form-control password" id="exampleInputpassword" name="password" aria-describedby="passwordHelp" value={dataPost.password} onChange={handleChange}/>
            <div id="passwordHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputusername" className="form-label">username</label>
            <input type="text" className="form-control username" id="exampleInputusername" name="username" aria-describedby="usernameHelp" value={dataPost.username} onChange={handleChange}/>
            <div id="usernameHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputphone" className="form-label">phone</label>
            <input type="number" className="form-control phone" id="exampleInputphone" name="phone" aria-describedby="phoneHelp" value={dataPost.phone} onChange={handleChange}/>
            <div id="phoneHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputrole" className="form-label">role</label>
            <input type="text" className="form-control role" id="exampleInputrole" name="role" aria-describedby="roleHelp" value={dataPost.role} onChange={handleChange}/>
            <div id="roleHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
              <button type="submit" className="btn btn-primary float-end">Submit</button>
          </div>
        </form>
      </>
    )
}