import style from './skills.module.css';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";


const Skills = () => {
    const skills = [
        {name: 'HTML', icon: <FaHtml5 className={style.skill__icon} style={{color: '#e34c26'}}/>, id: 1},
        {name: 'CSS', icon: <IoLogoCss3 className={style.skill__icon} style={{color: '#264de4'}}/>, id: 2},
        {name: 'Javascript', icon: <DiJavascript className={style.skill__icon} style={{color: '#f0db4f'}}/>, id: 3},
        {name: 'React', icon: <FaReact className={style.skill__icon} style={{color: '#61dbfb'}}/>, id: 4},
        {name: 'Firebase', icon: <IoLogoFirebase className={style.skill__icon} style={{color: '#FFA611'}}/>, id: 5}
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
                    <figure key={skill.id} className={style.skill}>
                        <div>{skill.icon}</div>
                        <figcaption className={style.icons__name}>{skill.name}</figcaption>
                    </figure>
                ))}
            </div>
            
        </section>
    );
}
 
export default Skills;