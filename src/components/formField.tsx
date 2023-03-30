import { useState } from "react";
import Button from "./button";

const FormField = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    alert("A name was submitted: " + value);
  };

  return (
    <div onSubmit={handleSubmit} className="form-box">
      <label className="form-box__label">
        Name:
        <input
          className="form-box__input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      {/* <input type="submit" value="Submit" /> */}
      <Button type="submit" value="Submit" />
    </div>
  );
};

export default FormField;
