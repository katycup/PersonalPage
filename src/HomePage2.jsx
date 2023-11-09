import React, { useState, useEffect, useRef } from 'react';
import pic from './assets/me2.png';
import linkedin from './assets/linkedin.png'

import './App.css'
import Line from './LineAcrossPage';
import Line2 from './ThinnerLineAcross';

import { Jobs, Headliner} from './constants/ExperienceConstants';
import Resume from './components/HomePage/Resume';
import Technical from './components/HomePage/Technical';
import Contact from './components/HomePage/Contact';

const HomePage2 = () => {
  // Create a media query for screens narrower than 768px
  

  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Set a timeout to gradually show the name after a delay (e.g., 1 second)
    const timeout = setTimeout(() => {
      setShowName(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const [showTextContainer, setShowTextContainer] = useState(false);

  useEffect(() => {
    // Set a timeout to gradually show the textContainer after a delay (e.g., 1 second)
    const timeout = setTimeout(() => {
      setShowTextContainer(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const [showImageContainer, setShowImgeContainer]=useState(false);

  useEffect(() => {
    // Set a timeout to gradually show the textContainer after a delay (e.g., 1 second)
    const timeout = setTimeout(() => {
      setShowImgeContainer(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  
  const textContainerStyles = {
    width: '30%', // Set the width to 30% of the page width
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Start from the right
    justifyContent: 'center',
    margin: '0 auto', // Center the container horizontally
    transform: showTextContainer ? 'translateX(0)' : 'translateX(100%)', // Initially hidden and gradually shown
    transition: 'transform 1s ease-in-out, opacity 1s ease-in', // Add smooth transitions for transform and opacity
    opacity: showTextContainer ? 1 : 0,
  };

  const imageContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '0 auto', // Center the container horizontally
    transform: showImageContainer ? 'translateX(0)' : 'translateX(100%)', // Initially hidden and gradually shown
    transition: 'transform 1s ease-in-out, opacity 1s ease-in', // Add smooth transitions for transform and opacity
    opacity: showImageContainer ? 1 : 0,
  };

  const gradientOverlay = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '110%',
    height: '100%',
    background: 'linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
    zIndex: 1,
  };
  
  const headingStyles = {
    lineHeight: '0.8em',
    textAlign: 'left',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '56px',
    letterSpacing: '-2.2px',
    padding: '20px',
    opacity: showName ? 1 : 0, // Initially hidden (opacity: 0) and gradually shown (opacity: 1)
    transition: 'opacity 1s ease-in-out', // Add a smooth transition effect
  };


 

  return (
    <div style={styles.pageStyle}>
      <div className="container">
    
        <h1 style={headingStyles}>
          <span>Katharina</span>
          <br />
          <span>Ditler</span>
          <br />
          <p style={styles.paragraphStyles}>{Jobs}</p>
        </h1>
        
        <div id="text-container" style={textContainerStyles}>
          <span style={styles.additionalTextStyle}>{Headliner}</span>
          <br />
          <a href="./KatharinaDitler.pdf" style={styles.linkStyles} download>
            Download Resume &nbsp; &nbsp; &nbsp; &#x2192; {/* Right-pointing arrow character */}
          </a>

        </div>
        
      </div>
      <div  id="image-container" style={imageContainerStyles}>
        <img src={pic} alt="Responsive Image" style={styles.responsiveImageStyles} />
        {/* <div style={gradientOverlay}></div> */}
      </div>

      <Resume />
      <Technical/>
      <Contact/>
    </div>
   
  );
};

const styles = {
  pageStyle: {
    backgroundColor: 'black', // Set the background color to black
    color: '#d3d3d3', // Set the text color to white
    minHeight: '100vh', // Make sure the page covers the entire viewport height
    display: 'flex',
    flexDirection: 'column',
  },
  
  
  responsiveImageStyles : {
    maxWidth: '50%',
    height: 'auto',
    display: 'block',
    borderRadius: '5%',
    overflow: 'hidden',
  },

  paragraphStyles :{
    lineHeight: '1.5em',
    textAlign: 'left',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: 200,
    fontSize: '28px',
    letterSpacing: '0.1px',
    //margin: '20px', // Add margin for spacing
  },
  additionalTextStyle: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    letterSpacing: '0.1px',
    color: '#d3d3d3', // Replace with the desired text color
  },
  
  linkStyles : {
    
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#d3d3d3',
    border: '2px solid black',
    color: 'black',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default HomePage2;
