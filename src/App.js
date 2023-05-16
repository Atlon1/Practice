import './App.css';
import React from "react";


function App() {


    const arr1 = "lA ArE? wiE! are bien: hombRe vISta DOIng arE bIen hallo, wIE hoW; TsChUSS? tRes YOU"
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        const res = a.split(' ').map(elem => elem.toLowerCase()).join(' ')
        if (res.includes('salut')) {
            return true
        } else if (res.includes('ciao')) {
            return true
        } else if (res.includes('hello')) {
            return true
        } else if (res.includes('hallo')) {
            return true
        } else if (res.includes('hola')) {
            return true
        } else if (res.includes('ahoj')) {
            return true
        }else if (res.includes('czesc')) {
            return true
        }

        else return false

    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
