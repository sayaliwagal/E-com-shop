import { useState, useEffect, useCallback } from "react";


const useCallApi = (url) =>{
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = useCallback(async() => {
        try{
            setLoading(true);
            setError(null);
            const response = await fetch(url)
            if(!response.ok) throw new Error(`HTTp error! Status: ${response.status}`);
            const res = await response.json();        
            setData(res);
        }catch(err){
            console.error("Error Fetching Data:" , err);
            setError(err.message || "Something went wrong!")
        }finally{
            setLoading(false);
        }
    }, [url]);
    useEffect(()=>{
        getData()
        return () =>{
            setData([]);
            setLoading(false);
        };
    }, [getData])
    return {data, loading, error, refetch: getData};
}

export default useCallApi;