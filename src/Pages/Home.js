

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//     const navigate = useNavigate();

//     const handleGetStarted = () => {
//         // Redirect to login page
//         navigate('/login');
//     };

//     return (
//         <div className="home-container">
//             <h1>Early detection of Melanoma through image analysis</h1>
//             <button className="btn-get-started" onClick={handleGetStarted}>
//                 Get Started
//             </button>
//         </div>
//     );
// };

// export default Home;
// import React from 'react';
// import './Home.css';

// const Home = ({ isLoggedIn }) => {
//     return (
//         <div className="home-container">
//             {isLoggedIn ? (
//                 <>
//                     <h1>Early detection of Melanoma through image analysis</h1>
//                     <button className="btn-get-started">Get Started</button>
//                 </>
//             ) : (
//                 <h1>Welcome! Please log in to continue.</h1>
//             )}
//         </div>
//     );
// };

// export default Home;
import React from 'react';
import './Home.css';

const Home = ({ isLoggedIn }) => {
    return (
        <div className="home-container">
            {isLoggedIn ? (
                <>
                    <h1>Early detection of Melanoma through image analysis</h1>
                    <button className="btn-get-started">Get Started</button>
                </>
            ) : (
                <h1>Welcome! Please log in to continue.</h1>
            )}
        </div>
    );
};

export default Home;
