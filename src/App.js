import './App.css';
import React from "react";


function App() {


    const arr1 = [-40, -20, 320, 350, 500]
    const arr2 = 'value'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
       const animal = {name:"dog",legs:4,color:"white"}
        return `This ${animal.color} ${animal.name} has ${animal.legs} legs.`
    }


    console.log(result(arr1, arr2))

    return (
        <>
        </>
    );
}

export default App;
