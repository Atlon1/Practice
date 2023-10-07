import './App.css';
import React, {useEffect, useState} from "react";
function App() {


    // const data = 'Mężczyzna'
    // const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
    const [fetching, setFetching] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => {
                setFetching(data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    console.log(fetching)

    return (
        <>
            <ul>
                {fetching.map(item => <li key={item.name}>{item.name}</li>)}
            </ul>

        </>


    );
}

export default App;