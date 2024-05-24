import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchData = async() => {
            setLoading(true);

            try{
                const res = await fetch(url);
                const data = await res.json();
                // console.log('this is data fetched', json);
                setData(data);
                setLoading(false)
            }catch(error){
                setError(error);
                setLoading(false);
            }
           
        }

        if(url){
            fetchData();
        }

    }, [url])

    return {data, error, loading}
}
 
export default useFetch;