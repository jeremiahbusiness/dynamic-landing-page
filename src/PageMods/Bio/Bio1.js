

import coverImage from '../../coverImage.jpeg'

function Bio1() {
  return (
    <div style={{ 
        backgroundImage: `url(${coverImage})`, 
        height: '150vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex'
        }}>
        `
        <div style={{ height: '500px', backgroundColor: 'white', width: '75vw', marginTop: '10vh', alignItems: 'center', display: 'flex', borderRadius: '20px'  }}>
        <div style={{ textAlign: 'left', padding: '0 5vw' }}>
            <p style={{ marginBottom: '0', fontSize: '30px', fontWeight: 'bold' }}>
            A Simplified Process
            </p>
            <p style={{ marginTop: '0',  fontSize: '27.5px' }}>
            For Your Convenience
            </p>
            <p style={{ fontSize: '20px' }}>
            Get your device repaired today! We specialize in returning malfunctioning electronic devices to their original working condition. Whether it's a smartphone, tablet, laptop, or any other electronic device, our team of experts is equipped with the skills and tools to diagnose and fix the issue. Trust us to breathe new life into your gadgets. Contact us now to get started!
            </p>
            
            <button
                onClick={() => window.location.href = 'tel:' + process.env.REACT_APP_API_ENDPOINT}

            style={{ 
                width: '150px',
                padding: '20px',
                borderRadius: '15px',
                border: '0',
                fontSize: '20px',
                background:'#943434', 
                color: 'white',
                fontWeight: 'normal',
                marginTop: '20px',
            }}
            >
                Get Started
            </button>
        </div>
        </div>
    </div>
  );
}

export default Bio1;
