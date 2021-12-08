import axios from "axios";
import { useState, useEffect } from "react";

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined);

    const getViagens = () => {
        axios
        .get(url)
        .then((res) => {
            setData(res.data);
        })
        .catch((error) =>{
            console.log(error);
        });
    };

    useEffect(() => {
        getViagens();
    }, [url]);

    return data
}