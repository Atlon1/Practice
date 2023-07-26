import './App.css';
import React from "react";


function App() {


    const arr2 = [12, 34, 56, 78]
    const arr3 = 5
    const arr4 = 1.8
    // const arr5 = 5000




    const result = (...a) => {
        const numbers = [0,1,2,3,4,5,6,7,8,9]

        let  numStr = a.join('')

        return numbers.filter(elem => !numStr.includes(elem)).join('')
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
