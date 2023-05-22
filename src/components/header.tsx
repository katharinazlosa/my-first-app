import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        {/* <Link to="/"> */}
        <div>
          <img className="header__logo" src={logo} alt="logo"></img>
        </div>
        {/* </Link> */}
        <div className="header__actions">
          <nav className="header__nav">
            <a className="header__nav__item" href="/">
              Home
            </a>
            <a className="header__nav__item" href="/stranice">
              Pages
            </a>
            <a className="header__nav__item" href="/ispiti">
              Exams
            </a>
            <a className="header__nav__item" href="/vjezbe">
              Exercises
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
