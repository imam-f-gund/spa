// create modal component with state and dinamis value
// Path: src/view/component/Modal.js

import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ModalComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        show: false,
        buttonLabel: "",
        modalTitle: "",
        modalBody: "",
        modalData:[]
        };
    }
    
    handleModal() {
        this.setState({ show: !this.state.show });
        console.log(this.props.modalData);
        
    }
    
    render() {
        return (
        <>
            {this.props.typeBtn == 'button-new' ?
            <>
                <Button variant="primary" className="float-end md-2" onClick={() => this.handleModal()}>
                {this.props.buttonLabel}
                </Button>
            </>:null
            }
             {this.props.typeBtn == 'dropdown-edit' ?
            <>
            
             <a className="dropdown-item" href="#" onClick={() => this.handleModal()}>{this.props.buttonLabel}</a>
                {/* <Button variant="primary" className="float-end md-2" onClick={() => this.handleModal()}>
                {this.props.buttonLabel}
                </Button> */}
            </>:null
            }
            <Modal show={this.state.show} onHide={() => this.handleModal()}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.modalBody} <Button variant="secondary" onClick={() => this.handleModal()}>
                Close
            </Button>
            </Modal.Body>
            
            </Modal>
        </>
        );
    }
    }

export default ModalComponent;

