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
        fetch('https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL')
            .then((res) => res.json())
            .then(data => {
                setFetching(data.holidays);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    console.log(fetching)

    return (
        <>
            <ul>
                {fetching.map((elem)=> {
                    return (
                        <li key={elem.id}>{elem.name}</li>
                    )
                })}
            </ul>

        </>


    );
}

export default App;