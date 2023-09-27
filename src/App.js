import './App.css';
import React, {useEffect, useState} from "react";
import Modal from "./Modal";


function App() {


    const data = 123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true




    return (
        <>
   <h1>Test okna modalnego</h1>
            <Modal heading='Zapisz sie do newslettera'/>

        </>
    );
}

export default App;