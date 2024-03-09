import style from './footer.module.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <section className={style.footer__section}>
            <div className={`${style.logo} ${style.footer_child}`}>
                <a href="#"><img src={logo} alt="logo" className="logo" /></a>
            </div>
            <div className={`${style.social__wrapper} ${style.footer_child}`}>
                <h4>Connect with me</h4>
                <div className={style.social__icon_wrp}>
                    <a href="https://www.linkedin.com/in/ebuka-uzoma-blizcode" className={`${style.icon__link} ${style.linkedin__link}`}><FaLinkedin className={`${style.icon}`}/></a>
                    <a href="https://github.com/stephenbliz" className={`${style.icon__link} ${style.github__link}`}><FaGithub className={`${style.icon}`}/></a>
                </div>
            </div>
            <p className={`${style.copyright} ${style.footer_child}`}>
                &#169; 2024 Ebuka Stephen Uzoma. All rights reserved.
            </p>
        </section>
    );
}
 
export default Footer;