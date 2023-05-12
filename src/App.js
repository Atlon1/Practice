import './App.css';
import React from "react";


function App() {


    const arr1 = 'abcdef'
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        let total1 = ''
        for (let i = 0; i < a.length; i++) {
            let res = a.charCodeAt(i)
            total1 += `${res}`
        }

        let total2 = total1.split('').map((elem) => elem === "7" ? "1" : elem).join('')
        return parseInt(total1 - total2)
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
