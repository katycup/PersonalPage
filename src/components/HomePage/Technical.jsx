import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from '../Headers/SectionHeader';
import SectionText from './SectionText';
import tech from '../../assets/about/techStack/tech.svg';
import TabbedSquare from './TabbedSquare';

const Technical = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isTechnicalVisible, setIsTechnicalVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTechnicalVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const absatzStyle = {
    lineHeight: '1.5em',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '0.1px',
    paddingLeft: '50px',
    paddingTop: '20px',
    margin: '10px',
    animation: 'flyInFromLeft 1s ease-in-out',
  };

  const keyframes = `
    @keyframes flyInFromLeft {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
  `;

  const squareStyle = {
    border: '1px solid rgba(255, 255, 255, 0.15)',
    backgroundColor: 'transparent',
    width: '100%',
    opacity: 1,
    borderRadius: '16px',
    boxShadow: 'none',
  };

  return (
    <>
      <div ref={containerRef} style={isTechnicalVisible ? { ...absatzStyle } : { ...absatzStyle, opacity: 0 }}>
        <style>{isTechnicalVisible ? keyframes : ''}</style>
        <SectionHeader title="Technical Skills" />
        <div style={styles.rowContainer}>
          <div style={styles.colContainer}>
            <SectionText title={"Strong Problem-Oriented Thinking"} />
            <SectionText title={"Exceptional Time Management"} />
            <SectionText title={"Communication Skills"} />
          </div>
          <div style={{ ...styles.colContainer2, paddingTop: '40px' }}>
            <div style={squareStyle}>
              <div style={styles.rowContainer}>
                <div style={{ ...styles.colContainer2, justifyContent: 'center', alignItems: 'right', width: '60%' }}>
                  Technical Stack
                </div>
                <div style={{ ...styles.colContainer2, justifyContent: 'right', alignItems: 'right', width: '40%' }}>
                  <img src={tech} alt="Responsive Image" style={styles.pictureStyle} />
                </div>
              </div>
              <div
                style={{ ...styles.rowContainer, justifyContent: 'center', alignItems: 'right', width: '100%', paddingTop: '30px' }}
                ref={contentRef} // Ref to measure the content's height
              >
                <TabbedSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const regTextStyle = {
  textAlign: 'left',
  fontFamily: 'Arial, sans-serif', // Change the font here
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px', // Adjust the font size
  letterSpacing: '0.1px',
  color: '#d3d3d3',
  marginLeft: '40px',
  paddingTop: '20px',
};

  

const styles = {
    picturePos:{
        width: '40%',
        justifyContent: 'right', // Center horizontally
        alignItems: 'right', // Center vertically
        textAlign: 'right',
    },
    pictureStyle:{
        width: '100%',
        justifyContent: 'right', // Center horizontally
        alignItems: 'right', // Center vertically
        textAlign: 'center',
       // marginRight: '-150%',
      
    },
    colContainer: {
        display: 'block',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        textAlign: 'left',
        marginLeft: '5%', // Align the container to the left bound
        paddingTop:'5px',
      },
    colContainer2: {
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        textAlign: 'center',
        width: '60%',
        paddingTop:'5px',
        marginLeft: '5%', // Align the container to the left bound
        marginTop: '20px',
      },
      regTextStyle2: {
        ...regTextStyle,
        fontSize: '18px',
        color: '#bababa',
      },
    rowContainer:{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        width: '90%', // Set the width to 50% of the page width
        marginLeft: '0', // Align the container to the left bound
      },
    regTextStyle2:{
        textAlign: 'left',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        letterSpacing: '0.1px',
        color: '#bababa', // Replace with the desired text color
        marginLeft: '40px',
      },
      regTextStyle3:{
        textAlign: 'left',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        letterSpacing: '0.1px',
        color: '#bababa', // Replace with the desired text color
        marginRight:'20px'
      },
    responsiveIconStyles: {
        width: '65px', // Set the maximum width to 10% (adjust as needed)
        height: 'auto', // Maintain the aspect ratio
        display: 'block',
        borderRadius: '5%',
        overflow: 'hidden',
      },
    imageContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        width: '80%', // Set the width to 50% of the page width
        marginLeft: '0', // Align the container to the left bound
      },
      imageContainer2 : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        textAlign: 'center',
        flexDirection: 'column',
        width: '30%', // Set the width to 50% of the page width
        marginLeft: '0', // Align the container to the left bound
      },
      
  };

  export default Technical