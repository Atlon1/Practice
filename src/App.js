import './App.css';
import React from "react";


function App() {


    const arr2 = 454793
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000


    const result = (a) => {
        a = a.toString().split('')
        for (let i = 0; i < a.length; i++) {
            if (a[i] % 2 > 0 && a[i + 1] % 2 > 0) {
                a[i] = a[i] + "-"
            }
        }
        return a.join('')
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
