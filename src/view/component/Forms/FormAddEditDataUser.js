import React, { useState, useEffect } from "react";
import {Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ReactComponent as Loader } from '../../../assets/icons/loader.svg';
import axios from 'axios';

function AddEditForm(props) {
  const [loading, setShowLoader] = useState(false);
  
  const [form, setValues] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    username: "",
    phone: "",
    role: ""
  });

  const token = localStorage.getItem("token");

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitFormAdd = (e) => {
    setShowLoader(true)
    e.preventDefault();
    setTimeout(() => {
      axios.post(process.env.REACT_APP_API_LINK + "user", form, {headers: headers})
      .then((res) => {
        // console.log(res.data.status);
        if (res.data.status == 'success') {
          setShowLoader(false)
          alert('berhasil menambahkan data');
          props.addSubmit(true);
        
        }else{
          setShowLoader(false)
          alert('gagal menambahkan data');
        }
       
      }).catch((error) => {
        console.log(error);
      });
        
    }, 1000)
  };

  const submitFormEdit = (e) => {
    setShowLoader(true)
    e.preventDefault();
    
    var id = e.target.id.value;
    setTimeout(() => {
      axios.post(process.env.REACT_APP_API_LINK + "user/"+ id, form, {headers: headers})
      .then((res) => {
        if (res.data.status == 'success') {
          setShowLoader(false)
          alert('berhasil update data');
          props.updateSubmit(true);
         
        }else{
          setShowLoader(false)
          alert('gagal update data');
        }
       
      }).catch((error) => {
        console.log(error);
      });
        
    }, 1000)
  };

  useEffect(() => {
    if (props.item) {
      const {id, name, email, password, username, phone, role} = props.item;
      setValues({id, name, email, password, username, phone, role });
    }
  }, [props.item]);

  return (
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
        <Input
          type="hidden"
          name="id"
          id="id"
          onChange={onChange}
          value={form.id === null ? "" : form.id}
        />
      <FormGroup>
        <Label for="name">name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={onChange}
          value={form.name === null ? "" : form.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">email</Label>
        <Input
          type="text"
          name="email"
          id="email"
          onChange={onChange}
          value={form.email === null ? "" : form.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">password</Label>
        <Input
          type="text"
          name="password"
          id="password"
          onChange={onChange}
          value={form.password === null ? "" : form.password}
        />
      </FormGroup>
      <FormGroup>
        <Label for="username">username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          onChange={onChange}
          value={form.username === null ? "" : form.username}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">phone</Label>
        <Input
          type="text"
          name="phone"
          id="phone"
          onChange={onChange}
          value={form.phone === null ? "" : form.phone}
        />
      </FormGroup>
      <FormGroup>
        <Label for="role">role</Label>
        <Input
          type="text"
          name="role"
          id="role"
          onChange={onChange}
          value={form.role === null ? "" : form.role}
        />
      </FormGroup>
      
      <Button color={props.buttonColor} size={props.size}>{!loading ? 'Submit' : <Loader className="spinner" />}</Button>
    </Form>
  );
}

export default AddEditForm;
