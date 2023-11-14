import React from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import axios from 'axios';

const token = localStorage.getItem("token");

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
}
function DataTable(props){
  console.log(props.items);
  const deleteItem = id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
    
      setTimeout(() => {
        axios.delete(process.env.REACT_APP_API_LINK + "user/" + id, {headers: headers})
        .then((res) => {
          // console.log(res.data.status);
          if (res.data.status == 'success') {
            props.deleteItemFromState(id);
            alert('berhasil hapus data');
           
          }else{
            alert('gagal hapus data');
          }
         
        }).catch((error) => {
          console.log(error.response.data.message);
        });
          
      }, 1000)

    }
  }

  const items = props.items.map(item => {
    return (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.no}</td>
        <td>{item.email}</td>
        
        <td>
          <div style={{width:"110px"}}>
            <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState}/>
            {' '}
            <Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button>
          </div>
        </td>
      </tr>
      )
    })

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First</th>
          <th>Last</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </Table>
  )
}

export default DataTable