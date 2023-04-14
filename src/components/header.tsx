import logo from "./../assets/logo.png";
import Hamburger from "./hamburger";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <img className="header__logo" src={logo} alt="logo"></img>
        </div>
        <div className="header__actions">
          <nav className="header__nav">
            <a className="header__nav__item" href="/">
              Home
            </a>
            <a className="header__nav__item" href="/exe">
              Excercises
            </a>
            <a className="header__nav__item" href="/ispit">
              Ispit
            </a>
            <a className="header__nav__item" href="/mlinar">
              Mlinar
            </a>
          </nav>
          <div>KZ</div>
        </div>
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
