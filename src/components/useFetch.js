import { useState, useEffect } from 'react';

export default function useFetch(url) {

    const [data, setData] = useState (null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
            throw Error('Could not fetch the date for that resource')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
        })
    }, [url]);


  return { data, error }
}
