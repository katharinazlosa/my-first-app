import elipse1 from "./../assets/ellipse5.png";

const StretchCard = () => {
  return (
    <>
      <div className="stretch-card">
        <p className="stretch-card--left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          maxime nulla odit! Dolores non molestias minus optio distinctio
          voluptatum eos veritatis inventore ut eligendi, aliquam quos amet odio
          qui? Dignissimos?
        </p>
        <div className="stretch-card--right">
          <img src={elipse1} alt="person"></img>
          <h3>John Doe</h3>
          <span>Tutor</span>
        </div>
      </div>
    </>
  );
};

export default StretchCard;
