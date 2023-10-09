import React, {useEffect, useRef, useState} from 'react';

const AddCar = ({data, setData}) => {

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)


    const [formData, setFormData] = useState({
        id: data[data.length - 1].id + 1,
        name: '',
        brand: '',
        engine: {
            type: '',
            hp: ''
        }
    });

    useEffect(() => {
        setFormData({
            id: data[data.length - 1].id + 1,

        })
    },[data])


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
        ref1.current.value = ''
        ref2.current.value = ''
        ref3.current.value = ''
        ref4.current.value = ''

    }



    return (
        <div>
            <form  onChange={handleOnChange}>
                <input
                    ref={ref1}
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    ref={ref2}
                    type="text"
                    name="brand"
                    placeholder="Brand"

                />
            </form>
            <form onChange={handleOnChange2}>
                <div>Silnik</div>
                <input
                    ref={ref3}
                    type='text'
                    name='type'
                    placeholder='Type'

                />
                <input
                    ref={ref4}
                    type='text'
                    name='hp'
                    placeholder='HP' />
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AddCar;