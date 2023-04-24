import './App.css';
import React from "react";


function App() {


    const arr1 = [3,4,5]
    // const arr2 = 'string2'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        const [d,f,g] = a.sort((a,b) => a -b)

        return d**2 + f ** 2 === g ** 2
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
