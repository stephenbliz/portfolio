import style from './skills.module.css';
import {motion} from 'framer-motion';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbSquareLetterG } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";

const skillsVariants = {
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


const Skills = () => {
    const skills = [
        {name: 'HTML', icon: <FaHtml5 className={style.skill__icon} style={{color: '#e34c26'}}/>, id: 1},
        {name: 'CSS', icon: <IoLogoCss3 className={style.skill__icon} style={{color: '#264de4'}}/>, id: 2},
        {name: 'Javascript', icon: <DiJavascript className={style.skill__icon} style={{color: '#f0db4f'}}/>, id: 3},
        {name: 'React', icon: <FaReact className={style.skill__icon} style={{color: '#61dbfb'}}/>, id: 4},
        {name: 'Nextjs', icon: <RiNextjsLine className={style.skill__icon} style={{color: '#ffffff'}}/>, id: 5},
        {name: 'TailwindCss', icon: <RiTailwindCssFill className={style.skill__icon} style={{color: '#36B6F2'}}/>, id: 6},
        {name: 'ChakraUI', icon: <SiChakraui className={style.skill__icon} style={{color: '#28B9AD'}}/>, id: 7},
        {name: 'Hygraph', icon: <TbSquareLetterG className={style.skill__icon} style={{color: '#ffffff'}}/>, id: 8},
    ]

    return (
        <section className={`${style.skills__section} section__margin`}>
            <h1 className={`${style.skills_h1} heading__primary`}>
                Skills
            </h1>
            <p>
                My current skills include
            </p>
            <div className={style.skill__wrapper}>
                {skills.map(skill =>(
                    <motion.figure 
                        key={skill.id} 
                        className={style.skill}
                        variants={skillsVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}
                    >
                        <div>{skill.icon}</div>
                        <figcaption className={style.icons__name}>{skill.name}</figcaption>
                    </motion.figure>
                ))}
            </div>
            
        </section>
    );
}
 
export default Skills;