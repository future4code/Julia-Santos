import axios from "axios";
import {useState, useEffect } from "react";

export default function App() {
    const [data, setData] = useState([])

    const getData = () => {
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/populate")
        .then((res) => {
            setData(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(data)

    return (
        <div>
            Trips on the World
        </div>
    )
}