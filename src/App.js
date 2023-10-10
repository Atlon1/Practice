import './App.css';
import React, {useEffect, useState} from "react";

function App() {

    const [name, setName] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [err, setErr] = useState({
        name: null,
        email: null,
        message: null
    })
    const [post, setPost] = useState([])


    const [fetchErr, setFetchErr] = useState(null)

    const handleOnChange = (e) => {
        setName({
            ...name,
            [e.target.name]: e.target.value
        })
    }

    const validateName = (name) => {
        if (!name.name) {
            return 'Pole nie może być puste'
        } else if (name.name < 2) {
            return "Name should be at least 2 characters long."
        }

        return null
    }

    const validateEmail = (email) => {
        if (!email.email) {
            return 'Pole nie może być puste'
        } else if (email.email < 2) {
            return 'Email jest za krótkie'
        }
        return null
    }

    const validateMessage = (message) => {
        if (!message.message) {
            return 'Pole nie może być puste'
        } else if (message.message < 2) {
            return 'Wiadomość jest za krótkie'
        }
        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameErr = validateName(name)
        const emailErr = validateEmail(name)
        const messageErr = validateMessage(name)

        if (nameErr || emailErr || messageErr !== null) {
            setErr({
                ...err,
                name: nameErr,
                email: emailErr,
                message: messageErr
            })
        } else {
            setErr({
                ...err,
                name: null,
                email: null,
                message: null
            })

            fetch('https://fer-api.coderslab.pl/v1/exam5/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(name)
            })
                .then(res => {
                    res.json()
                })
                .then(data => {
                    setPost(data.id)
                })

                .catch(err => {
                    setFetchErr(err)
                })
        }


    }


    return (
        <div style={
            {
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }
        }>
            <form
                style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '400px',
                        alignItems: 'center',
                    }
                }
                onChange={handleOnChange}
                onSubmit={handleSubmit}>
                <div style={{color: 'red'}}>{err.name}</div>
                <label>Podaj Imie</label>
                <input type='text' name='name'/>
                <div style={{color: 'red'}}>{err.email}</div>
                <label>Podaj Email</label>
                <input type='email' name='email'/>
                <div style={{color: 'red'}}>{err.message}</div>
                <label>Podaj Wiadomość</label>
                <textarea name='message'/>
                <button type='submit'>wyslij</button>
            </form>
            <div>{fetchErr}</div>
        </div>



    );
}

export default App;