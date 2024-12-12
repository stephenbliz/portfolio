import Breadcrum from "../../components/breadcrum/breadcrum";
import Project from "../../components/projects/Project";
import { useEffect } from "react";

const ProjectPage = () => {
    useEffect(()=>{
            window.scrollTo({
                top: '0',
                behavior: 'smooth'
            })
        })

    return (
        <>
            <Breadcrum 
                path='projects'
            />
            <Project />
        </>
    );
}
 
export default ProjectPage;