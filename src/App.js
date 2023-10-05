import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

    const [text, setText] = useState(['','Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa'])
    const [value, setValue] = useState([])

    const handleChange = (e) => {
        setValue([...value, e.target.value])
        setText(text.filter(item => item !== e.target.value))
    }

    return (
        <>
            <form>
                <select value={text[0]} onChange={handleChange}>
                    {text.map((elem) => {
                        return <option key={elem} value={elem}>{elem}</option>
                    })}
                </select>

                <ul>
                    {value.map((elem) => {
                        return <li key={elem}>{elem}</li>
                    })}
                </ul>
            </form>
        </>

    );
}

export default App;