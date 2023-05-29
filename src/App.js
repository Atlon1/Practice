import './App.css';
import React from "react";


function App() {


    const arr1 = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
    // const arr2 = 25
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
           let res = 0
        for(let i = 0; i < a.length; i++){
            if (a[i] === "needle"){
                return `found the needle at position ${res}`
            } else { res ++}
        }
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
