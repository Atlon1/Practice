import './App.css';
import React from "react";


function App() {

    const price = [ 1, 1, 1, 2, 1, 1 ]


    const grow = (p: any) => {
        const result = p.sort((a:number,b:number)=> {
            return a - b
        }).reverse()
        return Math.ceil(result[0])
    }

    console.log(grow(price))

    return (
        <>

        </>
    );
}

export default App;
