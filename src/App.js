import './App.css';
import React, {useEffect, useState} from "react";



function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

    const [text, setText] = useState('')
    const [err, setErr] = useState(null)

    const validate = (text1) => {
        if (text1.length < 11 && text.length > 0) {
            return setErr("Za mało znaków")
        }  else if (typeof text1 === "number") {
            return  setErr("Musi być liczbą")
        } else {
            return setErr(null)
        }
    }

    useEffect(() => {
        validate(text)
    }, [text]);

    return (
        <>
            <form>
                <input
                    onChange={(e) => setText(e.target.value)} type='text'/>
                <div></div>
                {err === null ? <input type='submit'/> : "Nie Poprawny numer pesel"}
            </form>
        </>

    );
}

export default App;