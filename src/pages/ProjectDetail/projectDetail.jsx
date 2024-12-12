import Breadcrum from "../../components/breadcrum/breadcrum";
import { useEffect } from "react";

const ProjectDetail = () => {
    useEffect(()=>{
            window.scrollTo({
                top: '0',
                behavior: 'smooth'
            })
        })

    return (
        <>
            <Breadcrum 
                path='project detail'
            />
        </>
    );
}
 
export default ProjectDetail;