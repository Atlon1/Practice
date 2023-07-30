import './App.css';
import React from "react";


function App() {



    const arr1 = [1,21,4,7,5]
    const arr2 = 15
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
       return a.filter((elem, idx)=>a.slice(idx+1).every(z=> z < elem) )
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
