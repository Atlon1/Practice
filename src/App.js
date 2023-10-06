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
        rePassword: '',
        gender: '',
        address: '',
        zip: '',
        city: ''
    })

    const [dataErr, setDataErr] = useState({
        nameErr: null,
        emailErr: null,
        passwordErr: null,
        rePasswordErr: null,
        genderErr: null,
        addressErr: null,
        zipErr: null,
        cityErr: null
    })


    const [aggree, setAggree] = useState(false)

    const handleOnChange = (e) => {
        e.preventDefault()
        setData1({...data1, [e.target.name]: e.target.value})
    }


    const validateName = (data) => {
        if (!data.name) {
            return 'Podaj imię'
        } else if (data.name.length < 3) {
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

    const validatePassword = (data) => {
        if (!data.password) {
            return 'Podaj hasło'
        } else if (data.password.length < 3) {
            return 'Hasło jest za krótkie'
        }
        return null
    }

    const validateRePassword = (data) => {
        if (data.password !== data.rePassword) {
            return 'Podane hasła nie zgadzają się'
        } else if (data.password.length < 3) {
            return 'Hasło jest za krótkie'
        } else if (!data.rePassword) {
            return 'Podaj hasło'
        }
        return null
    }

    const validateSelect = (data) => {
        if (data.gender === '') {
            return 'Wybierz płeć'
        }
    }

    const validateAddress = (data) => {
        if (!data.address) {
            return 'Podaj adres'
        } else if (data.address.length < 3) {
            return 'Adres jest za krótki'
        }
        return null
    }

    const validateZip = (data) => {
        if (!data.zip) {
            return 'Podaj kod pocztowy'
        } else if (!data.zip.match(/^\d{2}-\d{3}$/)) {
            return 'Kod pocztowy jest nieprawidłowy'
        }
        return null
    }

    const validateCity = (data) => {
        if (!data.city) {
            return 'Podaj miasto'
        } else if (data.city.length < 2) {
            return 'Miasto jest za krótkie'
        }
        return null
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const nameError = validateName(data1)
        const emailError = validateEmail(data1)
        const passwordError = validatePassword(data1)
        const rePasswordError = validateRePassword(data1)
        const genderError = validateSelect(data1)
        const addressError = validateAddress(data1)
        const zipError = validateZip(data1)
        const cityError = validateCity(data1)


        if (nameError || emailError || passwordError || rePasswordError
            || genderError || addressError || zipError || cityError !== null) {
            setDataErr({
                ...dataErr,
                nameErr: nameError,
                emailErr: emailError,
                passwordErr: passwordError,
                rePasswordErr: rePasswordError,
                genderErr: genderError,
                addressErr: addressError,
                zipErr: zipError,
                cityErr: cityError
            })
        } else {
            setDataErr({
                ...dataErr,
                nameErr: null,
                emailErr: null,
                passwordErr: null,
                rePasswordErr: null,
                genderErr: null,
                addressErr: null,
                zipErr: null,
                cityErr: null
            })
            return (setAggree(!aggree))
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
                <div style={{color: 'red'}}>{dataErr.passwordErr}</div>
                <div>Hasło</div>
                <input
                    onChange={handleOnChange}
                    name='rePassword'
                    type='Password'/>
                <div style={{color: 'red'}}>{dataErr.rePasswordErr}</div>
                <div>Płeć</div>
                <select
                    onChange={handleOnChange}
                    name='gender'
                >
                    <option></option>
                    <option value='Mężczyzna'>Mężczyzna</option>
                    <option value='Kobieta'>Kobieta</option>
                </select>
                <div style={{color: 'red'}}>{dataErr.genderErr}</div>
                <div>Dane do wysyłki</div>
                <div>Adres:</div>
                <input
                    onChange={handleOnChange}
                    name='address'
                    type='text'/>
                <div style={{color: 'red'}}>{dataErr.addressErr}</div>
                <div>Kod pocztowy</div>
                <input
                    onChange={handleOnChange}
                    name='zip'
                    type='text'/>
                <div style={{color: 'red'}}>{dataErr.zipErr}</div>
                <div>Miasto</div>
                <input
                    onChange={handleOnChange}
                    name='city'
                    type='text'/>
                <div style={{color: 'red'}}>{dataErr.cityErr}</div>
            </form>
            <button onClick={handleSubmit}>Zapisz</button>
            {aggree ? (<div>
                <h1>Dane:</h1>
                <div>Imię i nazwisko: {data1.name}</div>
                <div>E-mail: {data1.email}</div>
                <div>Hasło: {data1.password}</div>
                <div>Płeć: {data1.gender}</div>
                <div>Dane do wysyłki: {data1.address}</div>
                <div>Kod pocztowy: {data1.zip}</div>
                <div>Miasto: {data1.city}</div>
            </div>) : <div></div>}
        </>


    );
}

export default App;