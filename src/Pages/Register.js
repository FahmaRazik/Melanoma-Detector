

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Register.css';

// // Firebase imports
// // import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';// Remove getAuth import since auth is already imported from Firebase
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../Firebase'; // Correct path to Firebase.js

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const navigate = useNavigate(); // Hook for navigation

//     const handleRegister = () => {
//         if (password !== confirmPassword) {
//             alert('Passwords do not match!');
//         } else {
//             // Firebase Auth
//             createUserWithEmailAndPassword(auth, username, password)
//                 .then((userCredential) => {
//                     // Signed up
//                     const user = userCredential.user;
//                     console.log('User registered:', user);
//                     alert('Registration successful!');
//                     navigate('/login'); // Redirect to the login page
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     console.error('Error Code:', errorCode);
//                     console.error('Error Message:', errorMessage);
//                     alert(`Error: ${errorMessage}`);
//                 });
//         }
//     };

//     return (
//         <div className="register-container">
//             <h1>Register</h1>
//             <div className="register-form">
//                 <input
//                     type="email"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Enter your email"
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                 />
//                 <input
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="Confirm your password"
//                 />
//                 <button className="register-btn" onClick={handleRegister}>
//                     Register
//                 </button>
//             </div>
//             <div className="register-links">
//                 <Link to="/login" className="link">
//                     Already registered? Login here
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Register;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../Firebase"; // Import Firestore
import "./Register.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            // Firebase Authentication - Create User
            const userCredential = await createUserWithEmailAndPassword(auth, username, password);
            const user = userCredential.user;

            // Save user info in Firestore
            await setDoc(doc(db, "users", user.uid), {
                userId: user.uid,
                email: user.email,
                createdAt: serverTimestamp(),
            });

            alert("Registration successful!");
            navigate("/login"); // Redirect user to login page
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <div className="register-form">
                <input
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your email"
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
                    Already registered? Login here
                </Link>
            </div>
        </div>
    );
};

export default Register;
