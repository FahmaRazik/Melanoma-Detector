import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
        } else {
            alert('Registration successful!');
            navigate('/login'); // Redirect to the login page
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <div className="register-form">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                />
                <button className="register-btn" onClick={handleRegister}>
                    Register
                </button>
            </div>
            <div className="register-links">
                <Link to="/login" className="link">
                    Already registered?
                </Link>
            </div>
        </div>
    );
};

export default Register;
