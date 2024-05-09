


// import React, { useState } from 'react';
// import './Chat.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';


// const Chat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hello, how can I assist you today?' },
//   ]);
//   const [newMessage, setNewMessage] = useState('');

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMessageChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, { sender: 'user', text: newMessage }]);
//       setNewMessage('');
//       // Add your logic to send the message to the backend and receive the response
//       const sampleResponse = 'This is a sample response from the bot.';
//       setMessages([...messages, { sender: 'user', text: newMessage }, { sender: 'bot', text: sampleResponse }]);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <button className="chat-button" onClick={toggleChat}>
//         <i className="fas fa-comment"> </i>
//       </button>
//       {isOpen && (
//         <div className="chat-box">
//           <div className="chat-header">
//             <h4>Chat</h4>
//             <button className="close-button" onClick={toggleChat}>
//               <i className="fas fa-times"></i>
//             </button>
//           </div>
//           <div className="chat-messages">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`chat-message ${message.sender === 'bot' ? 'bot' : 'user'}`}
//               >
//                 <span>{message.text}</span>
//               </div>
//             ))}
//           </div>
//           <div className="chat-input">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={newMessage}
//               onChange={handleMessageChange}
//               onKeyPress={(e) => {
//                 if (e.key === 'Enter') {
//                   handleSendMessage();
//                 }
//               }}
//             />
//             <button className="send-button" onClick={handleSendMessage}>
//               <i className="fas fa-paper-plane"></i>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chat;

// import React, { useState } from 'react';
// import './Chat.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { handleSendMessage } from './chatUtils';

// const Chat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hello, how can I assist you today?' },
//   ]);
//   const [newMessage, setNewMessage] = useState('');

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMessageChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const handleSendMessage = async () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, { sender: 'user', text: newMessage }]);
//       try {
//         const botResponse = await handleSendMessage(newMessage);
//         setMessages([...messages, { sender: 'user', text: newMessage }, { sender: 'bot', text: botResponse }]);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//       setNewMessage('');
//     }
//   };


//   return (
//     <div className="chat-container">
//       <button className="chat-button" onClick={toggleChat}>
//         <i className="fas fa-comment"></i>
//       </button>
//       {isOpen && (
//         <div className="chat-box">
//           <div className="chat-header">
//             <h4>Chat</h4>
//             <button className="close-button" onClick={toggleChat}>
//               <i className="fas fa-times"></i>
//             </button>
//           </div>
//           <div className="chat-messages">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`chat-message ${message.sender === 'bot' ? 'bot' : 'user'}`}
//               >
//                 <span>{message.text}</span>
//               </div>
//             ))}
//           </div>
//           <div className="chat-input">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={newMessage}
//               onChange={handleMessageChange}
//               onKeyPress={(e) => {
//                 if (e.key === 'Enter') {
//                   handleSendMessage();
//                 }
//               }}
//             />
//             <button className="send-button" onClick={handleSendMessage}>
//               <i className="fas fa-paper-plane"></i>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );

// };

// export default Chat;

// import React, { useState, useEffect } from 'react';
// import './Chat.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { handleSendMessage } from './chatUtils';

// const Chat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hello, how can I assist you today?' },
//   ]);
//   const [newMessage, setNewMessage] = useState('');

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMessageChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const handleSendMessage = async () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, { sender: 'user', text: newMessage }]);
//       try {
//         const botResponse = await handleSendMessage(newMessage);
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { sender: 'user', text: newMessage },
//           { sender: 'bot', text: botResponse },
//         ]);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//       setNewMessage('');
//     }
//   };

//   useEffect(() => {
//     const chatMessagesContainer = document.querySelector('.chat-messages');
//     if (chatMessagesContainer) {
//       chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <div className="chat-container">
//       <button className="chat-button" onClick={toggleChat}>
//         <i className="fas fa-comment"></i>
//       </button>
//       {isOpen && (
//         <div className="chat-box">
//           <div className="chat-header">
//             <h4>Chat</h4>
//             <button className="close-button" onClick={toggleChat}>
//               <i className="fas fa-times"></i>
//             </button>
//           </div>
//           <div className="chat-messages">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`chat-message ${message.sender === 'bot' ? 'bot' : 'user'}`}
//               >
//                 <span>{message.text}</span>
//               </div>
//             ))}
//           </div>
//           <div className="chat-input">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={newMessage}
//               onChange={handleMessageChange}
//               onKeyPress={(e) => {
//                 if (e.key === 'Enter') {
//                   handleSendMessage();
//                 }
//               }}
//             />
//             <button className="send-button" onClick={handleSendMessage}>
//               <i className="fas fa-paper-plane"></i>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chat;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessages([...messages, { sender: 'user', text: inputValue }]);
//     setInputValue('');
  
//     try {
//       const response = await axios.post('http://localhost:5000/chat', { message: inputValue });
//       setMessages([...messages, { sender: 'bot', text: response.data.response }]);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Chatbot;


import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = { sender: 'user', text: inputValue };
    setMessages([...messages, userMessage]);
    setInputValue('');

    try {
      const response = await axios.post('http://localhost:5000/chat', { message: inputValue });
      const botResponse = { sender: 'bot', text: response.data.response };
      setMessages([...messages, userMessage, botResponse]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <i className="fas fa-comment"></i>
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chatbot</h3>
            <button className="close-btn" onClick={closeChatbot}>
              &times;
            </button>
          </div>
          <div className="chatbot-body">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
                style={{ alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start' }}
              >
                <div className="message-text">{message.text}</div>
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;