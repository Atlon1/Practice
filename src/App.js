import './App.css';
import React from "react";


function App() {


    const arr1 = 88
    const arr2 = 4
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        return a.length ? Math.max(...a.map(x=>x.filter(y=>y==x).length)) : 0
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
