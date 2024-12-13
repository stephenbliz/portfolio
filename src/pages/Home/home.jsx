import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import Project from "../../components/projects/Project";
import Skills from "../../components/skills/Skills";
import { get4Projects } from "../../utils/fetch";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";


const HomePage = () => {
    const {loading, error, data} = useQuery(get4Projects);

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
            <Project 
                showLink= {true}
                data ={data}
                error={error}
                loading={loading}
            />
            <Contact />
        </>
    );
}
 
export default HomePage;