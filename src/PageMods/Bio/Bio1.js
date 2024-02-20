

import coverImage from '../../coverImage.jpeg'

function Bio1({ modInfo }) {
  return (
    <div style={{ 
        backgroundImage: `url(${coverImage})`, 
        height: '110vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex'
        }}>
        `
        <div style={{ maxHeight: '650px', backgroundColor: 'white', width: '75vw', marginTop: '20px', alignItems: 'center', display: 'flex', borderRadius: '20px'  }}>
        <div style={{ textAlign: 'left', padding: '0 5vw' }}>
            <p style={{ marginBottom: '0', fontSize: '30px', fontWeight: 'bold' }}>
                A Simplified Process
            </p>
            <p style={{ marginTop: '0',  fontSize: '27.5px' }}>
                For Your Convenience
            </p>
            <p style={{ fontSize: '20px' }}>
                {modInfo.intro}
            </p>
            
            <button
                onClick={() => window.location.href = 'tel:' + modInfo.phoneNumber}

            style={{ 
                width: '150px',
                padding: '20px',
                borderRadius: '15px',
                border: '0',
                fontSize: '20px',
                background: modInfo.colors.primary, 
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
