
import React from 'react';
import sphere from './assets/sphere.jpg'
import exp from './assets/explsion.png'
import wipano from './assets/wipano.jpg'
import data from './assets/ExplosionPress.png';
import ptb from './assets/ptb.png';

//import viteLogo from '/vite.svg'
import './App.css'

const DataPage = () => {

  return (
    <>
        <div style={imageContainer}>
          <img src={ptb} alt="Responsive Image" style={responsiveImage2} />
          <img src={wipano} alt="Responsive Image" style={responsiveImage}  />
            
        </div>
        <div style={imageContainer}>
            <h1 className="chemsafe-text">Data Analysis</h1>
        </div>
        
        <div style={imageContainer}>
            <a style={textStyle}> This project was part of the WIPANO project, where the goal is to define a standard for the determination of safety characteristics for hybrid mixtures. 
            In this project I developed a data analysis algorithm for a number of datasets that measured the explosion in a 20-l sphere. </a>
            
        </div>
        <div style={imageContainer}>
            <a style={textStyle}> I used Python and the libraries: numpy, pandas etc.. for processing all files, smoothing curves to remove outliners i the data 
             utiliting FFT-filer to flter ou noise frequencies and Savitzky-Golay Filter to smoothen out the result of that. </a>
            
        </div>
        <div style={imageContainer}>
            <img src={sphere} alt="Responsive Image" style={responsiveImage} />
            <img src={data} alt="Responsive Image" style={responsiveImage} />
        </div>
        <div style={imageContainer}>
            <a style={textStyle}> This is important  </a>
            
        </div>
        
    </>
      
  );
}

const textStyle={
    marginLeft: '30px',
    whiteSpace: 'nowrap',
    paddingTop: "10px",
    fontFamily: "Arial",
    fontSize: '26px', // Add text size
    whiteSpace: 'pre-line',
  }
const imageContainer = {
    marginLeft: '10px',
    display: "flex", /* Use flexbox for centering */
    justifyContent: "center", /* Horizontally center the content */
    alignItems: "center", /* Vertically center the content */
    maxWidth: "100%",
    overflow: "hidden",
    paddingTop: "20px", // Add padding to the top
  };
  

const responsiveImage = {
    maxWidth: '40%', // Make the image responsive by limiting its maximum width
    height:'auto',
    marginLeft: '80px',
    display: 'block', // Remove any extra spacing around the image
    overflow: 'hidden', // Hide the overflowing parts of the image
    padding:'5px',
};

const responsiveImage2 = {
  maxWidth: '12%', // Make the image responsive by limiting its maximum width
  height:'auto',
  
  marginLeft: '80px',
  display: 'block', // Remove any extra spacing around the image
  overflow: 'hidden', // Hide the overflowing parts of the image
};

export default DataPage;