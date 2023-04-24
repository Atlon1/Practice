import './App.css';
import React from "react";


function App() {


    const arr1 = 1000000
    // const arr2 = 'string2'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        let paper = 0.0001;
        let folds = 0;
        if (a <= 0) {
            return null;
        } else {
            while ( a > paper ) {
                paper *= 2;
                folds += 1;
            }
        }
        return folds;
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
