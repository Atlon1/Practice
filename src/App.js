import './App.css';
import React from "react";


function App() {


    const arr2 = 1234
    const arr3 = 5
    const arr4 = 1.8
    // const arr5 = 5000




    const result = (a) => {
        let res = 0;
        while (a) {
            res = res * 10 + a % 10;
            a = a / 10 ^ 0;
        }
        return res;
    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
