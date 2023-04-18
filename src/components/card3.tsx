type CardThreeProps = {
  img: string;
  title: string;
  content: string;
};

const Card3 = ({ img, title, content }: CardThreeProps) => {
  return (
    <>
      <div className="card-teorem">
        <img src={img}></img>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Card3;
