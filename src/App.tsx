import './App.css';
import React from "react";


function App() {

    const price = 5

    const grow = (p:any) => {
        return (p - 2) * 180
    }

    console.log(grow(price))

    return (
        <>

        </>
    );
}

export default App;
