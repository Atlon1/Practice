import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = 3
    // const arr2 = "garlic naan"


    const result = (a) => {
        let array = []
        for (let i = 0 ; i <= a; i++){
            array[i]= []
            for (let j = 0; j < a; j++){
                array[i][j] = (i + 1) * (j + 1)
            }
        }
        return array
    }

    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
