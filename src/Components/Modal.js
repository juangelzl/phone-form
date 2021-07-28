import classes from "./Modal.module.css";
import React from "react";
import reactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop} />;
};

const ModalCard = (props) => {
  return (
    <div className={`${props.className} ${classes.modal}`}>
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {reactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {reactDOM.createPortal(
        <ModalCard className={props.className} onClick={props.onClick}>
          Gracias por ingresar el dato
          <div className={classes.actions}>

        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
          </div>
        </ModalCard>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
