import './App.css';
import React, {useEffect, useState} from "react";
import AddUser from "./AddUser";


function App() {

    const api = 'http://localhost:3000'

    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetch(`${api}/users`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsOpen(true)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    console.log(data)


    return (
        <>
            {isOpen ? <AddUser data={data} setData={setData}/> : <div>Loading...</div>}

            <div>Użytkownicy</div>
            {data.map((elem)=>{
                return (
                    <div
                        style={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'yellow'
                        }
                        }
                        key={elem.id}>
                        <h1>{elem.name}</h1>
                        <h2>{elem.surname}</h2>
                        <div>{elem.city}</div>
                        <div>{elem.gender}</div>
                        <div>{elem.age}</div>
                    </div>
                )
            })}


        </>


    );
}

export default App;