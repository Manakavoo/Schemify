// // import logo from './logo.svg';
// import './App.css';
// import sch_data from './data/schemes.json'
// import { useState, useEffect } from 'react';

// function App() {
//   // const [data , setData] = useState(sch_data)
//   // let sam=" hb"
//   // console.log(data[0] )
//   // console.log(typeof data )

//   return (
//     <div className="App">
//       {/* <div> data is shown here  </div> */}
//       <div className='scheme-layout'>
//         {
//           sch_data.map((name, i) => (
//             <div className='scheme'>
//               <a href={`#${i}_${name.name}`}> <p key={i}> <b> {i}:</b> {name.name} </p></a>
//               <p key={i}> category: {name.category} </p>
//               <div className='view'>
//                 <a href= {`#view`}>view details</a>
//               </div >
//             </div>
//           ))
//         }


//       </div>

//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './Header';
import LoginRegisterModal from './LoginRegisterModal';
import SchemeCard from './SchemeCard';
import ServiceCard from './ServiceCard';
import { faFileAlt, faWallet, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
// import "./App.css";
import './App.css';

import jsondata from './data/schemes.json';
import Chat from './Chat';


const App = () => {
  return (
    <div>
      <Header />
      <LoginRegisterModal />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>MySchemes</h1>
            <p>Explore government schemes and services</p>
            <div className="search-bar">
              <input type="text" placeholder="Search for schemes or services" />
              <button>Search</button>
            </div>
            <div className="quick-links">
              <a href="#">Popular Schemes</a>
              <a href="#">Top Services</a>
            </div>
          </div>
        </section>
        <section className="schemes">
          <h2>Featured Schemes</h2>


          <div className="scheme-cards">
            {
              jsondata.map(item=>(
                <SchemeCard
              cat={item.category}
              title={item.name}
              description={item.description}
              link={item.id}
              eligibility={item.eligibilityCriteria}
            />
              ))
            }

            



            {/* <SchemeCard
              image="scheme-image-2.jpg"
              title="Scheme 2"
              description="Description of Scheme 2"
              link="#"
            />
            <SchemeCard
              image="scheme-image-3.jpg"
              title="Scheme 3"
              description="Description of Scheme 3"
              link="#"
            /> */}
          </div>
          <Chat/>
        </section>
        <section className="services">
          <h2>Featured Services</h2>
          <div className="service-cards">
            <ServiceCard
              icon={faFileAlt}
              title="Service 1"
              description="Description of Service 1"
              link="#"
            />
            <ServiceCard
              icon={faWallet}
              title="Service 2"
              description="Description of Service 2"
              link="#"
            />
            <ServiceCard
              icon={faGraduationCap}
              title="Service 3"
              description="Description of Service 3"
              link="#"
            />
          </div>
        </section>
        <section className="news">
          <h2>News and Updates</h2>
          <div className="news-items">
            {/* News items go here */}
          </div>
        </section>
        <section className="feedback">
          <h2>Feedback and Contact</h2>
          <p>Let us know your thoughts or get in touch with us.</p>
          <a href="#" className="feedback-btn">Provide Feedback</a>
          <div className="contact-info">
            <p>Phone: 1234567890</p>
            <p>Email: info@myscheme.gov.in</p>
            <p>Address: 123 Main Street, New Delhi</p>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="footer-logo.png" alt="Government Footer Logo" />
          </div>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
          <div className="copyright">
            <p>&copy; 2023 MyScheme. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;