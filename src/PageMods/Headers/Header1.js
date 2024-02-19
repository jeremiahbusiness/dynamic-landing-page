import logo from '../../logo.png';
import './Header.css';

function Header1() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100vw', }}>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', padding: '10px' }}>
            <img src={logo} className='App-logo' style={{ maxWidth: "75px", position: 'relative' }} alt="logo" />
            <div style={{ position: 'relative' }}>
                <p style={{ fontSize: '1.5em' }}>
                Watchdog Workshop
                </p>
            </div>
        </div>
        <div style={{ padding: '20px'  }}>
            <button
            style={{ 
                width: '125px',
                padding: '20px',
                borderRadius: '15px',
                border: '0',
                fontSize: '1.25em',
                background:'#943434', 
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
