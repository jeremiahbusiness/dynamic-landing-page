import React, { useState } from 'react';

// Define the component accepting props
const VerticalCarousel = ({ items = ['services', 'whyUs'] }) => { // Correctly use default props

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Go to the next service
  const nextService = () => {
    setCurrentServiceIndex((currentIndex) => 
      currentIndex + 1 < items.length ? currentIndex + 1 : 0
    );
  };

  // Go to the previous service
  const prevService = () => {
    setCurrentServiceIndex((currentIndex) => 
      currentIndex - 1 >= 0 ? currentIndex - 1 : items.length - 1
    );
  };
  function camelCaseToTitle(str) {
    // Insert a space before each uppercase letter followed by lowercase letters
    const result = str.replace(/([a-z])([A-Z])/g, '$1 $2')
      // Capitalize the first letter of the entire string and ensure the rest are as intended
      .replace(/^./, (match) => match.toUpperCase());
  
    return result;
  }
  


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
      <button onClick={prevService}>↑ Previous</button>
      <a
        href={`#${items[currentServiceIndex]}`} // Assuming each item is an anchor link ID
        style={{
          color: 'purple',
          margin: '20px',
          textDecoration: 'none',
          display: 'block',
          transition: 'all 0.5s ease',
      
        }}
      >
        {camelCaseToTitle(items[currentServiceIndex])}
      </a>
      <button onClick={nextService}>↓ Next</button>
    </div>
  );
};

export default VerticalCarousel;
