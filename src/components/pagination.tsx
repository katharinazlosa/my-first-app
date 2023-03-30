import left from "./../assets/left.png";
import right from "./../assets/right.png";

const Page = () => {
  return (
    <div className="page-box">
      <span className="page-box__arrow">
        <img className="arrow" src={left} alt="arrow"></img>
      </span>
      <div className="page-box__num">1</div>
      <div className="page-box__num">2</div>
      <div className="page-box__num">3</div>
      <div className="page-box__num">4</div>
      <div className="page-box__num">5</div>
      <div className="page-box__num">6</div>
      <span className="page-box__arrow">
        <img className="arrow" src={right} alt="arrow"></img>
      </span>
    </div>
  );
};

export default Page;
