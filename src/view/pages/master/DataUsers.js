import React, { useState, useEffect } from "react";
import ModalForm from "../../component/Modals/Modal";
import DataTable from "../../component/Tables/DataTable";
import getDataUser from "../../../api/User/getUser";
import { useLoadingContext } from 'react-router-loading';
import Spinner from "../../component/LoadingBody/Spinner";
import deleteUser from "../../../api/User/deleteUser";
import AddEditForm from "../../component/Forms/FormAddEditDataUser";
// import { CSVLink } from "react-csv";

function DataUsers(props) {
  const [items, setItems] = useState([
  ]);
  // data paginate
  const [itemPaginate, setItemPaginate] = useState([
  ]);
  // dinamis page url paginate
  const [urlPaginate, setUrlPaginate] = useState([
  ]);
  const [itemUpdate, setItemUpdate] = useState([]);
  const [isLoad, setIsLoad] = useState([false]);

  const loadingContext = useLoadingContext();

  const loading = async (pages) => {
    // loading some data
    const data = await getDataUser(pages);
    setItems(data.data);
    setItemPaginate(data.links);
    setIsLoad(true);
    // call method to indicate that loading is done
    loadingContext.done();
  };

  const paginateAction = (url) => {
    setIsLoad(false)
    let urls = "";
    if (url !== null) {
      urls = url.split("?");
      setUrlPaginate("?"+urls[1]);
     
      loading("?"+urls[1]);
    }else{
      setUrlPaginate("?"+urls);
      loading(urls);
    }
  }

  // return status submit add
  const addSubmit = (load) => {
    setIsLoad(false)
     if (load === true) {
      loading(urlPaginate);
    }
  };

  // return status submit update
  const updateSubmit = (load) => {
    console.log(urlPaginate);
    setIsLoad(false)
    if (load === true) {
      loading(urlPaginate);
    }
  };

  // set item update 
  const updateState = (item) => {
    setItemUpdate(item);
  };

  // delete 
  const deleteState = (item) => {

    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      setIsLoad(false);
      deleteUser(item).then(res => {
        if(res.status === 'success'){
          loading(urlPaginate);
        }
      })
    }
  };

  useEffect(() => {
    loading(urlPaginate);
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
            <ModalForm  title='Tambah User' buttonColor='primary' buttonLabel="Tambah" size="sm" typeSubmit="add"
            addEditForm={
                  <AddEditForm
                        buttonColor='success'
                        size="sm" 
                        addSubmit={addSubmit}
                      />
                } />
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
                itemsPaginate={
                  itemPaginate
                }
                paginateAction={paginateAction}

                // function in data table
                updateState={updateState}
                // callback={href}
                // href={href}
                deleteState={deleteState}
                
                //button modal 
                anyButtonModal={[
                  {title:"Edit", buttonLabel:"Edit", buttonColor:"warning", buttonSize:"sm", typeSubmit:"update"},
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

                // title dropdown
                // anyDropdownTitle="Action"

                // add edit form
                addEditForm={
                  <AddEditForm
                        buttonColor='success'
                        size="sm" 
                        updateSubmit={updateSubmit}
                        item={itemUpdate}
                      />
                }
                
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
