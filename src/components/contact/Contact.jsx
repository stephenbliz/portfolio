import { useState } from 'react';
import style from './contact.module.css';
import { LuMail } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import {db} from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const Contact = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: '',
        details: ''
    });

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setContact({...contact, [name]: value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const message = {
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            details: contact.details
        }
        const colRef = collection(db, 'messages');

        addDoc(colRef, message)
            .then(()=>{
            setContact({
                name: '',
                email: '',
                subject: '',
                details: ''
            });
            setTimeout(()=>{
                alert('Message sent');
            }, 2000)
        })
    }

    

    return (
        <section className={`${style.contact__section} section_margin`} id='contact'>
            <h1 className={`${style.contact__h1} heading__primary`}>Contact me</h1>
            <div className={style.contact__container}>
                <div className={style.contact__desc_wrapper}>
                    <h1 className={style.contact__intro}>
                        Let's chat. <br /> Tell me about your project.
                    </h1>
                    <p className={style.contact__para}>
                        Let's create something together
                    </p>
                    <div className={style.contact__mailContainer}>
                        <a href="mailto:uzomaebuka11@gmail.com" className={style.contact__mail}>
                            <span className={style.mail_iconWrapper}><LuMail className={style.mailIcon}/></span> 
                            <span className={style.mail_text}>Mail me at <br /> <span className={style.email}>uzomaebuka11@gmail.com</span></span>
                        </a>
                    </div>
                    <div className={style.phoneWrapper}>
                        <div><FaPhoneAlt className={style.phone_icon} /> Phone :</div>
                        <a href="tel:+2349033852644" className={style.phone_number}>+2349033852644</a>
                    </div>
                </div>
                <form className={style.contact__form} onSubmit={(e)=> handleSubmit(e)}>
                    <h3 className={style.contact__form_h2}>Send us a message</h3>
                    <div className={style.form__group}>
                        <input 
                            type="text" 
                            className={`${style.form__input} ${style.input}`}
                            placeholder='Full name' 
                            required
                            id='name'
                            name='name'
                            value={contact.name}
                            onChange={(e)=> handleChange(e)}
                        />
                        <label htmlFor="name" className={style.form__label}>Full Name</label>
                    </div>

                    <div className={style.form__group}>
                        <input 
                            type="email" 
                            className={`${style.form__input} ${style.input}`}
                            placeholder='Email address' 
                            required
                            id='email'
                            name='email'
                            value={contact.email}
                            onChange={(e)=> handleChange(e)}
                        />
                        <label htmlFor="email" className={style.form__label}>Email address</label>
                    </div>

                    <div className={style.form__group}>
                        <input 
                            type="text" 
                            className={`${style.form__input} ${style.input}`}
                            placeholder='Subject' 
                            required
                            id='subject'
                            name='subject'
                            value={contact.subject}
                            onChange={(e)=> handleChange(e)}
                        />

                        <label htmlFor="subject" className={style.form__label}>Subject</label>
                    </div>

                    <h5 className={style.form__mailDetails_h3}>
                        Tell us more about your project
                    </h5>

                    <textarea 
                        type="text" 
                        className={`${style.form__input} ${style.form__mailDetails}`}
                        value={contact.details} 
                        name='details'
                        onChange={(e)=> handleChange(e)}
                    />
                    <button className={style.form__button} type='submit'>Send message</button>
                    
                </form>
            </div>
        </section>
    );
}
 
export default Contact;