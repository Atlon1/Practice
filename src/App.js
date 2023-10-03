import './App.css';
import React, {useEffect, useState} from "react";
import ButtonClick from "./ButtonClick";



function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

   const [list, setList] = useState([]);

    const items = ['MacBook Pro', 'Dell X5500', 'Asus NT6000']

    const handleBuy = (title) => {
        setList([...list, title]);
    }


    return (
        <>
        <div>
            {items.map((item, idnex) => (
                <ButtonClick key={idnex} title={item} onDone={ handleBuy } />
            ))}
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default App;