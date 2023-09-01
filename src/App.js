import './App.css';
import React from "react";


function App() {


    const arr1 = "Ala ma kota"
    const arr2 = 10
    const arr3 = 3
    // const arr4 = 1200
    // const arr5 = true


    const result = (a, b, c) => {
        const res = a.split('').map((elem) => elem.toLowerCase())
        let count = {}
        for (let i = 0; i < res.length; i++) {
            if (res[i].match(/[a-z]/i)) {
                if (count[res[i]]) {
                    count[res[i]]++
                } else {
                    count[res[i]] = 1
                }
            }
        }


        return count
    }
    console.log(result(arr1, arr2, arr3))


    return (
        <>
        </>
    );
}

export default App;
