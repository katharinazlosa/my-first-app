import { ReactNode } from "react";

type ButtonColorType = "red" | "green" | "yellow";

type ButtonProps = {
  animate: boolean;
  value?: string;
  icon?: ReactNode;
  color?: ButtonColorType;
  //big: boolean;
};

const Button = ({
  animate,
  value = "Click me",
  icon,
  color = "red",
}: ButtonProps) => {
  const colorSwitcher = (color: ButtonColorType) => {
    switch (color) {
      case "red":
        return "btn--red";
      case "green":
        return "btn--green";
      default:
        return "btn--yellow";
    }
  };

  return (
    <button
      className={`btn ${colorSwitcher(color)} ${animate ? "btn--animate" : ""}`}
      type="button"
    >
      {icon}
      {value}
    </button>
  );
};

export default Button;
