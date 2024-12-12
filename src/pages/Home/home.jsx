import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import Project from "../../components/projects/Project";
import Skills from "../../components/skills/Skills";
import { useEffect } from "react";


const HomePage = () => {
    useEffect(()=>{
        window.scrollTo({
            top: '0',
            behavior: 'smooth'
        })
    })
    
    return (
        <>
            <Hero />
            <About 
                showLink={true}
                showMedia={false}
                showDesc = {false}
                showExcerpt= {true}
            />
            <Skills />
            <Project />
            <Contact />
        </>
    );
}
 
export default HomePage;