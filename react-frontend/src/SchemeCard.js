// import React from 'react';

// const SchemeCard = ({ image, title, description, link }) => {
//   return (
//     <div className="scheme-card">
//       {/* <img src={image} alt={title} /> */}
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <a href={link} className="scheme-link">Learn More</a>
//     </div>
//   );
// };

// export default SchemeCard;

// import React, { useState } from 'react';
// import './SchemeCard.css';



// const SchemeCard = ({ image, title, description, link, eligibility }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };

//   return (
//     <div className="scheme-card">
//       {/* <img src={image} alt={title} /> */}
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <a href={link} className="scheme-link">Learn More</a>
//       <button onClick={togglePopup}>Show Data</button>
//       {isPopupVisible && (
//         <div className="popup">
//           {/* Popup content here */}
//           <p>This is the popup content.</p>

//           <button onClick={togglePopup}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SchemeCard;


// import React, { useState } from 'react';
// import './SchemeCard.css'; // Import the CSS file

// const SchemeCard = ({ image, title, description, link }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };

//   return (
//     <div className="scheme-card">
//       {/* <img src={image} alt={title} /> */}
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <a href={link} className="scheme-link">Learn More</a>
//       <button onClick={togglePopup}>Show Data</button>
//       {isPopupVisible && (
//         <div className="popup">
//           {/* Popup content here */}
//           <p>This is the popup content.{description}</p>
//           <button onClick={togglePopup}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SchemeCard;


import React, { useState, useRef, useEffect } from 'react';
import './SchemeCard.css'; // Import the CSS file
import image from './images/hero-bg1.jpg'

const SchemeCard = ({ cat, title, description, link, eligibility }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {

    setIsPopupVisible(!isPopupVisible);
    
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="scheme-card">
      {/* <img src={image} alt={title} /> */}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="scheme-link">Apply</a>
      <button onClick={togglePopup} className="show-data-button">Eligibility</button>
      {isPopupVisible && (
        <div className="popup" ref={popupRef}>
          {/* Popup content here */}
          <p>
            {eligibility}
          </p>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SchemeCard;
