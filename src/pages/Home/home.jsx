import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import Project from "../../components/projects/Project";
import Skills from "../../components/skills/Skills";
import { getPortfolioAuthor } from "../../utils/fetch";
import { useQuery } from '@apollo/client';

const HomePage = () => {
    const {loading, error, data} = useQuery(getPortfolioAuthor, {
        variables:{slug: 'about-me'}
    })

    console.log(loading, error, data)
    const description = 'As a passionate frontend developer, I thrive on crafting visually stunning and highly interactive web experiences. Equipped with a solid foundation in JavaScript and TypeScript, I bring dynamic functionality to life, while my expertise in React allows me to build robust, user-friendly interfaces. My proficiency with modern styling tools like Chakra UI and Tailwind CSS ensures that every project is not only functional but also aesthetically pleasing.'
    return (
        <>
            <Hero />
            <About 
                showLink={true}
                showMedia={false}
                description={description}
            />
            <Skills />
            <Project />
            <Contact />
        </>
    );
}
 
export default HomePage;