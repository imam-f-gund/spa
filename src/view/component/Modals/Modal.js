import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

function ModalForm(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    if (props.typeSubmit == 'add') {
      
      setModal(!modal);
    } else {
      callback(props.item);
      setModal(!modal);
    }
    
  };

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  let button = "";

  if (button !== null) {
    button = (
      <Button
        color={props.buttonColor}
        size={props.buttonSize}
        onClick={toggle}
        style={{ float: "left", marginRight: "10px" }}
      >
        {props.buttonLabel}
      </Button>
    );
  }

  const callback = (form) => {
    props.updateState(form);
  }

  return (
    <div>
      {button}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={props.className}
        backdrop={"static"}
        keyboard={false}
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          {props.title}
        </ModalHeader>
        <ModalBody>
          {props.addEditForm}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;
