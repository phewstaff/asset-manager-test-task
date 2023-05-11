import ReactDOM from "react-dom";

type Props = {
  onClose: () => void;
};

const Modal = (props: Props) => {
  return ReactDOM.createPortal(
    <>
      <div onClick={props.onClose} className="overlay"></div>
      <div className="modal">
        <button className="close-button" onClick={props.onClose}>
          X
        </button>
        <p> Product successfully added to the cart</p>
        <button onClick={props.onClose}>Go Cart</button>
      </div>
    </>,
    document.body
  );
};

export default Modal;
