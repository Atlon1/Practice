import React, {useEffect, useState} from 'react';

const AddCar = ({data, setData}) => {


    const [formData, setFormData] = useState({
        id: data[data.length - 1].id + 1,
        name: '',
        brand: '',
        engine: {
            type: '',
            hp: ''
        }
    });


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



    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, formData]);

    }



    return (
        <div>
            <form
            onChange={handleOnChange}
            >
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="brand" placeholder="Brand"/>
            </form>
            <form
            onChange={handleOnChange2}
            >
                <div>Silnik</div>
                <input type='text'name='type' placeholder='Type'/>
                <input type='text' name='hp' placeholder='HP'/>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddCar;