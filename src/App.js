import './App.css';
import React from "react";


function App() {


    const arr1 = "AD"
    const arr2 = 'BC'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        if (/^\D+$/gi.test(a) && /^\D+$/gi.test(b)){
            return a.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a,b)=> a+b) ===
                b.split('').map(n=>n.toUpperCase().charCodeAt()).reduce((a,b) => a+b)
        }
    }


    console.log(result(arr1,arr2))

    return (
        <>
        </>
    );
}

export default App;
