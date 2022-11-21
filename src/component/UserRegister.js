import React, { useState } from 'react';
import axios from 'axios';

function UserRegister() {

    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const Submit = () => {

        // console.log(Username, Email, Password);

        axios.post(`http://localhost:5000/userReg`, {
            username : Username,
            email: Email,
            password: Password,
        }).then((resp) => {
            // console.log(resp.data.status);
            if(resp.data.status === true){
                alert("Register Sucessfull")
            }
           
        })
    }

    return ( 
        <>
            <h2>User Registration</h2>

            <div>
                <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" /> <br /><br />
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> <br /><br />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> <br /><br />

                <button onClick={Submit}>Submit</button>
            </div>
        </>
     );
}

export default UserRegister;