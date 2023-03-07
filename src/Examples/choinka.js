import './App.css';
import React from "react";


function App() {


    const arr1 = 10
    // const arr2 = 'Phoenix'
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (nFloors) => {
        let tower = [];
        for (let i = 0; i < nFloors; i++) {
            tower.push(" ".repeat(nFloors - i - 1)
                + "*".repeat((i * 2)+ 1)
                + " ".repeat(nFloors - i - 1));
        }
        return tower;
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
