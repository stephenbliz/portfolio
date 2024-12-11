import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    const [isMenuclick, setIsMenuclick] = useState(true);

    const handleMenuclick = () => {
        setIsMenuclick(!isMenuclick)
    }

    const handleMenuClose = ()=> {
        setIsMenuclick(false);
    }

    const width = window.screen.availWidth < '650' & !isMenuclick;

    const menuStyles = {
        width: width ?  '100vw': '',
        height: width ?  '100vh': '',
        opacity: width ?  '1' : '',
        visibility: width ?  'visible' : '',
    }
    const backStyle = {
        opacity: width ?  '1' : '',
        visibility: width ?  'visible' : '',
        transform: width ? 'scale(50)' : ''
    }

    return (
        <header>
            <nav className={style.nav}>
                <div className={style.logo}>
                    <a href="#"><img src={logo} alt="logo" className="logo" /></a>
                </div>
                <div className={style.menu__background} style={backStyle}></div>
                <ul className={`${style.nav__list}`} style={menuStyles} onClick={()=>handleMenuclick()}>
                    <li className={style.nav__items}><Link to="/" className={style.nav__links}>Home</Link></li>
                    <li className={style.nav__items}><Link to="/about-me" className={style.nav__links}>About</Link></li>
                    <li className={style.nav__items}><Link to="/project" className={style.nav__links}>Projects</Link></li>
                    <li className={style.nav__items}><Link to="/contact" className={style.nav__links}>Contact</Link></li>
                    <li className={style.nav__items}><Link to="/blog" className={style.nav__links}>Blog</Link></li>
                </ul>
                <div className={style.memu_icon} onClick={handleMenuclick}>
                    <div className={`${style.lines} ${!isMenuclick ? style.line1 : ''}`}></div>
                    <div className={`${style.lines} ${!isMenuclick ? style.line2 : ''}`}></div>
                    <div className={`${style.lines} ${!isMenuclick ? style.line3 : ''}`}></div>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;