import './App.css';
import React, {useEffect, useState} from "react";
import ButtonClick from "./Examples/ButtonClick";


function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
    const [form, setForm] = useState([])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:[ e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Login</label>
                <input type="text"
                       name='login'
                       minLength={2}
                       onChange={handleChange}/>

                <label>Hasło</label>
                <input type="password"
                       name='password'
                       minLength={4}
                       onChange={handleChange}/>
                <input type='submit' value='Wyślij'/>
            </form>
        </>
    );
}

export default App;