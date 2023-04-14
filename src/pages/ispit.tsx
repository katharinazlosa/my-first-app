import { useState } from "react";

const Ispit = () => {
  const [rotate, setRotate] = useState<boolean>(false);

  const rotateButton = () => {
    setRotate(!rotate);
  };
  return (
    <>
      <div className="container">
        <div className="block-container">
          <div
            className={`block block--one ${rotate ? "block-rotate" : ""}`}
            onClick={rotateButton}
          >
            <p>c</p>
          </div>
          <div
            className={`block block--two ${rotate ? "block-rotate" : ""}`}
            onClick={rotateButton}
          >
            <p>s</p>
          </div>
          <div
            className={`block block--three ${rotate ? "block-rotate" : ""}`}
            onClick={rotateButton}
          >
            <p>s</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ispit;
