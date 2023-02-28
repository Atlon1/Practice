import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = "f"


    const result = (a) => {
        const alphabet = [" ", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        let res = alphabet.indexOf(a)
        return `Position of alphabet: ${res}`
    }

   console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
