import './App.css';
import React, {useEffect, useState} from "react";

function App() {

    const a = 34
    const b = 4

    const res = (res) => {
        const result =  res % 3 === 0 && res % 4 === 0 ? "Coffee" : res % 3 === 0 ? "Java" : "mocha_missing!"
        return result === "mocha_missing!" ? result : res % 2 === 0 ? `${result}Script` : result
    }


    console.log(res(a))

    return (
        <>

        </>

    );
}

export default App;