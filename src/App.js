import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =[7,1,2,3]
    // const arr3 = "world"
    // const arr4 = "l"
    // const arr5 = 5000




    const result = (f) => {
        return (
            !(f.includes(1) && f.includes(2)) &&
            !(f.includes(3) && f.includes(4)) &&
            (f.includes(5) === f.includes(6)) &&
            (f.includes(7) || f.includes(8))
        )

    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
