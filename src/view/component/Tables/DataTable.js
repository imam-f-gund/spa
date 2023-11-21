import {React, useEffect, useState} from 'react'
import { Table, Button, Dropdown } from 'react-bootstrap';
import ModalForm from '../Modals/Modal';
import axios from 'axios';

const token = localStorage.getItem("token");

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
}
function DataTable(props){
  const callback = id => {

    props.callback(id);
  }
  const href = id => {
    
    props.href(id);
  }
  const deleteState = id => {
    
    props.deleteState(id);
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
       
        <td>
          <div>
          
            {props.anyButtonModal?(
              props.anyButtonModal.map((data) => {
                return (
                  <ModalForm title={data.title} buttonColor={data.buttonColor} buttonSize={data.buttonSize} buttonLabel={data.buttonLabel} item={item} updateState={props.updateState}/>
                )
              }
            ) 
            ):null  
            }
            {props.anyButton?(
              props.anyButton.map((data) => {
                if(data.type === "delete"){
                  return (
                    <Button variant={data.buttonColor} size={data.buttonSize} onClick={() => deleteState(item.id)}>{data.title}</Button>
                )
                }else if(data.type === "href"){
                  return (
                    <Button variant={data.buttonColor} size={data.buttonSize} onClick={() => href(item.id)}>{data.title}</Button>
                )
                }else if(data.type === "callback"){
                  return (
                    <Button variant={data.buttonColor} size={data.buttonSize} onClick={() => callback(item.id)}>{data.title}</Button>
                  )
                }
              }
            ) 
            ):null  
            }
            
            {props.anyDropdown?(
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {props.anyDropdownTitle}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  {props.anyDropdown.map((data) => {
                    
                    if(data.type === "delete"){
                      return (
                        <Dropdown.Item onClick={() => deleteState(item.id)}>{data.title}</Dropdown.Item>
                    )
                    }else if(data.type === "href"){
                      return (
                         <Dropdown.Item onClick={() => href(item.id)}>{data.title}</Dropdown.Item>
                    )
                    }else if(data.type === "callback"){
                      return (
                         <Dropdown.Item onClick={() => callback(item.id)}>{data.title}</Dropdown.Item>
                      )
                    }
                  }
                )}
                </Dropdown.Menu>
              </Dropdown>
            ):null
            }
          
          </div>
        </td>
      </tr>
      )
    })
   
  return (
  <div className="mt-2">
    <Table striped bordered hover>
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
    </Table>
  </div>
  )
}

export default DataTable