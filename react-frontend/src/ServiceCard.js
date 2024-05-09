import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faWallet, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="service-link">Access Service</a>
    </div>
  );
};

export default ServiceCard;