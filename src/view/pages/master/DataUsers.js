import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalForm from "../../component/Modals/Modal";
import DataTable from "../../component/Tables/DataTable";
import getDataUser from "../../../api/User";
// import axios from 'axios';
import { useLoadingContext } from 'react-router-loading';
// import { CSVLink } from "react-csv";

function DataUsers(props) {
  const [items, setItems] = useState([
  ]);
  const token = localStorage.getItem("token");
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
  const loadingContext = useLoadingContext();

  // const getItems = () => {
  //   axios.get(process.env.REACT_APP_API_LINK + "user", {
  //     headers: headers,
  //   })
  //     .then((res) => {
  //       // console.log(res.data.data.data);
  //       setItems(res.data.data.data);
  //     }).catch((error) => {
  //       console.log(error);
  //     })
  // }

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

  const updateState = (item) => {
    const itemIndex = items.findIndex((data) => data.id === item.id);
    const newArray = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1)
    ];
    setItems(newArray);
  };

  const deleteItemFromState = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    loading();
    // console.log(items);
  }, []);

  return (
    <Container className="App">
      <Row>
        <Col>
          <h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            items={items}
            updateState={updateState}
            deleteItemFromState={deleteItemFromState}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <CSVLink
            filename={"db.csv"}
            color="primary"
            style={{ float: "left", marginRight: "10px" }}
            className="btn btn-primary"
            data={items}
          >
            Download CSV
          </CSVLink> */}
          <ModalForm buttonLabel="Add Item" addItemToState={addItemToState} />
        </Col>
      </Row>
    </Container>
  );
}

export default DataUsers;
