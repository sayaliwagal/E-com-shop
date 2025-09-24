import { useState, useEffect } from "react";


const useCallApi = (url) =>{
    const [data, setData] = useState({});
    const getData = async() => {
           const response = await fetch(url)
           const res = await response.json();        
            setData(res);
        }
    useEffect(()=>{
        getData()
    }, [url])
    return data;
}

export default useCallApi;