import React from 'react';
import coverImage from '../../coverImage.jpeg';



function Bio1({ modInfo }) {
  const steps = [
    "Identify the issue with your device.",
    "Contact us via phone or online to schedule a repair.",
    "Bring or send your device to our repair center.",
    "Our experts diagnose and fix your device.",
    "Pick up your device or receive it by mail."
  ];
  return (
    <div
  
      style={{ backgroundImage: `url(${coverImage})`, backgroundSize: 'cover', color: 'white', minHeight: '60vh', padding: '25px' }}
   
    >
  


          <div style={{ padding: '50px', borderRadius: '1.5em', backgroundColor: modInfo.colors.primary, border: '2px solid white', maxWidth: '500px', margin: '25px',}}>
            <h1  style={{ fontWeight: 'bold', letterSpacing: '1.5px', margin: 0, fontSize: '40px',  }}>
              A Simplified Process
            </h1>
            <h2 className="" style={{ color: modInfo.colors.secondary, fontStyle: 'italic', fontSize: '25px', marginTop: '0' }}>
              For Our Convenience
            </h2>
            <p style={{ fontSize: '25px' }}>{modInfo.intro}</p>
            <h2>How it works:</h2>
            <ol style={{ marginTop: '20px', paddingLeft: '20px', fontSize: '20px' }}>
          {steps.map((step, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{step}</li>
          ))}
        </ol>
            <button
              style={{
                width: '100%',
                padding: '1em',
                borderRadius: '15px',
                border: '0',
                fontSize: '1em',
                background: modInfo.colors.secondary, 
                color: 'white',
                fontWeight: 'normal'
              }}
         
              onClick={() => window.location.href = `tel:${modInfo.phoneNumber}`}
            >
              Get Started
            </button>
           
          </div>
  

    
    </div>
  );
}

export default Bio1;
