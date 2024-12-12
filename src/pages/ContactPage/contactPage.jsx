import Breadcrum from "../../components/breadcrum/breadcrum";
import Contact from "../../components/contact/Contact";
import { useEffect } from "react";

const ContactPage = () => {
    useEffect(()=>{
            window.scrollTo({
                top: '0',
                behavior: 'smooth'
            })
        })

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