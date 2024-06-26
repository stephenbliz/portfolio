import style from './project.module.css';
import { Spinner } from '@chakra-ui/react'
import {motion} from 'framer-motion';
import editor from '../../assets/images/text_editor.png';
import translator from '../../assets/images/live_translator.png';
import portnew from '../../assets/images/portnew.png';
import expense from '../../assets/images/expense_tracker.png';
import bmi from '../../assets/images/bmi_calculator.png';
import ageCalculator from '../../assets/images/age_calculator.png';
import useFetch from '../hooks/useFetch';

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

const Project = () => {

const {data, error, loading} = useFetch(`${import.meta.env.VITE_DATABASE_URL}/api/projects?populate=*`);

    console.log(data, error, loading);
    
    // const projects = [
    //     {name: 'expense tracker', desc: 'This web application calculates all your expenses and incomes and give the balance by substracting the expenses from the income', 
    //         image: expense, link: 'https://expense-tracker-theta-henna.vercel.app', color: '#ab6f60', id: 1},
    //     {name: 'text editor', desc: 'A web application that allow users to create, edit, and manipulate plain text files', image: editor, link: 'https://text-editor-app-stephenbliz.vercel.app', color: '#b8b4b4', id: 2},
    //     {name: 'portnew project', desc: 'A random web design suggestion because of the interesting challenges in it', image: portnew, link: 'https://portnew-project.vercel.app', color: '#2e7941', id: 3},
    //     {name: 'BMI calculator', desc: 'This application allow users to calculate their Body Mass Index by inputing their height and weight', image: bmi, link: 'https://bmi-calculator-khaki-iota.vercel.app', color: '#afccda', id: 4},
    //     {name: 'age calculator', desc: 'Users can calculate their age with the help of this web application by inputing the date, month and year of birth', image: ageCalculator, link: 'https://age-calculator-nine-eta.vercel.app', color: '#8951b7', id: 5},
    //     {name: 'live language translator', desc: 'This web application allow users to translate foreign languages to native language', image: translator, link: 'https://live-language-translator.vercel.app', color: '#6b6b8a', id: 6},
    // ];
    if(loading) {
        return (
            <section 
                className={`${style.section__project} section__margin`} 
                id='project'
            >
                <h1 className={`${style.project__h1} heading__primary`}>
                    Projects
                </h1>
                <p>
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
                    <p className={style.loading_message}>
                        This may take about 53 seconds...
                    </p>
                </p>
            </section>
        )
    }

    if(error) {
        return (
            <section 
                className={`${style.section__project} section__margin`} 
                id='project'
            >
                <h1 className={`${style.project__h1} heading__primary`}>
                    Projects
                </h1>
                <p>
                    {error.message}
                </p>
            </section>
        )
    }

    if(data && Array.isArray(data.data)){
        return (
            <section 
                className={`${style.section__project} section__margin`} 
                id='project'
            >
                <h1 className={`${style.project__h1} heading__primary`}>
                    Projects
                </h1>
                <div className={style.project__container}>
                    {data.data.map(project =>(
                        <motion.div 
                            className={style.project__wrapper} 
                            key={project.id}
                            variants={projectVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}}
                        >
                            <div className={style.project__front}>
                                <img 
                                    src={`${project.attributes.image.data.attributes.url}`} 
                                    alt={project.attributes.image.data.attributes.alternativeText} 
                                    className={style.project__image} 
                                />
                            </div>
                            <div 
                                className={style.project__back} 
                                style={{backgroundColor: project.attributes.colour}}
                            >
                                <h3 className={style.project__name}>
                                    {project.attributes.name}
                                </h3>
                                <p className={style.project_desc}>
                                    {project.attributes.description}
                                </p>
                                <a 
                                    href={project.attributes.link} 
                                    className={style.project__link}
                                >
                                    View project
                                </a>
                                
                            </div>
                        </motion.div>
                    ))}
                </div>
                
            </section>
        );
    }

    return (
        <section 
            className={`${style.section__project} section__margin`} 
            id='project'
        >
            <h1 className={`${style.project__h1} heading__primary`}>
                Projects
            </h1>
            <p>
                No project available
            </p>
        </section>
    )

    // return (
    //     <section className={`${style.section__project} section__margin`} id='project'>
    //         <h1 className={`${style.project__h1} heading__primary`}>Projects</h1>
    //         <div className={style.project__container}>
    //             {projects.map(project =>(
    //                 <div className={style.project__wrapper} key={project.id}>
    //                     <div className={style.project__front}>
    //                         <img src={project.image} alt="project image" className={style.project__image} />
    //                     </div>
    //                     <div className={style.project__back} style={{backgroundColor: project.color}}>
    //                         <h3 className={style.project__name}>{project.name}</h3>
    //                         <p className={style.project_desc}>
    //                             {project.desc}
    //                         </p>
    //                         <a href={project.link} className={style.project__link}>View project</a>
                            
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
            
    //     </section>
    // );
}
 
export default Project;