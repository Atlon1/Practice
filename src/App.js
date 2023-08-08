import './App.css';
import React from "react";


function App() {


    const arr1 = {name: 'Jeremy', age: 24, role: 'Software Engineer'}
    const arr2 = 4
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
       return Object.entries(a).sort()

    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
