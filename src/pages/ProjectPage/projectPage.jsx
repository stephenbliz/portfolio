import Breadcrum from "../../components/breadcrum/breadcrum";
import Project from "../../components/projects/Project";

const ProjectPage = () => {
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