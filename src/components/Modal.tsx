import React, { FunctionComponent } from "react";

interface ModalInterface {
  visible: boolean;
  onClose: Function;
  children?: any;
  width?: number;
  height?: number;
}

const Modal: FunctionComponent<ModalInterface> = (props: ModalInterface) => {
  const jsonProps: any = {
    width: props.width ? props.width : 500,
    height: props.height ? props.height : 400,
    marginLeft: props.width ? -props.width/2 : -500/2,
    marginTop: props.height ? -props.height/2 : -400/2,
  };
  return (
    <div className={`${props.visible ? "modal-active": "modal-desactive"}`}>
      <div className="Modal" onClick={() => props.onClose()}></div>
      <div className="Modal--container" style={jsonProps}>
        <div className="Modal--button-container">
          <button className="button-x" onClick={() => props.onClose()}>
            <span>X</span>
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
