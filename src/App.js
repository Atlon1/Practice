import './App.css';
import React, {useEffect, useState} from "react";

function App() {

    const number = 30

    const res = (num) => {
        if (num % 5 === 0 && num % 3 === 0) {
            return 'BangBoom'
        } else if (num % 3 === 0) {
            return 'Bang'
        } else if (num % 5 === 0) {
            return 'Boom'
        } else {
            return "Miss"
        }
    }


    console.log(res(number))

    return (
        <>

        </>

    );
}

export default App;