import './App.css';
import React from "react";


function App() {


    const arr1 = ["O", "O", "X", "X", "X", "X"]
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        let res = 0
        let count = -1

        for (let i = 0; i <= a.length; i++) {
            if (a[i] === "O") {
                res += i
                count += 1
            } else if (res >= 0) {
                break
            }
        }

        return !count > 0 ? "None available!" : res

    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
