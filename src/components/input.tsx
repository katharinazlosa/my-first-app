type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
  value?: string;
};

const Input = ({ rounded, label, validation, value }: InputProps) => {
  return (
    <>
      {label ? <label htmlFor={label}>{label}</label> : ""}
      <input
        id={label}
        type="text"
        value={value}
        className={`input ${rounded ? "input--rounded" : ""}  `}
      />
      {validation ? <p>{validation}</p> : ""}
    </>
  );
};

export default Input;
