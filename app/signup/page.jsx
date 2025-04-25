'use client';

import { useState } from 'react';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        alert('Signup successful!');
    };

    return (
        <div>
            <div className="maindivlogin">
                <div className="imagelogin">
                    <img src="sideimagelogin.png" alt="Signup" />
                </div>
                <div className="loginpageinfo">
                    <div className="welcomemessage">
                        <h1>Create Account</h1>
                        <br />
                        <p>Sign up to get started with tasktide!</p>
                    </div>
                    <div className="emaillogin">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="emaillogin">
                        <label htmlFor="pass">Password</label>
                        <br />
                        <input type="password" id='pass' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="emaillogin">
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <br />
                        <input type="password" id='confirmPass' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="buttonsinin">
                        <button onClick={handleSubmit}>Sign Up</button>
                    </div>
                    <div className="signingoogle">
                        <img src="googlelogo.png" alt="Google" />
                        <p>Sign up with Google</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
