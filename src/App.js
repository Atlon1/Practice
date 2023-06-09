import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = []
    const arr3 = [3,11,13,8,6,3,18]
    const arr4 = 103
    // const arr5 = true


    const result = (a, b, c) => {
        return a.length === 0 && b.length === 0 ? c :
            a.length > 0 && b === 0 ? c - (a.reduce((a, b) => {
                return a + b
            })) :
                b.length > 0 && a === 0 ? c - (b.reduce((a, b) => {
                    return a + b
                })) :
                    c - ([...a, ...b].reduce((a, b) => {
                        return a + b
                    }))
    }

    console.log(result(arr2, arr3, arr4))

    return (
        <div>

        </div>
    );
}

export default App;
