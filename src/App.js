import React from 'react';

import Header1 from './PageMods/Headers/Header1';
import Bio1 from './PageMods/Bio/Bio1';
import Service1 from './PageMods/Services/Service1';
import WhyUs1 from './PageMods/WhyUs/WhyUs1';
import Footer1 from './PageMods/Footer/Footer1';


function App() {
  function getDomainPrefix() {
    const hostname = window.location.hostname;
    // Split hostname into parts
    const parts = hostname.split('.');
    
    // Assuming a standard domain format like 'subdomain.domain.tld'
    // Adjust the logic below if your domain structure is different
    if(parts.length > 2) {
      // Remove the TLD and domain name to get the subdomain
      return parts.slice(0, -2).join('.');
    } else {
      // No subdomain present, or it's a localhost development
      return '';
    }
  }
  
  const domainPrefix = getDomainPrefix();
  console.log(domainPrefix); // Outputs the domain prefix (subdomain)



  return (
    <div className="App" style={{ fontFamily: 'andale mono' }}>
      <Header1 />
      <Bio1 />
      <Service1 />
      <WhyUs1 />
      <Footer1 />
    </div>
  );
}

export default App;
