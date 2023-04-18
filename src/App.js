import './App.css';
import React from "react";


function App() {


    const arr1 = "Reverse this string, please!"
    // const arr2 = 15
    // const arr3 = 0.9
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {


        const res = a.split(' ')

        for(let i = 1; i < res.length; i += 2){
            res[i] = res[i].split('').reverse().join('')
        }
        return res.join(' ').trim()
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
