import React, {useState} from 'react';

const Cars = ({data, remove, setData, api}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        engine: {
            type: '',
            hp: ''
        }
    })

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnChange2 = (e) => {
        setFormData({
            ...formData,
            engine: {
                ...formData.engine,
                [e.target.name]: e.target.value
            }
        })
    }



    const handleSubmit = () => {
        fetch(`${api}/cars/1`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsOpen(false)
            })
            .catch(err => {
                console.log(err)
            })
    }





    return (
        <div>
            <div>{data.name}</div>
            <button onClick={() => remove(data.id)}>Sprzedaj</button>
            <button onClick={handleOpen}>Edytuj</button>
            {isOpen ? <div>
                <form onChange={handleOnChange}>
                    <input name='name' type='text'/>
                    <input name='brand' type='text'/>
                </form>
                <form onChange={handleOnChange2}>
                    <input name='hp' type='text'/>
                    <input name='type' type='text'/>
                </form>
                <button onClick={handleSubmit}>Submit</button>
            </div> : null}
        </div>
    );
};

export default Cars;