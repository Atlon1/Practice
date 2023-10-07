import './App.css';
import React, {useEffect, useState} from "react";
import getNames from "./names";


function App() {


    // const data = 'Mężczyzna'
    // const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

    useEffect(()=>{
        getNames().then((names)=>{
            setNames(names)
        })
    },[])

    const [names, setNames] = useState([]);

    return (
        <>
            {names.map((name) => {
                return <div key={name}>{name}</div>;
            })}
        </>


    );
}

export default App;