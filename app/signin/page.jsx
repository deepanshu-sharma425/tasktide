'use client';

import { useState } from 'react';


export default function SigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please Enter a valid Credentials')
            return;
        }
        setEmail('')
        setPassword('')
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        window.location.href='/siginin'
    };
    function handlepass(e){
        setPassword(e.target.value)
        
    }
    function handleemail(e){
        setEmail(e.target.value)
    }

    return (
        <div>
            <div className="maindivlogin">
                <div className="imagelogin">
                    <img src="sideimagelogin.png/" alt="" />
                </div>
                <div className="loginpageinfo">
                    <div className="welcomemessage">
                        <h1>Welcome Back</h1>
                        <br />
                        <p>Welcome back! Please enter your details.</p>
                    </div>
                    <div className="emaillogin">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" id='email' value={email} onChange={handleemail} />
                    </div>
                    <div className="emaillogin">
                        <label htmlFor="pass">Password</label>
                        <br />
                        <input type="password" id='pass' value={password} onChange={handlepass} />
                    </div>
                    <div className="checkboxfoegetpass">
                        <div className="checkbox">
                        <input type="checkbox" />
                        <p>Remember me</p>
                        </div>
                        <p>Forgot password</p>
                       
                    </div>
                    <div className="buttonsinin">
                        <button onClick={handleSubmit}>Sign In</button>
                    </div>
                    <div className="signingoogle">
                        <img src="googlelogo.png" alt="" />
                        <p>Sign in with Google</p>
                    </div>


                </div>
            </div>

        </div>

    );
}
