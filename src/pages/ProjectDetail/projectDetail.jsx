import Breadcrum from "../../components/breadcrum/breadcrum";
import style from './projectDetail.module.css'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../utils/fetch";
import { useQuery } from "@apollo/client";
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom";

const ProjectDetail = () => {
    const {slug} = useParams();

    const {loading, error, data} = useQuery(getProject, {
        variables: {slug: slug}
    });
    console.log(loading, error, data?.portfolioProject)
    useEffect(()=>{
            window.scrollTo({
                top: '0',
                behavior: 'smooth'
            })
        })

    return (
        <>
            <Breadcrum 
                path='project detail'
            />
            <section
                className={style.container}
            >
                <div
                    className={style.image_wrp}
                >
                    <img 
                        src={data?.portfolioProject.image.url} 
                        alt={data?.portfolioProject.image.alt}
                        className={style.image} 
                    />
                </div>
                <div
                    className={style.desc_container}
                >
                    <div
                        className={style.desc_wrp}
                    >
                        <h1
                            className={style.title}
                        >
                            {data?.portfolioProject.title}
                        </h1>
                        <ReactMarkdown
                            className={style.desc}
                        >
                            {data?.portfolioProject.description.markdown}
                        </ReactMarkdown>
                    </div>
                    <div
                        className={style.link_wrp}
                    >
                        <Link
                            className={style.link}
                            to={data?.portfolioProject.previewLink}
                            target='_blank'
                        >
                            live preview
                        </Link>
                        <Link
                            className={style.link}
                            to={data?.portfolioProject.sourceCode}
                            target='_blank'
                        >
                            view source code
                        </Link>

                    </div>
                </div>
        
            </section>
        </>
    );
}
 
export default ProjectDetail;