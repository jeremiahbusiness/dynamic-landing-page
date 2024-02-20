import logo from '../../logo.png';


function Footer1({ modInfo }) {
  return (
    <footer style={{  maxWidth: '100vw', padding: '10px', }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
           
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', padding: '10px' }}>
            <img src={logo} className='App-logo' style={{ padding: '0', maxWidth: "6em", position: 'relative' }} alt="logo" />
            <div style={{ position: 'relative' }}>
                <p style={{ fontSize: '1.75em', textAlign: 'center', fontWeight: '500' }}>
                {modInfo.title}
                </p>
            </div>
        </div>
        <div style={{ padding: '1em'  }}>
            <button
            onClick={() => window.location.href = 'tel:' + modInfo.phoneNumber}
            style={{ 
                width: '6em',
                padding: '1em',
                borderRadius: '15px',
                border: '0',
                fontSize: '1em',
                background: modInfo.colors.primary, 
                color: 'white',
                fontWeight: 'normal'
            }}
            >
                Call Now
            </button>
        </div>
</div>
    <div>
    <p style={{ padding: '0', fontSize: '1em', textAlign: 'center' }}>
                Copyright © 2024<br /><br />
                Brought to you through <strong>Jeremiah Business Solutions</strong><br />
                All rights Reserved
                    </p>
    </div>
  </footer>
  );
}

export default Footer1;
