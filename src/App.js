import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = [1,2]
    // const arr3 = "AND"
    // const arr4 = 0
    // const arr5 = true


    const result = (a) => {
       const sort = a.sort((a,b) => a - b)
        return [sort[0], sort[sort.length- 1]]
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
