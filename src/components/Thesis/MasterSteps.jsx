import React, { useState, useEffect, useRef } from 'react';

import {
    Data, Data2, Label, Publication
  } from '../../constants/Uni';

  import Can from '../../assets/master/CAN_signals.png'
  import ecg from '../../assets/master/ECG_Rpeak.png'

const MasterSteps = () => {
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
            
            <ol>
                <li style={{ ...styles.regTextStyle, ...flyInStyle }}>
                   Test drives in Real-World Scenarios
                </li>
                <li style={{ ...styles.regTextStyle, ...flyInStyle }}>
                    Decoding of CAN Bus Data
                </li>
                <li style={{ ...styles.regTextStyle, ...flyInStyle }}>
                    Data Analysis
                </li>
                <ul>
                    <li style={{ ...styles.regTextStyle, ...flyInStyle, fontSize: '20px' }}>
                        {Data}
                    </li>
                    <li style={{ ...styles.regTextStyle, ...flyInStyle, fontSize: '20px' }}>
                        {Data2}
                    </li>
                    <img src={Can} alt="Responsive Image" style={styles.ImgaeContainer} />
                </ul>
                <li style={{ ...styles.regTextStyle, ...flyInStyle }}>
                    Generating Labels
                </li>
                <ul>
                    <li style={{ ...styles.regTextStyle, ...flyInStyle, fontSize: '20px' }}>
                        {Label}
                    </li>
                    <img src={ecg} alt="Responsive Image" style={styles.ImgaeContainer} />
                </ul>
                <li style={{ ...styles.regTextStyle, ...flyInStyle }}>
                    Development of the Classification Algorithm 
                </li>
                <ul>
                    <li style={{ ...styles.regTextStyle, ...flyInStyle, fontSize: '20px' }}>
                    I divided my data into training, testing, and validation sets, and subsequently trained my model.
                    </li>
                </ul>
                <li style={{ ...styles.regTextStyle, ...flyInStyle }}>
                    {Publication}
                </li>
            </ol>
            
        </>
    )
};

const styles = {
    
    regTextStyle: {
        textAlign: 'left',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '24px',
        color: '#bababa',
        letterSpacing: '0.1px',
        //color: '#d3d3d3', // Replace with the desired text color
        marginLeft: '40px',
    },
    ImgaeContainer: {
        width: '60%',
        justifyContent: 'left',
        alignItems: 'center',
        marginLeft:'20%',
        paddingTop: '20px',
    },
   
};

export default MasterSteps;