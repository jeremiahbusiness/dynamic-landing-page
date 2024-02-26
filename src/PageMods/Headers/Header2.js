import React, { useState } from 'react';

const Header2 = () => {


  // State to manage modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show modal
  const showModal = () => setIsModalVisible(true);

  // Function to hide modal
  const hideModal = () => setIsModalVisible(false);

  const content = ['Home', 'Pricing', 'Book Now', 'About Us', 'Contact'];

  const navItems = content.map((item, index) => {
    switch (item) {
      case 'Home':
        return <a key={index} href="index.php">Home</a>;
      case 'Pricing':
        return <a key={index} href="pricing.php">Pricing</a>;
      case 'Book Now':
        return <a key={index} href="bookNow.php">Book Now</a>;
      case 'About Us':
        return <a key={index} href="aboutUs.php">About Us</a>;
      case 'Contact':
        return <button key={index} onClick={showModal}>Contact</button>;
      default:
        return null;
    }
  });

  return (
    <header>
      <nav style={{ color: 'black' }}>
        <div className="navbar-logo">
          <a href="/">
            <img src="logos/circleWhiteLogo.png" alt="Logo" style={{ maxWidth: 230, maxHeight: 95 }} />
          </a>
        </div>
        <div className="navbar-items">
          <ul>{navItems}</ul>
        </div>
      </nav>
      {isModalVisible && (
        <div className="modal" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 100, backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
          <div className="modal-content" style={{ textAlign: 'center' }}>
            <button onClick={hideModal} style={{ float: 'right' }}>Close</button>
            <h2>Contact Info</h2>
            <p><a href={`tel:${phoneNumber}`}>{formattedPhoneNumber}</a></p>
            <p><a href={`mailto:${email}`}>{email}</a></p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header2;
