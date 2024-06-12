import style from './hero.module.css';
import {motion} from 'framer-motion';

const heroVariant = {
    hidden: {
        opacity: 0,
        y: '-50vh'
    },
    visible: {
        opacity: 1, 
        y:0,
        transition: {
            delay: 0.2, 
            duration: 2, 
            type: 'spring', 
            stiffness: 150,
            when: 'beforeChildren',
            staggerChildren: 0.7
        } 
    }
}

const heroChildVariant = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 150
        }
    }
}

const Hero = () => {
    return (
        <section 
            className={style.hero__section} 
            id='hero'    
        >
           <motion.div 
            className={style.hero__wrp}
            variants={heroVariant}
            initial='hidden'
            animate='visible'
           >
                <p className={style.hero__para}>
                    Hi, I am 
                </p>
                <motion.h1 
                    className={style.name__wrp}
                    variants={heroChildVariant}
                >
                    Ebuka Stephen Uzoma
                </motion.h1>
                <motion.p 
                    className={style.hero__para}
                    variants={heroChildVariant}
                >
                    I am glad to have you here!
                </motion.p>
           </motion.div>
        </section>
    );
}
 
export default Hero;