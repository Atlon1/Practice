import './App.css';
import React from "react";


function App() {


    const arr1 = 'ghdfj32'
    // const arr2 = [1, 2, 5]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (string) => {
 return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/.test(string)

    }



    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
