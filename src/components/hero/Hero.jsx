import style from './hero.module.css';

const Hero = () => {
    return (
        <section className={style.hero__section} id='hero'>
           <div className={style.hero__wrp}>
            <p className={style.hero__para}>Hi, I am </p>
            <h1 className={style.name__wrp}>
                Ebuka Stephen Uzoma
            </h1>
            <p className={style.hero__para}>I am glad to have you here!</p>
           </div>
        </section>
    );
}
 
export default Hero;