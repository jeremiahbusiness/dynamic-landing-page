import './Service1.css';
import ms from '../../Icons/Orion_processor-cpu.svg';
import tablet from '../../Icons/Orion_tablet.svg';
import watch from '../../Icons/Orion_processor-cpu.svg';

function Service1() {
    let services = [
        {
          "name": "Microsoldering Services",
          "description": "Experience unparalleled expertise with our microsoldering services. Whether you're facing complex motherboard issues or need intricate repairs at the microscopic level, our technicians are equipped to handle the most challenging problems, restoring functionality and extending the life of your devices.",
          "icon": ms
        },
        {
          "name": "General Electronics Repair",
          "description": "From smartphones to tablets, and computers to game consoles, our comprehensive repair services cover a wide range of electronic devices. We diagnose and fix common issues such as screen replacements, battery changes, and software problems, ensuring your gadgets work like new.",
          "icon": tablet
            
        },
        {
          "name": "Apple Watch Refurbishment",
          "description": "Specializing in Apple Watch refurbishment, we provide detailed restoration services that breathe new life into your watch. Whether it's screen repair, battery replacement, or cosmetic rejuvenation, trust us to return your Apple Watch to its original glory, making it look and function as if it just came out of the box.",
          "icon": watch
        }
      ];
  return (
    <div className='serviceContainer' style={{ maxWidth: '100vw', display: 'flex', padding: '2.5em' }}>
        {
          services.map(service => {
            return (
                
              <div 
              className='service'
              >
                
                <div>
                    <img src={service.icon} style={{ width: '100px', margin: '20px auto' }} />

                </div>
                

                <div>
                    <div style={{ fontSize: '30px',  fontWeight: '600', margin: '0' }}>
                        {service.name}
                    </div>
                    <div style={{ marginTop: '20px', fontSize: '20px' }}>

                        {service.description}
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
