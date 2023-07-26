import './App.css';
import React from "react";


function App() {


    const arr2 = [2, 8, 10, 9, 1, 3, 4, 7, 6, 5]
    const arr3 = 5
    const arr4 = 1.8
    // const arr5 = 5000




    const result = (a,b,c) => {
     return a.sort((a,b) => a - b).reverse().map((elem)=> elem.toString()).join(" ") + " liftoff!"
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
