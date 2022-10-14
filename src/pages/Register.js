import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { registerUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerUser(username, password, password2);
    };

    const handleChange = (e) => {
        setUsername(e.target.value)
    };


    return (
        <div className='register-form-container'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className='register-form'>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' onChange={handleChange} placeholder='Username' required/>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' onChange={handleChange} placeholder='Password' required/>
                <label htmlFor='confirm-password'>Confirm Password</label>
                <input type='password' id='confirm-password' onChange={handleChange} placeholder='Confirm Password' required/>
                <p>{password2 !== password ? "Passwords do not match" : ""}</p>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;