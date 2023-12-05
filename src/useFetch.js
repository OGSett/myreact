import { useState, useEffect } from "react";

const useFetch = () => {
    const [data,setData] = useState();
    const [isLoading,setIsLoading] = useState();
    const [error,setError] = useState();


    useEffect(() => {
        fetch(`http://localhost:3000/data.json`)
    .then(res => {
        if (!res.ok) {
            throw Error('could not fetch data for that resource');
        }
        return res.json();
    })
    .then(data => {
        setData(data);
        setIsLoading(false);
        setError(null);
    })
    .catch(err => {
        setIsLoading(false);
        setError(err.message);
    });
    },[])
    return { data, isLoading, error}
}

export default useFetch;