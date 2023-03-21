import React, { useState } from 'react';
import './HelpButton.css';

const HelpButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="help-button-container">
      <button className="help-button" onClick={handleButtonClick}>Need Help?</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>Please email us at <a href="mailto:favouritecars@gmail.com">favouritecars@gmail.com</a> for any assistance.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpButton;

