import './App.css';
import React from "react";


function App() {


    const arr2 = 1500
    const arr3 = 5
    const arr4 = 100
    const arr5 = 5000


    const result = (a, b, c, d) => {

        let years = 0
        while (a < d) {
            a = Math.floor((1 +b/100)* a +c)
            years++
        }

        return years
    }

    console.log(result(arr2, arr3, arr4, arr5))

    return (
        <div>

        </div>
    );
}

export default App;
