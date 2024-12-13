import Breadcrum from "../../components/breadcrum/breadcrum";
import Project from "../../components/projects/Project";
import { getAllProjects } from "../../utils/fetch";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const ProjectPage = () => {
    const {loading, error, data} = useQuery(getAllProjects);

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
            <Project
                showLink= {false}
                loading={loading}
                error={error}
                data={data} 
            />
        </>
    );
}
 
export default ProjectPage;