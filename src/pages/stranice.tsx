import mlinarlink from "./../assets/mlinar-link.png";
import teoremlink from "./../assets/teorem-link.png";
import favelink from "./../assets/fave-link.png";

const Stranice = () => {
  return (
    <>
      <div className="container">
        <div className="main-links-container">
          <img src={mlinarlink} className="image"></img>
          <div className="middle-box">
            <a className="main-page-links" href="/mlinar">
              Mlinar
            </a>
          </div>
        </div>
        <div className="main-links-container">
          <img src={teoremlink} className="image"></img>
          <div className="middle-box">
            <a className="main-page-links" href="/teorem">
              Teorem
            </a>
          </div>
        </div>
        <div className="main-links-container">
          <img src={favelink} className="image"></img>
          <div className="middle-box">
            <a className="main-page-links" href="/fave">
              Fave
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stranice;
