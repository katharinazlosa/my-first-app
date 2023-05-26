import { useState } from "react";

type ModalType = {
  title: string;
  paragraph: string;
  btnInfo: string;
};

const ModalWindow = ({ title, paragraph, btnInfo }: ModalType) => {
  const [modal, setModal] = useState<boolean>(false);

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
              <h2>{title}</h2>
              <p>{paragraph}</p>
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
        {btnInfo}
      </button>
    </>
  );
};

export default ModalWindow;
