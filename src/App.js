import './App.css';
import React, {useState} from "react";


function App() {

    const [text, setText] = useState("W")
    const [number, setNumber] = useState(0)
    const data = 123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const handlePlus = () => {
        const state = 'itaj!'.split('')

        setText(prevState => prevState +  state[number])
        setNumber(prevState => prevState + 1)
    }
    const handleMinus = () => {


        setText(prevState => prevState.slice(0,number) )
        setNumber(prevState => prevState - 1)
    }


    return (
        <>
            <button onClick={handleMinus}>-</button>
            <div>
                {text}
            </div>
            <button onClick={handlePlus}>+</button>
        </>
    );
}

export default App;