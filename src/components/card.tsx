import Button from "./button";

type CardProps = {
  title: string;
  text: string;
  src: string;
};

const Card = ({ title, text, src }: CardProps) => {
  return (
    <>
      <div className="card-box">
        <img className="card-box__img" src={src}></img>
        <h2 className="card-box__title">{title}</h2>
        <p className="card-box__text">{text}</p>
        <div className="card-box__btn">
          <Button animate={false} value={"OK"} color="green" />
          <Button animate={false} value={"Cancel"} color="red" />
        </div>
      </div>
    </>
  );
};

export default Card;
