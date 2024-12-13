import style from './project.module.css';
import { Spinner } from '@chakra-ui/react'
import {motion} from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const projectVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 1.5,
            type: 'spring',
            stiffness: 150,
        },
    },
    
}

const Project = ({showLink = true, data, loading, error}) => {
    
    return (
        <section 
            className={`${style.section__project} section__margin`} 
            id='project'
        >
            <h1 className={`${style.project__h1} heading__primary`}>
                Projects
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
                    Failed to fetch projects
                </div>
            }
            <div 
                className={style.project__container}
            >
                {data?.portfolioProjects.map(project =>(
                    <motion.div 
                        className={style.project__wrapper} 
                        key={project.id}
                        variants={projectVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}
                    >
                        <div 
                            className={style.project__front}
                        >
                            <img 
                                src={project.image.url} 
                                alt={project.image.alt}
                                className={style.project__image} 
                            />
                        </div>
                        <div 
                            className={style.project__back} 
                            style={{backgroundColor: project.colour}}
                        >
                            <h3 
                                className={style.project__name}
                            >
                                {project.title}
                            </h3>
                            <p 
                                className={style.project_desc}
                            >
                                {project.excerpt}
                            </p>
                            <a 
                                href={`/project/project-detail/${project.slug}`} 
                                className={style.project__link}
                            >
                                details
                            </a>
                            
                        </div>
                    </motion.div>
                ))}
            </div>
            {showLink && 
                <Link
                    to='/project'
                    className={style.show_more_projects}
                >
                    <span>show more projects</span>
                    <span><FaArrowRightLong /></span>
                </Link>
            }
            
        </section>
    );
}
 
export default Project;