import './App.css';
import React from "react";


function App() {


    const arr2 = [{range: 5}, {range: 10, damaged: true}, {damaged: true}]
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000


    const result = (a) => {
      return   a.some(a => !a.damaged)
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
