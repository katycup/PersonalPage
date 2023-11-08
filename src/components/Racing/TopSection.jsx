import React, { useState, useEffect, useRef } from 'react';
import Line from '../../LineAcrossPage';
import {
    racingTeam
  } from '../../constants/Racing';
  import wob from '../../assets/Logo-schwarz-transparent.jpg'


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
            <img src={wob} alt="Responsive Image" className="sphere-image" />
            </span>
            <div style={{marginLeft:'-3%'}}>
                <Line /> 
            </div>
            
            
            <span style={{ ...styles.regTextStyle, ...flyInStyle, fontWeight: '200', fontSize: '28px' }}>
                Active Team Member in the Season 2017 - 2018
                <br/>
                
            </span>
            <span style={{ ...styles.regTextStyle, ...flyInStyle, fontWeight: '200', fontSize: '24px' }}>
                <br/>
                {racingTeam}
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
};

export default TopSection;