

// import React, { useState } from 'react';
// import './Detection.css';

// const Detection = () => {
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [result, setResult] = useState('');
//     const [loading, setLoading] = useState(false);

//     // Handle image upload
//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             setSelectedImage(URL.createObjectURL(file));
//         } else {
//             alert("Please upload a valid image file");
//         }
//     };

//     // Simulate detection process (replace with your AI logic or API call)
//     const handleDetection = () => {
//         if (!selectedImage) {
//             alert("Please upload an image first!");
//             return;
//         }

//         setLoading(true);
//         setTimeout(() => {
//             // Simulate detection logic (Replace with real detection logic)
//             setResult('Melanoma detected!');
//             setLoading(false);
//         }, 2000);  // Simulate a 2-second delay for detection
//     };

//     return (
//         <div className="detection-container">
//             <h1>Melanoma Detection</h1>

//             {/* Image Preview */}
//             <div className="image-preview">
//                 {selectedImage ? (
//                     <img src={selectedImage} alt="Preview" className="preview-img" />
//                 ) : (
//                     <p>No image selected</p>
//                 )}
//             </div>

//             {/* File Upload Input */}
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="file-input"
//             />

//             {/* Detect Button */}
//             <button className="detect-btn" onClick={handleDetection} disabled={loading}>
//                 {loading ? "Detecting..." : "Detect"}
//             </button>

//             {/* Result Display */}
//             {result && !loading && <div className="detection-result">{result}</div>}
//         </div>
//     );
// };

// export default Detection;

import React, { useState } from 'react';
import './Detection.css';

const Detection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [result, setResult] = useState('');
    const [accuracy, setAccuracy] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedImage(URL.createObjectURL(file));
        } else {
            alert("Please upload a valid image file");
        }
    };

    // Simulate detection process (replace with your AI logic or API call)
    const handleDetection = () => {
        if (!selectedImage) {
            alert("Please upload an image first!");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            // Simulate detection logic (Replace with real detection logic)
            const simulatedResult = 'Melanoma detected!'; // You can modify this
            const simulatedAccuracy = Math.floor(Math.random() * 100) + 50; // Random accuracy (for simulation)

            setResult(simulatedResult);
            setAccuracy(simulatedAccuracy); // Simulate accuracy percentage
            setLoading(false);
        }, 2000);  // Simulate a 2-second delay for detection
    };

    return (
        <div className="detection-container">
            <h1>Melanoma Detection</h1>

            {/* Image Preview */}
            <div className="image-preview">
                {selectedImage ? (
                    <img src={selectedImage} alt="Preview" className="preview-img" />
                ) : (
                    <p>No image selected</p>
                )}
            </div>

            {/* File Upload Input */}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
            />

            {/* Detect Button */}
            <button className="detect-btn" onClick={handleDetection} disabled={loading}>
                {loading ? "Detecting..." : "Detect"}
            </button>

            {/* Result Display */}
            {result && !loading && (
                <div className="detection-result">
                    <p>{result}</p>
                    <div className="accuracy-container">
                        <div className="accuracy-circle">{accuracy}%</div>
                        <p className="accuracy-text">Accuracy</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detection;
