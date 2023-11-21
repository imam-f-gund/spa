import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddEditForm from "../Forms/FormAddEditDataUser";

function ModalForm(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
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
 

  // if (label === "Edit") {
  //   button = (
  //     <Button
  //       color="warning"
  //       onClick={toggle}
  //       style={{ float: "left", marginRight: "10px" }}
  //     >
  //       {label}
  //     </Button>
  //   );
  //   title = props.title;
  // } else if(label === "Detail"){
  //   button = (
  //     <Button
  //       onClick={toggle}
  //       style={{ float: "left", marginRight: "10px" }}
  //     >
  //       {label}
  //     </Button>
  //   );
  //   title = props.title;
  // }else {
  //   button = (
  //     <Button
  //       color="success"
  //       onClick={toggle}
  //       style={{ float: "left", marginRight: "10px" }}
  //     >
  //       {label}
  //     </Button>
  //   );
  //   title = props.addTitle;
  // }

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
          <AddEditForm
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
            item={props.item}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;
