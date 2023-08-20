import './App.css';
import React from "react";


function App() {


    const arr1 = 2
    const arr2 = 10
    const arr3 = 3
    // const arr4 = 1200
    // const arr5 = true


    const result = (a, b, c) => {
        let hour = Math.floor(a/30), minutes = Math.floor((a%30)*2);
        if (hour < 10){hour = "0"+ hour;}
        if (hour <= 0){hour = 12;}
        if (minutes < 10){minutes = "0" + minutes;}
        return hour + ":" + minutes;
    }
    console.log(result(arr1, arr2, arr3))


    return (
        <>
        </>
    );
}

export default App;
