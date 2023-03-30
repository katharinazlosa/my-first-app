import { useState } from "react";

type CheckboxProps = {
  label: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <label className="cb-box">
      <input
        className="cb-box__checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {label}
    </label>
  );
};

export default Checkbox;
