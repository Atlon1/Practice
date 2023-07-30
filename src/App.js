import './App.css';
import React from "react";


function App() {


    const arr1 = 15
    const arr2 = 15
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        return [(a < 24) ? a /15 : (a -16) / 4,
            (b< 24) ? b/15 : (b-16) / 5].map(Math.floor)

    }



    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
