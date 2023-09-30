import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const data = 123
    const arr2 = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

const [user, setUser] = useState({
    name: 'lol',
    surname: 'lolek'
})

    useEffect(() => {
        const interval = setInterval(()=> {
            setUser(prevState => {
                return {
                    ...prevState,
                    name: 'Maciej'
                }
            })
        }, 2000)
        return () => clearInterval(interval)
    }, []);


    return (
        <>
            <p>{user.name} {user.surname}</p>
        </>
    );
}

export default App;