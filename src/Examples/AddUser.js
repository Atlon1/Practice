import React, {useEffect, useRef, useState} from 'react';

const AddUser = ({data, setData}) => {

    const [form, setForm] = useState({
        id: data[data.length - 1].id + 1,
        age: '',
        city: '',
        gender: '',
        name: '',
        surname: ''

    })

    const [err, setErr] = useState({
        age: null,
        city: null,
        gender: null,
        name: null,
        surname: null
    })

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)


    useEffect(() => {
        setForm({
            ...form,
            id: data[data.length - 1].id + 1
        })
    }, [data]);

    const handleOnchange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const nameValidation = (form) => {
        if (!form.name) {
            return 'Pole nie może być puste'
        } else if (form.name < 2) {
            return 'Imię jest za krótkie'
        }
        return null
    }

    const surnameValidation = (form) => {
        if (!form.surname) {
            return 'Pole nie może być puste'
        } else if (form.surname < 2) {
            return 'Nazwisko jest za krótkie'
        }
        return null
    }

    const ageValidation = (form) => {
        if (!form.age) {
            return 'Pole nie może być puste'
        } else if (form.age < 1) {
            return 'Wiek jest za mały'
        }
        return null
    }

    const cityValidation = (form) => {
        if (!form.city) {
            return 'Pole nie może być puste'
        } else if (form.city < 2) {
            return 'Miasto jest za krótkie'
        }
        return null
    }

    const GanderValidation = (form) => {
        if (!form.gender){
            return 'Pole nie może być puste'
        }
        return null
    }

    const handleSave = (e) => {
        e.preventDefault(e)
        const nameErr = nameValidation(form)
        const ageErr = ageValidation(form)
        const surnameErr = surnameValidation(form)
        const cityErr = cityValidation(form)
        const GanderErr = GanderValidation(form)

        if (nameErr || ageErr || surnameErr || cityErr || GanderErr !== null) {
            setErr({
                ...err,
                name: nameErr,
                age: ageErr,
                surname: surnameErr,
                city: cityErr,
                gender: GanderErr
            })

        } else {
            setErr({...err,
                name: null,
                age: null,
                surname: null,
                city: null,
                gender: null

            })
            setData([...data, form])
            setForm({
                age: '',
                city: '',
                gender: '',
                name: '',
                surname: ''
            })
            ref1.current.value = ''
            ref2.current.value = ''
            ref3.current.value = ''
            ref4.current.value = ''
            ref5.current.value = ''
        }
    }

    console.log(err)


    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column'
            }
        }>
            <form onChange={handleOnchange}>
                <div>Podaj imie</div>
                <input ref={ref1} type='text' name='name'/>
                <div style={{color: 'red'}}>{err.name}</div>
                <div>Podaj Nazwisko</div>
                <input ref={ref2} type='text' name='surname'/>
                <div style={{color: 'red'}}>{err.surname}</div>
                <div>Podaj wiek</div>
                <input ref={ref3} type='text' name='age'/>
                <div style={{color: 'red'}}>{err.age}</div>
                <div>Podaj Miejsce zamieszkania</div>
                <select ref={ref4} name='city'>
                    <option value='Miasto'>Miasto</option>
                    <option value='War'>War</option>
                    <option value='Poz'>Poz</option>
                    <option value='Buk'>Buk</option>
                </select>
                <div style={{color: 'red'}}>{err.city}</div>
                <div>Podaj płeć</div>
                <label>
                    <input
                        ref={ref5}
                        type='radio' name='gender' value='Male'/>
                    Male
                </label>
                <label>
                    <input
                        ref={ref5}
                        type='radio' name='gender' value='Female'/>
                    Female
                </label>
                <label>
                    <input
                        ref={ref5}
                        type='radio' name='gender' value='I dont wanna say'/>
                    I dont wanna say
                </label>
                <div style={{color: 'red'}}>{err.gender}</div>
                <button onClick={handleSave}>Zapisz</button>

            </form>
        </div>
    );
};

export default AddUser;