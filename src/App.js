import './App.css';
import React from "react";


function App() {


    const arr1 = ['24', '12', '23', '22', '4', '26', '9', '8']
    // const arr2 = 'BC'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
        let res = a.map(val => alpha[val]).join('')


        return res
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
