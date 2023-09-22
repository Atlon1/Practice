
import './App.css';
import React from "react";


function App() {


    const arr1  = 100
    const arr2 = 5
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

    function randomize(param1,param2, callback){
        const random = Math.floor(Math.random()*param1+param2)
        return random
    }

    console.log(randomize(arr1,arr2))


    const result = (a) => {

    }



    console.log(result(arr1))


    return (
        <>

        </>
    );
}

export default App;