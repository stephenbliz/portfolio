import style from './hero.module.css';
import {motion} from 'framer-motion';

const Hero = () => {
    return (
        <section 
            className={style.hero__section} 
            id='hero'    
        >
           <motion.div 
            className={style.hero__wrp}
            initial={{opacity: 0, y: '-50vh'}}
            animate={{opacity: 1, y:0 }}
            transition={{delay: 0.5, duration: 1, type: 'spring', stiffness: 120}}
           >
                <p className={style.hero__para}>Hi, I am </p>
                <h1 className={style.name__wrp}>
                    Ebuka Stephen Uzoma
                </h1>
                <p className={style.hero__para}>I am glad to have you here!</p>
           </motion.div>
        </section>
    );
}
 
export default Hero;