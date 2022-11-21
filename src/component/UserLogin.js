import React, { useState } from 'react';
import axios from 'axios';

function UserLogin() {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const login = () => {

        console.warn(Email, Password);

        axios.post(`http://localhost:5000/userAuth`, {
            email: Email,
            password: Password,
        }).then((resp) => {
            console.log(resp.data.status);
            if (resp.data.status === true) {
                alert("login successfully");
            }
            else {
                alert("Unauthorised");
            }

        })
    }

    return (

        <>
            <h2>User Login</h2>

            <div>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> <br /><br />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> <br /><br />

                <button onClick={login}>Login</button>
            </div>
        </>

    );
}

export default UserLogin;