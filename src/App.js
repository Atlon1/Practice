import './App.css';
import React from "react";


function App() {


    const arr2 = 'dgm'
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000


    const result = (a) => {
        return a.toUpperCase().split('').map(l => dict[l]).join(" ")

    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
