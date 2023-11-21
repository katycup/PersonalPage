import React, { useState, useEffect, useRef } from 'react';
import Line from '../../LineAcrossPage';
import {
    Chemsafe
  } from '../../constants/Chemsafe';

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
            <div id='topMargin'>

            </div>
            <span id='top-text' style={{ ...styles.regTextStyle, ...flyInStyle, marginLeft:'-2.5%' }}>
                Chemsafe
            </span>
            <div style={{marginLeft:'-4%'}}>
                <Line /> 
            </div>
            
            
            <span id='gymText' style={{ ...styles.regTextStyle, ...flyInStyle, fontWeight: '200' }}>
                Database for Safety Characteristics in Explosion Protection
                <br/>
                
            </span>
            <span id='gymText' style={{ ...styles.regTextStyle, ...flyInStyle, fontWeight: '200' }}>
                <br/>
                {Chemsafe}
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
        //fontSize: '32px',
        letterSpacing: '0.1px',
        color: '#d3d3d3', // Replace with the desired text color
        marginLeft: '0%',
        paddingTop: '20px', // Add top padding of 20px
    },
};

export default TopSection;