


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// // Firebase imports
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../Firebase'; // Correct path to Firebase.js

// const Login = () => {
//     const [username, setUsername] = useState(''); // Email state
//     const [password, setPassword] = useState(''); // Password state
//     const navigate = useNavigate(); // Hook for navigation

//     const handleLogin = () => {
//         if (username && password) {
//             // Firebase authentication
//             signInWithEmailAndPassword(auth, username, password)
//                 .then((userCredential) => {
//                     const user = userCredential.user;
//                     console.log('Logged in user:', user);
//                     alert('Login successful!');
//                     navigate('/'); // Redirect to Home after login
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     console.error('Error Code:', errorCode);
//                     console.error('Error Message:', errorMessage);
//                     alert(`Error: ${errorMessage}`);
//                 });
//         } else {
//             alert('Please enter both username and password');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h1>Login</h1>
//             <div className="login-form">
//                 <input
//                     type="email"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Email"
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                 />
//                 <button className="login-btn" onClick={handleLogin}>
//                     Login
//                 </button>
//             </div>
//             <div>
//                 <p>Not registered yet? <a href="/register">Register here</a></p>
//             </div>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase"; // Import Firebase instance
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please enter both email and password");
            return;
        }

        setLoading(true); 

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log("Logged in user:", user);
            alert("Login successful!");

            // ✅ Redirect user to Detection page
            navigate("/detection");

        } catch (error) {
            let errorMessage = "Login failed. Please try again.";

            // Handle Firebase Authentication Errors
            switch (error.code) {
                case "auth/user-not-found":
                    errorMessage = "No account found with this email.";
                    break;
                case "auth/wrong-password":
                    errorMessage = "Incorrect password.";
                    break;
                case "auth/invalid-email":
                    errorMessage = "Invalid email format.";
                    break;
                case "auth/too-many-requests":
                    errorMessage = "Too many login attempts. Try again later.";
                    break;
                default:
                    errorMessage = error.message;
            }

            alert(`Error: ${errorMessage}`);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className="login-form">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
                <button className="login-btn" onClick={handleLogin} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </div>
            <div>
                <p>Not registered yet? <a href="/register">Register here</a></p>
            </div>
        </div>
    );
};

export default Login;

