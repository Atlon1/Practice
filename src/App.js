import './App.css';
import React, {useEffect, useState} from "react";
import AddCar from "./AddCar";

function App() {


    // const data = 'Mężczyzna'
    // const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


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
    console.log(data)

    const handleRemove = (id) => {
        const newData = data.filter(elem => elem.id !== id)
        setData(newData)
    }

    return (
        <>
            <ul>
                {data.map((elem, id) => {
                    return (
                        <div key={elem.id}>
                            <li>{elem.name}</li>
                            <button onClick={handleRemove.bind(this, elem.id)}>Sprzedany</button>
                        </div>

                    )
                })}

            </ul>

            {loading ?   <div><AddCar data={data} setData={setData} /></div> : <div>Loading...</div> }

        </>


    );
}

export default App;