import './App.css';
import React from "react";



function App() {


    const arr1 = 123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil" ]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const age = prompt("podaj swoj wiek")
    const year = new Date().getFullYear()

    const result = (a) => {


    }




    return (
        <>
<h1>{year - age}</h1>
        </>
    );
}

export default App;