import './App.css';
import React from "react";



function App() {


    const arr1 = {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    };
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil" ]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true





    const result = (a) => {


    }

    const {name, age, getVoice} = arr1

    console.log((`Kot ${name} ma ${age} lat i robi ${getVoice()}`))


    return (
        <>

        </>
    );
}

export default App;