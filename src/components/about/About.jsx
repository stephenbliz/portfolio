import style from './about.module.css';
import {motion} from 'framer-motion';
import { Spinner } from '@chakra-ui/react'
import desktopPhoto from '../../assets/images/portfolioPhotoDesktop.jpg';
import mobilePhoto from '../../assets/images/portfolioPhotoMobile.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import ReactMarkdown from 'react-markdown'
import { useQuery } from '@apollo/client';
import { getPortfolioAuthor } from '../../utils/fetch';

const About = ({showLink = true, showMedia = true, showDesc = true, showExcerpt = true}) => {

    const {loading, error, data} = useQuery(getPortfolioAuthor, {
            variables:{slug: 'about-me'}
        })

        console.log(loading, error, data?.portfolioAuthor)

    return (
        <section 
            className={`${style.section__about} section__margin`} 
            // id='about'
        >
            <h1 
                className={`${style.about__h1} heading__primary`}
            >
                About me
            </h1>
            {loading && 
                <div>
                    <Spinner
                        thickness='4px'
                        marginLeft='auto'
                        marginRight='auto'
                        display='block'
                        speed='0.65s'
                        emptyColor='gray.600'
                        color='yellow.500'
                        size='xl'
                    />
                </div>
            }
            {error && 
                <div>
                    Failed to fetch resource
                </div>
            }
            <div className={style.about__container}>
                <motion.div 
                    className={style.about__des}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 2, delay: 0.5, type: 'spring', stiffness: 150}}
                    viewport={{once: true}}
                >
                    {showDesc &&
                    <ReactMarkdown>
                        {data?.portfolioAuthor.description.markdown}
                    </ReactMarkdown>}
                    {showExcerpt &&
                    <p>
                        {data?.portfolioAuthor.excerpt}
                    </p>}
                    {showLink && <button>
                        <Link 
                            to={`/${data?.portfolioAuthor.slug}`}
                            className={style.read_more}
                        >
                            <span>read more</span>
                            <span><FaArrowRightLong /></span>
                        </Link>
                    </button>}
                    {showMedia && 
                        <div
                            className={style.media_wrp} 
                        >
                            <Link 
                                to={data?.portfolioAuthor.facebook} 
                                target='_blank'
                            >
                                <FaFacebookF />
                            </Link>
                            <Link 
                                to={data?.portfolioAuthor.linkedin} 
                                target='_blank'
                            >
                                <FaLinkedinIn />
                            </Link>
                            <Link 
                                to={data?.portfolioAuthor.twitter} 
                                target='_blank'
                            >
                                <FaXTwitter />
                            </Link>
                            <Link 
                                to={data?.portfolioAuthor.tiktok} 
                                target='_blank'
                            >
                                <FaTiktok />
                            </Link> 
                        </div>
                    }
                </motion.div>
                <motion.figure 
                    className={style.photo__container}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 2, delay: 0.5, type: 'spring', stiffness: 150}}
                    viewport={{once: true}}
                >
                    <picture 
                        className={style.photo__wrapper}
                    >
                        <source 
                            srcSet={data?.portfolioAuthor.photo[1].url} 
                            media="(max-width: 860px)" 
                            className={style.photo}
                        />
                        <source 
                            srcSet={data?.portfolioAuthor.photo[0].url} 
                            media="(min-width: 861px)" 
                            className={style.photo}
                        />
                        <img 
                            src={data?.portfolioAuthor.photo[0].url} 
                            alt={data?.portfolioAuthor.photo[0].alt} 
                            className={style.photo}
                        />
                    </picture>
                    <figcaption 
                        className={style.photo__caption}
                    >
                        {data?.portfolioAuthor.name} 
                        <span>
                            <em>
                                {data?.portfolioAuthor.title}
                            </em>
                        </span>
                    </figcaption>
                </motion.figure>
            </div>
            
        </section>
    );
}
 
export default About;