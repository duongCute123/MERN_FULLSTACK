import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Hello = (props) => {
    const initialState = {
        _id: "",
        address: {
            city: "",
            state: "",
            street: "",
            zop_code: ""
        },
        email: "",
        first_name: "",
        last_name: "",
        registration_date: ""
    }
    const [formData, setData] = useState(initialState)

    const onChange = (e) => {
        const { name, value } = e.target
        setData({ ...formData, [name]: value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const { _id, address: { city, state, street, zop_code }, email, first_name, last_name, registration_date } = formData
        axios.post(`http://localhost:4000/create`, { formData })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
                console.log("Lỗi thêm dữ liệu")
            })
    }
    const { _id, address: { city, state, street, zop_code }, email, first_name, last_name, registration_date } = formData
    return (
        <div className='App'>
            <h3>Add Student</h3>
            <form onSubmit={onSubmit} method="POST">
                <div>
                    <input
                        type='text'
                        name='_id'
                        placeholder='_id'
                        value={_id}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='city'
                        placeholder='Last Name'
                        value={city}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='state'
                        placeholder='Last Name'
                        value={state}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='street'
                        placeholder='Last Name'
                        value={street}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='zop_code'
                        placeholder='Last Name'
                        value={zop_code}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='email'
                        placeholder='Country'
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='first_name'
                        placeholder='Title'
                        value={first_name}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='last_name'
                        placeholder='Title'
                        value={last_name}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type='date'
                        name='registration_date'
                        placeholder='Title'
                        value={registration_date}
                        onChange={onChange}
                    />
                </div>


                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Hello