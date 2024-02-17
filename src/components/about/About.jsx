import style from './about.module.css';
import desktopPhoto from '../../assets/images/portfolioPhotoDesktop.jpg';
import mobilePhoto from '../../assets/images/portfolioPhotoMobile.jpg';

const About = () => {
    return (
        <section className={`${style.section__about} section__margin`}>
            <h1 className={`${style.about__h1} heading__primary`}>About me</h1>
            <div className={style.about__container}>
                <div className={style.about__des}>
                    <p>
                        Hi, I am <strong>Ebuka Stephen Uzoma</strong>, a web development enthusiast.
                        The web is a wide and fast evolving space, I prioritize constant
                        learning to stay on top of the game.
                    </p>
                    <p>
                        Giving quality services is one of my characteristics, from enhancing
                        user experience to increasing engagements. I am open to working with 
                        you and transform your vision into reality.
                    </p>
                </div>
                <figure className={style.photo__container}>
                    <picture className={style.photo__wrapper}>
                        <source srcSet={mobilePhoto} media="(max-width: 860px)" className={style.photo}/>
                        <source srcSet={desktopPhoto} media="(min-width: 861px)" className={style.photo}/>
                        <img src={desktopPhoto} alt="A picture of me" className={style.photo}/>
                    </picture>
                    <figcaption className={style.photo__caption}>
                        Ebuka Stephen Uzoma <span><em>web developer</em></span>
                    </figcaption>
                </figure>
            </div>
            
        </section>
    );
}
 
export default About;