import React, { useState, useEffect, useRef } from 'react';
import ImageSlideshow from './components/Headers/ImageSlideshow';
import interface1 from './assets/racing/interface.png'
import team from './assets/racing/Team.jpg'
import car from './assets/racing/car.png'
import vector1 from './assets/racing/vector.png'
import TopSection from './components/Racing/TopSection';
import SectionHeader from './components/Headers/SectionHeader';
import Respo from './components/Chemsafe/Respo';
import { respo1, respo2, respo3 } from './constants/Racing';
//import viteLogo from '/vite.svg'
//import './App.css'


const RacingPage = () => {
  const respoContainerRef = useRef(null);
  const [respoVisible, setRespoVisible] = useState(false);

  const flyInStyle ={
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
  
    const images = [
        interface1,
        car,
        team,
        vector1,
        // Add more image URLs as needed
      ];
      useEffect(() => {
        const respoObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setRespoVisible(true);
            }
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
          }
        );
    
        
    
        if (respoContainerRef.current) {
          respoObserver.observe(respoContainerRef.current);
        }
    
      
      }, []);
      
  return (
    <>
    <div style={styles.pageStyle}>  
        <div style={styles.rowContainer}>
            <div style={{...styles.colContainer,marginBottom: '30px'}}>
                <TopSection/> 
            </div>
        </div>
        
        <ImageSlideshow images={images} />
        <div ref={respoContainerRef} style={respoVisible ? { ...flyInStyle } : { ...flyInStyle, opacity: 0 }}>
        <style>{respoVisible ? keyframes : ''}</style>

        <div style={styles.rowContainer}>
        <div style={{...styles.colContainer, marginLeft:'2.5%',}}>
            <SectionHeader title="Responsibilities" />
        </div>
      </div> 
      <div style={styles.rowContainer}>
        <div style={{...styles.colContainer, marginLeft:'5%',}}>
            <Respo title={respo1}  />
            <Respo title={respo3}  />
            <Respo title={respo2}  />
            <br />
            <br />
        </div>
      </div> 
      </div>
       </div>
    </>
      
  );

};

const styles ={
  pageStyle: {
      backgroundColor: 'black', // Set the background color to black
      color: '#d3d3d3', // Set the text color to white
      minHeight: '100vh', // Make sure the page covers the entire viewport height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowContainer:{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  flexDirection: 'row',
  width: '90%', // Set the width to 50% of the page width
  marginLeft: '0', // Align the container to the left bound
},
colContainer: {
  display: 'block',
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  textAlign: 'left',
  marginLeft: '5%', // Align the container to the left bound
  paddingTop:'3%',
  width: '100%',

},
regTextStyle:{
  textAlign: 'left',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  color: '#bababa',
  letterSpacing: '0.1px',
  //color: '#d3d3d3', // Replace with the desired text color
  marginLeft: '40px',
  paddingTop: '20px', // Add top padding of 20px
  
},
ImgaeContainer:{
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  width:'50%',
  height:'40%'
}
}

const textstyle = {
    color: "black",
    padding: "10px",
    fontFamily: "Arial"
  };

export default RacingPage;
