import './App.css';
import React from "react";


function App() {





    const arr1 = 'WhAt! FiCK! DaMn CAke?'
    const arr2 = 10
    const arr3 = 3
    // const arr4 = 1200
    // const arr5 = true

    const result = (a,b) => {
        return a.toLowerCase().replace(/['!?,. ']/g, "")
    }

    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
