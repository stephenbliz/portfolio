import style from './about.module.css';
import {motion} from 'framer-motion';
import desktopPhoto from '../../assets/images/portfolioPhotoDesktop.jpg';
import mobilePhoto from '../../assets/images/portfolioPhotoMobile.jpg';

const About = () => {

    return (
        <section className={`${style.section__about} section__margin`} id='about'>
            <h1 className={`${style.about__h1} heading__primary`}>About me</h1>
            <div className={style.about__container}>
                <motion.div 
                    className={style.about__des}
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 2, delay: 0.5, type: 'spring', stiffness: 150}}
                    viewport={{once: true}}
                >
                    <p>
                        As a passionate frontend developer, I thrive on crafting visually 
                        stunning and highly interactive web experiences. Equipped with a solid 
                        foundation in JavaScript and TypeScript, I bring dynamic functionality 
                        to life, while my expertise in React allows me to build robust, 
                        user-friendly interfaces. My proficiency with modern styling tools like 
                        Chakra UI and Tailwind CSS ensures that every project is not only 
                        functional but also aesthetically pleasing.
                    </p>
                </motion.div>
                <motion.figure 
                    className={style.photo__container}
                    initial={{opacity: 0, x: 200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 2, delay: 0.5, type: 'spring', stiffness: 150}}
                    viewport={{once: true}}
                >
                    <picture className={style.photo__wrapper}>
                        <source srcSet={mobilePhoto} media="(max-width: 860px)" className={style.photo}/>
                        <source srcSet={desktopPhoto} media="(min-width: 861px)" className={style.photo}/>
                        <img src={desktopPhoto} alt="A picture of me" className={style.photo}/>
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