
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         alert('Login successful!');
//     };

//     return (
//         <div className="login-container">
//             <h1>Login</h1>
//             <div className="login-form">
//                 <label>Username</label>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Enter your username"
//                 />
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                 />
//                 <button className="login-btn" onClick={handleLogin}>
//                     Login
//                 </button>
//             </div>
//             <div className="login-links">
//                 <Link to="/register" className="link">
//                     Not registered yet?
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username && password) {
            onLogin(); // Call the login function from props
            navigate('/'); // Redirect to Home after login
        } else {
            alert('Please enter both username and password');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className="login-form">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="login-btn" onClick={handleLogin}>
                    Login
                </button>
            </div>
            <div>
                <p>Not registered yet? <a href="/register">Register here</a></p>
            </div>
        </div>
    );
};

export default Login;
