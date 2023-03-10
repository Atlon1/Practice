import './App.css';
import React from "react";


function App() {


    const arr1 = ["a", "a", "c", "b"]
    const arr2 = ["a", "a", "b",  ""]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a,b) => {
        let result = 0
        for (let i = 0; i < a.length; i++){
            if (a[i] === b[i]){
                result += 4
            } else if (b[i] === ""){
                result += 0
            } else {
                result -= 1
            }
        }
        if (result > 0){
            return result
        } else {
            return  0
        }

    }


    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
