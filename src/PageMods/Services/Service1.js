import './Service1.css';

function Service1({ modInfo }) {
    let services = modInfo.services;

  return (
    <div className='serviceContainer' style={{ maxWidth: '100vw', display: 'flex', padding: '2.5em' }}>
        {
          Object.entries(services).map(([key, value]) => {
            return (
                
              <div 
              className='service'
              style={{display: 'block'}}
              >
                
                  <div style={{ fontSize: '30px',  fontWeight: '600', margin: '0', width: '100%' }}>
                        {key}
                    </div>
                  
                

                <div style={{alignItems: 'center'}} >
                   
                    <div style={{ marginTop: '20px', fontSize: '20px', flex: '2', padding: '0 20px', }}>

                        {value.text}
                    </div>
                  <div >
                      <img src={value.icon} style={{ width: '100px', margin: '20px auto', }} /> 

                  </div>
                </div>
                
               

              </div>
            );
          })

        }
    </div>
  );
}

export default Service1;
