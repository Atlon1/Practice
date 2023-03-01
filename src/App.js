import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = 4
    const arr2 = 2
    const arr3 = 6




    const result = (a,b,c) => {

        const res1 = 2*(a * b) + 2*(a * c) + 2*(b*c)
        let res2 = (a * b)* c
        const array = [res1, res2]
        return array
    }

   console.log(result(arr1,arr2,arr3))



    return (
        <>
        </>
    );
}

export default App;
