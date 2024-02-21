import logo from '../../logo.png';
import './Header.css';

function Header1({ modInfo }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100vw', }}>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', padding: '10px' }}>
            <img src={logo} className='App-logo' style={{ padding: '0', maxWidth: "6em", position: 'relative' }} alt="logo" />
            <div style={{ position: 'relative' }}>
                <p style={{ fontSize: '1.75em', textAlign: 'center', fontWeight: '500', lineHeight: '1em' }}>
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
  </header>
  );
}

export default Header1;
