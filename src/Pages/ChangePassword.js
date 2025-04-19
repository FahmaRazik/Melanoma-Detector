import React, { useState } from "react";
import { reauthenticateWithCredential, updatePassword, EmailAuthProvider } from "firebase/auth";
import { auth } from "../Firebase"; // Import Firebase Auth
import "./ChangePassword.css"; // Create this CSS file for styling

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChangePassword = async () => {
        setMessage(""); // Reset message

        if (!oldPassword || !newPassword || !confirmPassword) {
            setMessage("Please fill in all fields.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage("New password and confirm password do not match.");
            return;
        }

        const user = auth.currentUser;
        if (!user) {
            setMessage("User not authenticated.");
            return;
        }

        setLoading(true);

        try {
            // 🔹 Re-authenticate user with old password
            const credential = EmailAuthProvider.credential(user.email, oldPassword);
            await reauthenticateWithCredential(user, credential);

            // 🔹 Update to new password
            await updatePassword(user, newPassword);
            setMessage("Password changed successfully!");
        } catch (error) {
            console.error("Error:", error);
            switch (error.code) {
                case "auth/wrong-password":
                    setMessage("Incorrect old password.");
                    break;
                case "auth/weak-password":
                    setMessage("New password is too weak. Try a stronger password.");
                    break;
                default:
                    setMessage(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="change-password-container">
            <h1>Change Password</h1>
            {message && <p className="message">{message}</p>}
            <input
                type="password"
                placeholder="Enter old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleChangePassword} disabled={loading}>
                {loading ? "Updating..." : "Change Password"}
            </button>
        </div>
    );
};

export default ChangePassword;
