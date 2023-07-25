import './App.css';
import React from "react";


function App() {


    const arr2 = "stop Making spongebob Memes!"
    const arr3 = 4
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
       return a.split('').map((elem, i) => i % 2 === 0 ? elem.toUpperCase() : elem.toLowerCase()).join('')
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
