import './App.css';
import React from "react";


function App() {


    const arr1 = [{
        title: "Mr.",
        firstName: "John",
        lastName: "Doe",
        age: 41
    }];
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true



    const result = () => {

        const numA = parseInt(prompt("Cyfra 1"))
        const numB = parseInt(prompt("Cyfra 2"))
        const res = prompt("Działanie")
        return (

            <h1>
                {res === "*" ? numA * numB :
                    res === "/" ? numA / numB :
                        res === "+" ? numA + numB : numA - numB}
            </h1>
        )

    }


    return (
        <>
            {result()}
        </>
    );
}

export default App;