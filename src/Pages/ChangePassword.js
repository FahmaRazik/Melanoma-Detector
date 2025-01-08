import React, { useState } from 'react';
import './ChangePassword.css';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            alert('Password changed successfully!');
        } else {
            alert('Passwords do not match!');
        }
    };

    return (
        <div className="change-password-container">
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <div className="form-actions">
                    <button type="submit" className="btn-confirm">Confirm</button>
                    <button type="button" className="btn-cancel">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
