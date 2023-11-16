import {React, useEffect} from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import axios from 'axios';
import { DatasetController } from 'chart.js';

const token = localStorage.getItem("token");

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
}
function DataTable(props){
  // console.log(props.buttonEdit);
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
// get data key and value in object with map
  const items = props.items.map((item, index) => {
    
    return (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        {props.dataItem.map((theadItem, index) => {
              return (
                <td key={index}>{item[theadItem]}</td>
              )
            }
        )}
       
        <td className="col-3">
          <div>
            {props.buttonEdit?(
              <ModalForm editTitle="Edit" buttonLabel="Edit" item={item} updateState={props.updateState}/>
            ):null  
            }
            {props.buttonDelete?(
              <Button color="danger" onClick={() => deleteItem(item.id)}>Delete</Button>
            ):null  
            }
            {props.buttonDetail?(
              <ModalForm detailTitle="Detail" buttonLabel="Detail" item={item} updateState={props.updateState}/>
            ):null  
            }
          
          </div>
        </td>
      </tr>
      )
    })
   
  return (
  <div className="mt-2">
    <table id="example" className="table table-striped table-bordered table-sm">
      <thead>
        <tr>
          {props.theadItems.map((theadItem, index) => {
              return (
                <th key={index}>{theadItem}</th>
              )
            }
          )}
        </tr>
      </thead>
      <tbody>
      {items}
      </tbody>
    </table>
  </div>
  )
}

export default DataTable