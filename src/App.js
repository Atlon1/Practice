import './App.css';
import React, {useEffect, useState} from "react";
import Cars from "./Cars";

function App() {



    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const api = 'http://localhost:3000';

    useEffect(() => {
        fetch(`${api}/cars`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(true)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const handleRemove = (id) => {
        const newData = data.filter(elem => elem.id !== id)
        setData(newData)
    }

    return (
        <>

            {loading ? data.map((data) => <Cars
                key={data.id}
                data={data}
                remove={handleRemove}
                setData={setData}
                api={api}></Cars>

                ) : <div>Loading...</div>}

        </>


    );
}

export default App;