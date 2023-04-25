import './App.css';
import React from "react";


function App() {


    const arr1 = "RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"
    // const arr2 = '222'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        const string = a.match(/[a-z]/g).length
        const stringUp = a.match(/[A-Z]/g).length
        const numeber = a.match(/[0-9]/g).length
        const special = a.match(/[^A-Z0-9]/gi).length

        return [stringUp,string,numeber,special]
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
