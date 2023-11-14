// datatables with react

// Path: src/view/component/TableComponent.js
import React, { Component } from "react";

import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ModalComponent from "./Modal";

class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: [],
            tableBody: [],
            tableAction: [],
            tableForm:[],
            paginate: [],
        };
    }

    componentDidMount() {
        
        $(document).ready(function () {
            // datatable with pagination
            $("#example").DataTable({

            });
        });
        
    }

    render() {
        return (
            <div className="mt-5">
                <table id="example" className="table table-striped table-bordered table-sm">
                    <thead>
                        <tr>
                            {/* add theadMap */}
                            {this.props.tableHead.map((item) => (
                                <th key={item.id}>{item.id}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* add data tbody for map */}
                        {this.props.tableBody.map((item) => (
                            <tr key={item.id}>
                                <td>{item.alamat}</td>
                                <td>{item.no}</td>
                                <td>{item.nama}</td>
                        
                               {/* button action dropdown */}
                                <td>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Action
                                        </button>
                                        <ul className="dropdown-menu">
                                            {/* add action for map */}
                                            {item.actionEdit}
                                            {/* {this.props.tableAction.map((items) => (
                                               items.edit
                                            ))} */}

                                            {/* {this.props.tableAction.map((items) => (
                                                // console.log(items),
                                                // <li key={item.id}>
                                                
                                                //     {items.name == "Edit" ?
                                                //             <>
                                                //             <ModalComponent
                                                //                 modalData={
                                                //                     [item.nama,
                                                //                     item.no,
                                                //                     item.alamat]
                                                //                 }
                                                //                 typeBtn="dropdown-edit"
                                                //                 buttonLabel={items.name}
                                                //                 className="btn btn-primary float-end md-2"
                                                //                 modalTitle={items.name}
                                                //                 //input form here
                                                //                 modalBody={
                                                //                     <>
                                                //                         {this.props.tableForm}
                                                //                     </>
                                                //                 } 
                                                //                 modalFooter=""
                                                //             />
                                                //             </>
                                                // :null}
                                                // {items.name == "Delete" ?
                                                //             <>
                                                //             <a>Delete</a>
                                                //             </>
                                                // :null}

                                                // </li>
                                                
                                            ))} */}
                                        </ul>
                                    </div>
                                </td>

                            </tr>
                        ))} 
                        {/* paginate button hrev and next */}
                        {/* <tr>
                            <td colSpan="4">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        {this.props.paginate.map((item) => (
                                            <li key={item.name} className="page-item"><a className="page-link" href="#">{item.name}</a></li>
                                        ))}
                                    </ul>
                                </nav>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableComponent;
