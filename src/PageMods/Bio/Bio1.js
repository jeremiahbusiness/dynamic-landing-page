

import coverImage from '../../coverImage.jpeg'
import "./Bio1.css";

function Bio1({ modInfo }) {
  return (
    <section
    className="relative"
    style={{ backgroundImage: `url(${coverImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white'
 }}
  >

  
    <div
      className="relative mx-auto  px-4 py-32 sm:px-6 lg:flex lg:items-center "
    >
      <div className="max-w-xl text-center">
        
        
        
      
  
        <div className="mt-8 flex flex-wrap gap-4 text-center" style={{ backgroundColor: modInfo.colors.primary, padding: '30px', borderRadius: '1.5em', border: '2px solid white' }}>
                <div>
                <p style={{ marginBottom: '10', fontSize: '45px', fontWeight: 'bold', lineHeight: '35px', letterSpacing: '1.5px' }}>
                A Simplified Process
            </p>
            <p style={{ marginTop: '0',  fontSize: '30px', color: modInfo.colors.secondary, fontWeight: 'bold' }}>
                For Your Convenience
            </p>
            <p style={{ fontSize: '20px', padding: '20px 0' }}>
                {modInfo.intro}
            </p>
                </div>
            <button
            onClick={() => window.location.href = 'tel:' + modInfo.phoneNumber}
            style={{ 
                width: '100%',
                
                padding: '1em',
                borderRadius: '15px',
                border: '0',
                fontSize: '1em',
                background: modInfo.colors.secondary, 
                color: 'black',
                fontWeight: 'normal'
            }}
            >
                Call Now
            </button>
        </div>
      </div>
    </div>
 
  </section>
  );
}

export default Bio1;
