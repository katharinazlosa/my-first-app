import logoLion from "./../assets/premier-league-lion.jpg";
import ToggleButton from "./toggleButton";

type CardTwoProps = {
  title: string;
  desc: string;
  value: string;
};

const CardTwo = ({ title, desc, value }: CardTwoProps) => {
  return (
    <>
      <div className="card-box">
        <div className="card-box__header">
          <img
            src={logoLion}
            alt="Premier league lion logo"
            className="card-box__header__img"
          ></img>
          <div className="card-box__header__right">
            <h3>{title}</h3>
            <span>Premier League</span>
          </div>
        </div>
        <div className="card-box__section">
          <div className="card-box__section__left">
            <span>Winning prize</span>
            <h3>{desc}</h3>
          </div>
          <div className="card-box__section__right">
            <span>14</span>
            <span>Days</span>
          </div>
        </div>
        <div className="line"></div>
        <div className="card-box__footer">
          <div className="card-box__footer__left">
            <span>Game points</span>
            <p>{value}</p>
          </div>
          <div className="card-box__footer__middle">
            <span>Game entries</span>
            <p>1452</p>
          </div>
          <div className="card-box__footer__right">
            <span>Reminder</span>
            <ToggleButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTwo;
