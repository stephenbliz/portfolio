import About from "../../components/about/About";
import Breadcrum from "../../components/breadcrum/breadcrum";
import { useEffect } from "react";

const AboutMe = () => {
    useEffect(()=>{
        window.scrollTo({
            top: '0',
            behavior: 'smooth'
        })
    },[])
    
    return (
        <>
            <Breadcrum 
                path='about me'
            />
            <About
                showLink={false}
                showDesc = {true}
                showExcerpt = {false}
                showMedia = {true}
                // description={description}
            />
        </>
    );
}
 
export default AboutMe;