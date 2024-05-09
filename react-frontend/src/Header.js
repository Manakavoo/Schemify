import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* <img src="logo.png" alt="|  Schemify" /> */}
        <p>Schemify</p>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Schemes</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#" className="login-link">Login/Register</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import LoginRegisterModal from './LoginRegisterModal'; // Assuming this is the path to your LoginRegisterModal component

// const Header = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleLoginClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <header>
//       <div className="logo">
//         <img src="logo.png" alt="Schemify Logo" />
//         <p>Schemify</p>
//       </div>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/schemes">Schemes</Link></li>
//           <li><Link to="/services">Services</Link></li>
//           <li><Link to="/feedback">Feedback</Link></li>
//           <li><a href="#" className="login-link" onClick={handleLoginClick}>Login/Register</a></li>
//         </ul>
//       </nav>
//       {showModal && <LoginRegisterModal onClose={handleCloseModal} />}
//     </header>
//   );
// };

// export default Header;
