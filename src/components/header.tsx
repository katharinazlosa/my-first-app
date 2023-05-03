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
            <a className="header__nav__item" href="/teorem">
              Teorem
            </a>
            <a className="header__nav__item" href="/fave">
              Fave
            </a>
            <a className="header__nav__item" href="/varijable">
              Varijable
            </a>
            <a className="header__nav__item" href="/petlje">
              Petlje
            </a>
            <a className="header__nav__item" href="/vjezba2604">
              Vjezba2604
            </a>
            <a className="header__nav__item" href="/vjezba2804">
              Vjezba2804
            </a>
            <a className="header__nav__item" href="/vjezba0305">
              Vjezba0305
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
