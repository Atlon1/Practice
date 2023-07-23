import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =3

    const arr3 = 10
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
       let pattern = "1"

        for (let i = 2; i <= a; i++){
            pattern += "\n1" + Array(i).join("*") + i;
        }

        return pattern

    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
