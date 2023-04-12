import { useState } from "react";

const ToggleButton = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div>
        <label className={`switch ${toggle ? "active" : ""}`}>
          <input type="checkbox" onClick={toggleButton}></input>
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default ToggleButton;
