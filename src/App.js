import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = ["a", "a", "a", "b", "b"]
    // const arr3 = 132
    // const arr4 = 0
    // const arr5 = true


    const result = (a) => {
        let as = a.filter(x =>x === 'a').length;
        let bs = a.filter(x =>x === 'b').length;
        let cs = a.filter(x =>x === 'c').length;
        return (as === 3 || bs === 3 || cs=== 3)
            && (as === 2 || bs === 2 || cs === 2);
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
