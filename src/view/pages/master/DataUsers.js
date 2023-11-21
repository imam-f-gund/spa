import React, { useState, useEffect } from "react";
import ModalForm from "../../component/Modals/Modal";
import DataTable from "../../component/Tables/DataTable";
import getDataUser from "../../../api/User/getUser";
import { useLoadingContext } from 'react-router-loading';
import Spinner from "../../component/LoadingBody/Spinner";
import deleteUser from "../../../api/User/deleteUser";
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
    setIsLoad(true);
    // call method to indicate that loading is done
    loadingContext.done();
  };

  const addItemToState = (item, load) => {
    setIsLoad(false)
    loading();
  };

  const updateState = (item, load) => {
   
    setIsLoad(false)
    loading();
  };

  const href = (item) => {
    console.log(item);
  };

  const deleteState = (item) => {

    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      setIsLoad(false);
      deleteUser(item).then(res => {
        if(res.status === 'success'){
          loading();
        }
      })
    }
  };

  useEffect(() => {
    loading();
    setIsLoad(true);
  }, []);

  return (
    <div className="card w-75 mx-auto mt-5">
        <div className="card-header text-center">
            <h3 className="text-grey">Data User</h3>
        </div>
        
        <div className="card-body">
        <tr>
          <td>
            <ModalForm  title='Tambah User' buttonLabel="Tambah" size="sm" addItemToState={addItemToState} />
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

                // function
                updateState={updateState}
                // callback={href}
                // href={href}
                deleteState={deleteState}
                // deleteItemFromState={deleteItemFromState}
                
                //button modal 
                anyButtonModal={[
                  {title:"Edit", buttonLabel:"Edit", buttonColor:"warning", buttonSize:"sm"},
                ]}

                // button
                anyButton={[
                  {title:"Delete", buttonLabel:"Delete", buttonColor:"danger", buttonSize:"sm", type:"delete"}
                ]}

                // dropdown
                // anyDropdown={[
                //   {title:"Delete",type:"delete"},
                //   {title:"To From",type:"href"},
                // ]}
                // anyDropdownTitle="Action"
                
            /> :
        <>
          <Spinner/>
        </>  
        }
            
        </div>
    </div>
  );
}

export default DataUsers;
