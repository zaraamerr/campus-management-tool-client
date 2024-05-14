/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
// import React from 'react';
// import backgroundImage from '../components/views/background.png';

// const HomePageView = () => {
//   // Render Home page view
//   return (
//     <div style={{ background: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}>
//       <h1>Home Page</h1>
//     </div>
//   );    
// }

// export default HomePageView;

import React from 'react';
import backgroundImage from './background.png'; // Corrected import path

const HomePageView = () => {
  // Render Home page view
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* <h1 style={{ color: 'white' }}>Home Page</h1> */}
    </div>
  );    
}

export default HomePageView;
