import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    // const data = 'Mężczyzna'
    // const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
    const [data1, setData1] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        address: '',
        zip: '',
        city: ''
    })

    const [dataErr, setDataErr] = useState({
        nameErr: null,
        emailErr: null,
        passwordErr: null,
        genderErr: null,
        addressErr: null,
        zipErr: null,
        cityErr: null
    })

    const [aggree, setAggree] = useState(<div/>)

    const handleOnChange = (e) => {
        e.preventDefault()
        setData1({...data1, [e.target.name]: e.target.value})
    }


    const validateName = (data) => {
        if (data.name.length < 5) {
            return 'Imię jest za krótkie'
        }
        return null
    }

    const validateEmail = (data) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            return 'Adres e-mail jest nieprawidłowy'
        }
        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const nameError = validateName(data1.name)
        const emailError = validateEmail(data1.email)

        if (nameError || emailError) {
            setDataErr({...dataErr, nameErr: nameError})
            setDataErr({...dataErr, emailErr: emailError})
        } else {
            setDataErr({...dataErr, nameErr: null})
            setDataErr({...dataErr, emailErr: null})
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
                <div>E-mail</div>

                <input
                    onChange={handleOnChange}
                    name='email'
                    type='email'/>
                <div style={{color: 'red'}}>{dataErr.emailErr}</div>
                <div>Hasło</div>
                <input
                    onChange={handleOnChange}
                    name='password'
                    type='Password'/>
                <div>Płeć</div>
                <select
                    onChange={handleOnChange}
                    name='gender'
                >
                    <option>Wybierz opcje</option>
                    <option value='Mężczyzna'>Mężczyzna</option>
                    <option value='Kobieta'>Kobieta</option>
                </select>
                <div>Dane do wysyłki</div>
                <div>Adres:</div>
                <input
                    onChange={handleOnChange}
                    name='address'
                    type='text'/>
                <div>Kod pocztowy</div>
                <input
                    onChange={handleOnChange}
                    name='zip'
                    type='text'/>
                <div>Miasto</div>
                <input
                    onChange={handleOnChange}
                    name='city'
                    type='text'/>

            </form>
            <button onClick={handleSubmit}>Zapisz</button>
        </>

    );
}

export default App;