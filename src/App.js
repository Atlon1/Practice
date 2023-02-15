import './App.css';
import React from "react";


function App() {

    const price = 7


    const grow = (p) => {
        if (p === 0 || p % 2 === 0){
            return null
        }
        let str = ''
        for (let i = 0; i < p; i++ ){
            let len = Math.abs((p-2*i-1)/2)
            str += " ".repeat(len);
            str += "*".repeat(p-2*len)
            str += "\n"
        }
        return str
    }

    console.log(grow(price))

    return (
        <>

        </>
    );
}

export default App;
