import './App.css';
import React from "react";
import UserDetails from "./UserDetails";


function App() {


    const data =[
        {
            id: 1,
            name: "Rower",
            price: 999.99
        },
        {
            id: 2,
            name: "Kask",
            price: 150.00
        },
        {
            id: 3,
            name: "Rękawiczki",
            price: 63.99
        },
        {
            id: 4,
            name: "Licznik",
            price: 225.49
        },
        {
            id: 5,
            name: "Bidon",
            price: 20.00
        }
    ]
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = () => {



    }

console.log(result())

    return (
        <>
            <UserDetails data={data}/>
        </>
    );
}

export default App;