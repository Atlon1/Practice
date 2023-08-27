import './App.css';
import React from "react";


function App() {





    const arr1 = 2
    const arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    const arr3 = 3
    // const arr4 = 1200
    // const arr5 = true

    const result = (a,b) => {
        const res = b.sort((a,b) => b - a )
        let array = []

        for (let i = 0; i < a; i++){
            array.push(res[i])
        }

        return array.reverse()
    }

    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
