import './App.css';
import React from "react";


function App() {


    const arr1 ='aaabcccbaaa'
    // const arr2 = 1.23
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
       const res = a.split('')
        const arr = []

        for (let i = 0; i < res.length; i++){
            if (res[i] === 'a'){
                arr.push('b')
            } else if (res[i]=== "b"){
                arr.push('a')
            } else arr.push(res[i])
        }

        return arr.join('')
    }

    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
