import './App.css';
import React from "react";


function App() {


    const arr1 = 'C.....m'
    // const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        const res = a.split('')
        if (res.filter((elem)=> elem === ".").length > 3){
            return "Escaped!"
        } else

        return "Caught!"
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
