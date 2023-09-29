import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const data = 123
    const arr2 = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

    const [box, setBox] = useState(arr2)

const parzy = () => {
        const filtered = arr2.filter((elem)=> elem % 2 !== 1)
        setBox(filtered)
}
const nieparzy = () => {
        const filtered = arr2.filter((elem)=> elem % 2 === 1)
        setBox(filtered)
}




    return (
        <>
            <button onClick={parzy}>Parzyste</button>
            <button onClick={nieparzy}>NieParzyste</button>
            <ul>
                {box.map((ele)=> {
                    return (
                        <li>{ele}</li>
                    )
                })}
            </ul>

        </>
    );
}

export default App;