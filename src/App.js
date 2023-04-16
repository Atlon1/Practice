import './App.css';
import React from "react";


function App() {


    const arr1 = 56789
    // const arr2 = 3
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        let res = a.toString()
        let arr = [res]
        for (let i = 0; i < res.length; i++){
            res = res.slice(0,i)+res.slice(i+1)+res[i]
            arr.push(res.split().join())
        }

        return Math.max.apply(null, arr)
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
