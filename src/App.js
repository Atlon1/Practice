import './App.css';
import React from "react";


function App() {


    const arr1 = 1000
     const arr2 = 0.05
     const arr3 = 0.18
     const arr4 = 1200
    // const arr5 = true


    const result = (a,b,c,d) => {
        let year = 0
        while (a < d){
            a += a * b * (1 -c)
            year += 1
        }

        return year
    }


    console.log(result(arr1,arr2,arr3,arr4))


    return (
        <>
        </>
    );
}

export default App;
