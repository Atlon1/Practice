import './App.css';
import React from "react";


function App() {



    const arr1 = 10
    const arr2 = 3
    const arr3 = 1
    // const arr4 = 1200
    // const arr5 = true



    const result = (a, b, c) => {
        let res = []
        let min = 1
        let max = 49
        for (let i = 0; i < a; i++){
            const row =[]
            for (let j = 0; j < 6; j++){
                let num = min + Math.floor((max - min) * Math.random())
                row.push(num)
            }
            res.push(row)
        }

        return res
    }


    console.log(result(arr1,arr2, arr3))


    return (
        <>
        </>
    );
}

export default App;
