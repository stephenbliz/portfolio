import style from './breadcrum.module.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Breadcrum = ({path}) => {
    return (
        <section 
            className={style.breadcrum__section} 
            id='hero'    
        >
           <div 
            className={style.breadcrum__wrp}
           >
                <h1
                    className={style.breadcrum_title}
                >
                    {path}
                </h1>
                <div
                    className={style.breadcrum_subtitle}
                >
                    <span className={style.breadcrum_span1}>
                        <Link to='/'>home</Link>
                    </span>
                    <span><FaArrowRightLong /></span>
                    <span>{path}</span>
                </div>
           </div>
        </section>
    );
}
 
export default Breadcrum;