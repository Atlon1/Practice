import './App.css';
import React from "react";


function App() {


    const arr1 = "abcdef"
    const arr2 = [1, 2, 5]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a, b) => {
        const res = a.split('')

        for (let i = 0; i < b.length; i++) {
            if(res[b[i]]){
                res[b[i]] = res[b[i]].toUpperCase()
            }
        }
        return res.join('')
    }

    console.log(result(arr1, arr2))


    return (
        <>
        </>
    );
}

export default App;
