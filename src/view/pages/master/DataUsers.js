import React, { useState, useEffect } from "react";
import ModalForm from "../../component/Modals/Modal";
import DataTable from "../../component/Tables/DataTable";
import getDataUser from "../../../api/User";
// import axios from 'axios';
import { useLoadingContext } from 'react-router-loading';
// import { CSVLink } from "react-csv";

function DataUsers(props) {
  const [items, setItems] = useState([
  ]);
  const [isLoad, setIsLoad] = useState([false]);

  const loadingContext = useLoadingContext();

  const loading = async () => {
    // loading some data
    const data = await getDataUser();
    setItems(data.data);
    // call method to indicate that loading is done
    loadingContext.done();
  };

  const addItemToState = (item) => {
    setItems([...items, item]);
  };

  const updateState = (item, load) => {

    setTimeout(() => {
      setIsLoad(false)
    }, 1000);
    
    const itemIndex = items.findIndex((data) => data.id === item.id);
    const newArray = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1)
    ];
    setItems(newArray);
    // setIsLoad(load)
  };

  const deleteItemFromState = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    setIsLoad(false)
  };

  useEffect(() => {
    loading();
    setIsLoad(true);
  }, [isLoad]);

  return (
    <div className="card w-75 mx-auto mt-5">
        <div className="card-header text-center">
            <h3 className="text-grey">Data User</h3>
        </div>
        
        <div className="card-body">
        <tr>
          <td>
            <ModalForm addTitle='Tambah User' buttonLabel="Tambah" addItemToState={addItemToState} />
          </td>
        </tr>
        {isLoad ?
          <DataTable
                theadItems={["No", "Name", "Phone", "Email", "Action"]}
                dataItem={['name', 'phone', 'email']}
                items={ 
                  items.map((item, index) => {
                    return {
                      no: index + 1,
                      name: item.name,
                      phone: item.phone,
                      email: item.email,
                      username: item.username,
                      role: item.role,
                      id: item.id
                    }
                  })
                }
                buttonEdit={true}
                buttonDelete={true}
                updateState={updateState}
                deleteItemFromState={deleteItemFromState}
            /> :
        <>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </>  
        }
            
        </div>
    </div>
  );
}

export default DataUsers;
