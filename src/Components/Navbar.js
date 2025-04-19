
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn }) => {
//     const [showDropdown, setShowDropdown] = useState(false);

//     const toggleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">Melanoma Detector</div>
//             <ul className="navbar-links">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About Us</Link></li>
//                 {isLoggedIn && <li><Link to="/detection">Detection</Link></li>}
//             </ul>
//             <div className="navbar-auth">
//                 {isLoggedIn ? (
//                     <div className="user-menu">
//                         <button className="btn-icon" onClick={toggleDropdown}>
//                             <span className="user-icon">👤</span>
//                         </button>
//                         {showDropdown && (
//                             <div className="dropdown">
//                                 <button className="dropdown-item">
//                                     <Link to="/change-password">Change Password</Link>
//                                 </button>
//                                 <button className="dropdown-item">Logout</button>
//                             </div>
//                         )}
//                     </div>
//                 ) : (
//                     <>
//                         <Link to="/register">
//                             <button className="btn-auth">Register</button>
//                         </Link>
//                         <Link to="/login">
//                             <button className="btn-auth">Login</button>
//                         </Link>
//                     </>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

/////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn, onLogout }) => {
//     const [showDropdown, setShowDropdown] = useState(false);

//     const toggleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">Melanoma Detector</div>
//             <ul className="navbar-links">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About Us</Link></li>
//                 {isLoggedIn && <li><Link to="/detection">Detection</Link></li>}
//             </ul>
//             <div className="navbar-auth">
//                 {isLoggedIn ? (
//                     <div className="user-menu">
//                         <button className="btn-icon" onClick={toggleDropdown}>
//                             <span className="user-icon">👤</span>
//                         </button>
//                         {showDropdown && (
//                             <div className="dropdown">
//                                 <button className="dropdown-item">
//                                     <Link to="/change-password">Change Password</Link>
//                                 </button>
//                                 <button className="dropdown-item" onClick={onLogout}>
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 ) : (
//                     <>
//                         <Link to="/register">
//                             <button className="btn-auth">Register</button>
//                         </Link>
//                         <Link to="/login">
//                             <button className="btn-auth">Login</button>
//                         </Link>
//                     </>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


/////////////////////////////////

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Navbar.css";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    // 🔹 Track Firebase authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Melanoma Detector</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                {user && <li><Link to="/detection">Detection</Link></li>} {/* ✅ Show Detection only if logged in */}
            </ul>
            <div className="navbar-auth">
                {user ? (
                    <div className="user-menu">
                        <button className="btn-icon" onClick={toggleDropdown}>
                            <span className="user-icon">👤</span>
                        </button>
                        {showDropdown && (
                            <div className="dropdown">
                                <button className="dropdown-item">
                                    <Link to="/change-password">Change Password</Link>
                                </button>
                                <button className="dropdown-item" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <Link to="/register">
                            <button className="btn-auth">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn-auth">Login</button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
