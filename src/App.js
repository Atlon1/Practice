import './App.css';
import React from "react";




function App() {


    const data =123
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

const eventsMove = () => {
        console.log('najechano')
}
const eventsLeave = () => {
        console.log('opuszczono')
}




    return (
        <>
            <div
                onMouseEnter={eventsMove}
                onMouseLeave={eventsLeave}
                style={
                {
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'red'
                }
            }>

            </div>
        </>
    );
}

export default App;