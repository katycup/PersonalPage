import React, { useState, useEffect, useRef } from 'react';
import Line from '../../LineAcrossPage';
import {
    HomeOffice
  } from '../../constants/Uni';



const TopSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    // Use a timeout to delay the appearance animation
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay in milliseconds as needed

    // Clear the timeout on unmount to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const flyInStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'opacity 1s, transform 1s',
  };

    return(
        <>
            <div style={{marginTop:'5%'}}>

            </div>
            
            <span style={{ ...styles.regTextStyle, ...flyInStyle }}>
                Tracking Activities of Daily Living in the Home Office
            </span>
            <div style={{marginLeft:'-3%'}}>
                <Line /> 
            </div>
            
            
            <span style={{ ...styles.regTextStyle, ...flyInStyle, fontWeight: '200', fontSize: '28px' }}>
                Technical University Braunschweig &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="./public/dailyActivities.pdf" style={styles.linkStyles} download>
            Download Paper &nbsp; &nbsp; &nbsp; &#x2192; {/* Right-pointing arrow character */}
          </a>
             <br/>
                
            </span>
            <span style={{ ...styles.regTextStyle, ...flyInStyle, fontWeight: '200', fontSize: '24px' }}>
                <br/>
                {HomeOffice}
            </span>
            
        </>
    )
};

const styles = {
    regTextStyle: {
        textAlign: 'left',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '32px',
        letterSpacing: '0.1px',
        color: '#d3d3d3', // Replace with the desired text color
        marginLeft: '0%',
        paddingTop: '20px', // Add top padding of 20px
    },
    linkStyles : {
    
        display: 'inline-block',
        padding: '1px 20px',
        backgroundColor: '#d3d3d3',
        border: '2px solid black',
        color: 'black',
        textDecoration: 'none',
        borderRadius: '5px',
        marginTop: '5px',
      },
};

export default TopSection;