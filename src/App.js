import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = true
    const arr2 = false
    const arr3 = 6




    const result = (a,b) => {
        if ( a === false && b === false){
            return false
        } else if ( a === false && b === true) {
            return true
        }  else if ( a === true && b === true) {
            return false
        }  else if ( a === true && b === false) {
            return true
        }
    }

   console.log(result(arr1,arr2))



    return (
        <>
        </>
    );
}

export default App;
