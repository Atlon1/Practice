import './App.css';
import React, {useState} from "react";


function App() {

    const [colorText ,  setColorText] = useState('black')



    return (
        <>
        <div style={{color: colorText}}>To jest jakis kolor</div>
            <button onClick={() => setColorText(colorText === "black" ? "pink" : "black")}>Zmiana koloru</button>
        </>
    );
}

export default App;
