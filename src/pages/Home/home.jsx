import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import Project from "../../components/projects/Project";
import Skills from "../../components/skills/Skills";

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
        </>
    );
}
 
export default HomePage;