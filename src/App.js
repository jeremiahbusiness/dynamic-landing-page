import React, { useState, useEffect } from 'react';
// Importing page-specific components for structured layout
import Header1 from './PageMods/Headers/Header1';
import Bio1 from './PageMods/Bio/Bio1';
import Service1 from './PageMods/Services/Service1';
import WhyUs1 from './PageMods/WhyUs/WhyUs1';
import Footer1 from './PageMods/Footer/Footer1';
// Importing a function to fetch data from the database
import { fetchDBMods } from './DBService';
// Material UI component for displaying a loading indicator
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  // State to store the current mod's data
  const [dbMod, setDBMod] = useState([]);
  // State to manage the loading indicator visibility
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Asynchronous function to load mod data from the database
    const loadDBMods = async () => {
      // Identify Domain Prefix
      let domainPrefix = 'watchdogtechshop';
        const hostname = window.location.hostname;
        // Split hostname into parts
        const parts = hostname.split('.');
        
        // Assuming a standard domain format like 'subdomain.domain.tld'
        // Adjust the logic below if your domain structure is different
        if(parts.length > 2) {
          // Remove the TLD and domain name to get the subdomain
          domainPrefix = parts.slice(0, -2).join('.');
        }
      
      
    
      try {
        // Indicate that loading has started
        setIsLoading(true);
        // Fetch mod data and filter for a specific project
        const dbmodData = await fetchDBMods(process.env.REACT_APP_PROJECT_MODTYPE);
        const project = dbmodData.find(project => project.name === domainPrefix);
        // Update state with the filtered project data
        setDBMod(project);
      } catch (error) {
        // Log any errors encountered during the fetch operation
        console.error('Error loading dbMods:', error);
      } finally {
        // Hide the loading indicator once data is loaded or in case of error
        setIsLoading(false);
      }
    };

    // Perform the initial data load
    loadDBMods();

    // Set up an interval to refresh data every 60 seconds
    const intervalId = setInterval(loadDBMods, 60000);

    // Define a cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // An empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="App" style={{ fontFamily: 'andale mono' }}>
      {isLoading ? (
        // Display a loading indicator while data is being fetched
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      ) : (
        // Render the main app content once data is loaded
        <>
          <Header1 modInfo={dbMod} />
          <Bio1 modInfo={dbMod} />
          <Service1 modInfo={dbMod} />
          <WhyUs1 modInfo={dbMod} />
          <Footer1 modInfo={dbMod} />
        </>
      )}
    </div>
  );
}

export default App;
