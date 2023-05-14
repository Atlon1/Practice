import './App.css';
import React from "react";


function App() {


    const arr1 = "Example Input"
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
       const res = a.match(/[A-Z]/g).map((elem) => elem.toLowerCase())
        const res2 = a.match(/[a-z]/g).map((elem) => elem.toUpperCase())
        const word = a.split(' ')

        let contactWord = []


        for (let i = 0; i < word.length; i++){
            contactWord += res[i]
            for (let j = 0; j < word[i].length -1; j++){
                contactWord += res2[j]

            }
        }

        return contactWord
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
