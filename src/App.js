import './App.css';
import React, {useEffect, useState} from "react";
import ButtonClick from "./Examples/ButtonClick";


function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
const [text, setText] = useState('lolol')




    return (
        <>
            <form>
                <select

                onChange={(e) => setText(e.target.value)}>
                    <option value={text}>{text}</option>
                    <option value="lolol213123">lolol213123</option>
                    <option value="Mariusz Pudzianowski">Mariusz Pudzianowski</option>
                </select>
            </form>
            <p>{text}</p>
            <span>{text.length}</span>
        </>
    );
}

export default App;