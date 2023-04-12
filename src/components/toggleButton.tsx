import { useState } from "react";

const ToggleButton = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div>
        <div className={`switch ${toggle ? "active" : ""}`}>
          <input type="checkbox" onClick={toggleButton}></input>
          <span className="slider round"></span>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
