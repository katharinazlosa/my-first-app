import { useState } from "react";

const ModalWindow = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal ? (
        <>
          <div className="modal__overlay" onClick={toggleModal}></div>
          <div className="modal">
            <div className="modal__header">
              <button className="btn btn__close" onClick={toggleModal}>
                ⨉
              </button>
            </div>
            <div className="modal__section">
              <h2>
                Molim vas, ostavite e-mail adresu i kontaktirat ću vas u
                najkraćem mogućem roku.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tristique et egestas quis ipsum. Et sollicitudin ac orci
                phasellus. Mattis enim ut tellus elementum. Enim nec dui nunc
                mattis enim ut tellus elementum sagittis. Faucibus pulvinar
                elementum integer enim neque volutpat ac tincidunt vitae.
              </p>
            </div>
            <div className="modal__footer">
              <input type="email" id="email" placeholder="email@js.com" />
              <button className="btn">Submit</button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <button onClick={toggleModal} className="btn">
        Show Modal
      </button>
    </>
  );
};

export default ModalWindow;