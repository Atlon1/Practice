import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = ['Alex', 'Jacob', 'Mark', 'Max', 'Max']




    const result = (a) => {
     if ( a.length === 0) {
         return 'no one likes this'
     } else if (a.length === 1) {
         return `${a[0]},likes this`
     } else if (a.length === 2) {
         return `${a[0]} and ${a[1]},likes this`
     } else if (a.length === 3) {
         return `${a[0]},${a[1]} and ${a[2]},likes this`
     } else {
         return `${a[0]},${a[1]} and ${a.length - 2} others,likes this`
     }

    }

    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
