import style from './about.module.css';
import {motion} from 'framer-motion';
import desktopPhoto from '../../assets/images/portfolioPhotoDesktop.jpg';
import mobilePhoto from '../../assets/images/portfolioPhotoMobile.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
// import { useQuery } from '@apollo/client';

const About = ({showLink = true, description, showMedia = true}) => {

    return (
        <section className={`${style.section__about} section__margin`} id='about'>
            <h1 className={`${style.about__h1} heading__primary`}>About me</h1>
            <div className={style.about__container}>
                <motion.div 
                    className={style.about__des}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 2, delay: 0.5, type: 'spring', stiffness: 150}}
                    viewport={{once: true}}
                >
                    <p>
                        {description}
                    </p>
                    {showLink && <button>
                        <Link 
                            to='/about-me'
                            className={style.read_more}
                        >
                            <span>read more</span>
                            <span><FaArrowRightLong /></span>
                        </Link>
                    </button>}
                    {showMedia && <div
                        className={style.media_wrp} 
                    >
                        <Link to='#'><FaFacebookF /></Link>
                        <Link to='#'><FaLinkedinIn /></Link>
                        <Link to='#'><FaXTwitter /></Link>
                        <Link to='#'><FaTiktok /></Link> 
                    </div>}
                </motion.div>
                <motion.figure 
                    className={style.photo__container}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 2, delay: 0.5, type: 'spring', stiffness: 150}}
                    viewport={{once: true}}
                >
                    <picture className={style.photo__wrapper}>
                        <source srcSet={mobilePhoto} media="(max-width: 860px)" className={style.photo}/>
                        <source srcSet={desktopPhoto} media="(min-width: 861px)" className={style.photo}/>
                        <img src={desktopPhoto} alt="A picture of Ebuka Stephen Uzoma" className={style.photo}/>
                    </picture>
                    <figcaption className={style.photo__caption}>
                        Ebuka Stephen Uzoma <span><em>frontend developer</em></span>
                    </figcaption>
                </motion.figure>
            </div>
            
        </section>
    );
}
 
export default About;