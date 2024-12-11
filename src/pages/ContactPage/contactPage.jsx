import Breadcrum from "../../components/breadcrum/breadcrum";
import Contact from "../../components/contact/Contact";

const ContactPage = () => {
    return (
        <>
            <Breadcrum 
                path='contact me'
            />
            <Contact />
        </>
    );
}
 
export default ContactPage;