import './App.css';
import React from "react";


function App() {


    const arr1 = 85
    // const arr2 = "z"
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        return a === 88 ? "Leo finally won the oscar! Leo is happy" :
            a === 86 ? "Not even for Wolf of wallstreet?!" :
                a <= 86 ? "When will you give Leo an Oscar?" :
                    a >= 89 ? "Leo got one already!" : "When will you give Leo an Oscar?"
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
