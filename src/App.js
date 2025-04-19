import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Detection from "./Pages/Detection";
import ChangePassword from "./Pages/ChangePassword"; // ✅ Added Change Password Page
import { auth } from "./Firebase"; // Firebase Authentication
import { onAuthStateChanged, signOut } from "firebase/auth";

const App = () => {
    const [user, setUser] = useState(null); // ✅ Track user instead of isLoggedIn

    // 🔹 Track authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <Router>
            <Navbar isLoggedIn={!!user} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

                {/* 🔹 Protected Routes - Only logged-in users can access */}
                <Route path="/detection" element={user ? <Detection /> : <Navigate to="/login" />} />
                <Route path="/change-password" element={user ? <ChangePassword /> : <Navigate to="/login" />} />

                {/* 404 Page (Optional) */}
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
