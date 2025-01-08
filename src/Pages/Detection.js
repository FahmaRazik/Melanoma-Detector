import React, { useState } from 'react';
import './Detection.css';

const Detection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [result, setResult] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleDetection = () => {
        // Simulate detection logic here
        setResult('Melanoma detected!'); // Replace this with real detection logic
    };

    return (
        <div className="detection-container">
            <h1>Melanoma Detection</h1>
            <div className="image-preview">
                {selectedImage ? (
                    <img src={selectedImage} alt="Preview" />
                ) : (
                    <p>No image selected</p>
                )}
            </div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
            />
            <button className="detect-btn" onClick={handleDetection}>
                Detect
            </button>
            {result && <div className="detection-result">{result}</div>}
        </div>
    );
};

export default Detection;
