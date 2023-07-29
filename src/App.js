import './App.css';
import React from "react";


function App() {


    const arr2 = [1,3,3,4,5]
    const arr3 = 3
    const arr4 = 4
    // const arr5 = 5000




    const result = (a) => {

       return a.filter((i)=> a.indexOf(i) === a.lastIndexOf(i)).reduce((a,b)=> a + b)
    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
