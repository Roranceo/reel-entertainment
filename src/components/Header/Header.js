import "./Header.css";



const Header = () => {
    return <span onClick={() => window.scroll(0, 0)} className="header"><img src={'logo.png'} alt='siteLogo'></img></span>
};

export default Header;
