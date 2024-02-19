import logo from '../../logo.png';


function Footer1() {
  return (
    <footer style={{  maxWidth: '100vw', padding: '10px', }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
           

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                    <img src={logo} style={{ maxWidth: "50px", position: 'relative', padding: '0 20px'}} alt="logo" />
                    <div style={{ position: 'relative' }}>
                        <p style={{ fontSize: '1.5em' }}>
                        Watchdog Workshop
                        </p>
                        
                    </div>
                </div>
               
          

            <div style={{ padding: '10px'  }}>
                <button
                onClick={() => window.location.href = 'tel:' + process.env.REACT_APP_API_ENDPOINT}
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
    </div>
    <div>
    <p style={{ padding: '0', fontSize: '1em', textAlign: 'center' }}>
                Copyright © 2024<br />
                Boston Capital Company<br />
                All rights Reserved
                    </p>
    </div>
  </footer>
  );
}

export default Footer1;
