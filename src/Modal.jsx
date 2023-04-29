import { useState } from "react";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal" disabled={true}></button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Bienvenidos</h2>
            <p>
              Como se puede observa en esta pagina de los reyes 
              
            </p>
            <button className="close-modal" onClick={toggleModal}>
              <span className="red">   CLOSE</span>
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
export default  Modal;