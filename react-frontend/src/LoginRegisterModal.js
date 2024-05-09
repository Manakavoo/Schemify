// import React, { useState } from 'react';

// const LoginRegisterModal = () => {
//   const [activeTab, setActiveTab] = useState('login');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleClose = () => {
//     document.getElementById('loginModal').style.display = 'none';
//   };

//   return (
//     <div className="modal" id="loginModal">
//       <div className="modal-content">
//         <span className="close-button" onClick={handleClose}>&times;</span>
//         <div className="modal-tabs">
//           <button
//             className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
//             onClick={() => handleTabClick('login')}
//           >
//             Login
//           </button>
//           <button
//             className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
//             onClick={() => handleTabClick('register')}
//           >
//             Register
//           </button>
//         </div>
//         <div className={`login-form ${activeTab === 'login' ? '' : 'hidden'}`}>
//           <h2>Login</h2>
//           <form>
//             <label htmlFor="username">Username:</label>
//             <input type="text" id="username" name="username" required />
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" name="password" required />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//         <div className={`register-form ${activeTab === 'register' ? '' : 'hidden'}`}>
//           <h2>Register</h2>
//           <form>
//             <label htmlFor="reg-username">Username:</label>
//             <input type="text" id="reg-username" name="reg-username" required />
//             <label htmlFor="reg-email">Email:</label>
//             <input type="email" id="reg-email" name="reg-email" required />
//             <label htmlFor="reg-password">Password:</label>
//             <input type="password" id="reg-password" name="reg-password" required />
//             <button type="submit">Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginRegisterModal;


import React, { useState } from 'react';

const LoginRegisterModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="modal" id="loginModal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="modal-tabs">
          <button
            className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabClick('login')}
          >
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => handleTabClick('register')}
          >
            Register
          </button>
        </div>
        {/* Login and Register form components here */}
        <div className={`login-form ${activeTab === 'login' ? '' : 'hidden'}`}>
          <h2>Login</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className={`register-form ${activeTab === 'register' ? '' : 'hidden'}`}>
          <h2>Register</h2>
          <form>
            <label htmlFor="reg-username">Username:</label>
            <input type="text" id="reg-username" name="reg-username" required />
            <label htmlFor="reg-email">Email:</label>
            <input type="email" id="reg-email" name="reg-email" required />
            <label htmlFor="reg-password">Password:</label>
            <input type="password" id="reg-password" name="reg-password" required />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterModal;
