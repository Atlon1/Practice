import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const data = 123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
    const [color, setColor] = useState('Gray')
    const [number, setNumber] = useState(1)

    useEffect(()=>{
        const interval = setInterval(()=> {
            switch (number){
                case 1:
                    setNumber(2)
                    setColor('red')
                    break
                case 2:
                    setNumber(3)
                    break
                case 3:
                    setNumber(4)
                    setColor('green')
                    break
                case 4:
                    setNumber(5)
                    setColor('orange')
                    break
                case 5:
                    setNumber(2)
                    setColor('red')
                    break
                default:
                    setNumber(6)
                    setColor('grey')
            }
        },3000)
        return () => clearInterval(interval)
    },[number])

    return (
        <>
            <div style={
                {
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: number === 2 ? color : number === 3 ? 'red' : 'grey'
                }
            }></div>
            <div style={
                {
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: number === 5 ? color : number === 3 ? 'orange' : 'grey'
                }
            }></div>
            <div style={
                {
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: number === 4 ? color : 'grey'
                }
            }></div>
        </>
    );
}

export default App;