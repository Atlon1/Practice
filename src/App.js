import './App.css';
import React from "react";


function App() {


    const arr1 = "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"
     // const arr2 = 0.05
     // const arr3 = 0.18
     // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a.split('\n')
            .map(line => line.split('').reverse().join(''))
            .join('\n')
    }

    const result2 = (a) => {
        return a.split('\n')
            .reverse()
            .join('\n')
    }
    const result3 = (fct, s) => {
        return fct(s)
    }


    console.log(result(arr1))
    console.log(result2(arr1))



    return (
        <>
        </>
    );
}

export default App;
