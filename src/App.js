import './App.css';
import React, {useEffect, useState} from "react";
import ButtonClick from "./ButtonClick";



function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

   const [count, setCount] = useState(0)

    const handleClike = () => {
        setCount(count + 1)
    }


    return (
        <>
            <h1>{count}</h1>
            <ButtonClick onDone={handleClike}/>

        </>
    );
}

export default App;