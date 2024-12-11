import About from "../../components/about/About";
import Breadcrum from "../../components/breadcrum/breadcrum";

const AboutMe = () => {
    const description = 'As a passionate frontend developer, I thrive on crafting visually stunning and highly interactive web experiences. Equipped with a solid foundation in JavaScript and TypeScript, I bring dynamic functionality to life, while my expertise in React allows me to build robust, user-friendly interfaces. My proficiency with modern styling tools like Chakra UI and Tailwind CSS ensures that every project is not only functional but also aesthetically pleasing.'

    return (
        <>
            <Breadcrum 
                path='about me'
            />
            <About
                showLink={false}
                description={description}
            />
        </>
    );
}
 
export default AboutMe;