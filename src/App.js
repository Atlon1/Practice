import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    // const data = 'Mężczyzna'
    // const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
    const [data, setData] = useState({
        name: '',
    })

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const [dataErr, setDataErr] = useState({
        nameErr: null
    })
    const [agree, setAgree] = useState(false)

    const validate = (data) => {
        if (data.name < 2) {
            return "Podaj imię i nazwisko"
        }
        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const err = validate(data)
        if (err !== null) {
            setDataErr({
                ...dataErr,
                nameErr: err
            })
        } else {
            setDataErr({
                ...dataErr,
                nameErr: null
            })
            setAgree(!agree)
        }
    }


    return (
        <>
            <form>

                <div>Imię i nazwisko</div>
                <input
                    onChange={handleOnChange}
                    name='name'
                    type='text'/>
                <div style={{color: 'red'}}>{dataErr.nameErr}</div>
            </form>
            <button onClick={handleSubmit}>Submit</button>
            {agree ? 'Tak' : 'Nie'}
        </>


    );
}

export default App;