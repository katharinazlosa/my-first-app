import logo from './../assets/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <div>
                <img className='header__logo' src={logo} alt="logo"></img>
            </div>
            <div className='header__actions'>
                <nav className='header__nav'>
                    <a className="header__nav__item" href="">Home</a>
                    <a className="header__nav__item" href="">About</a>
                </nav>
                <div>KZ</div>
            </div>
        </header>
    )
}

export default Header;