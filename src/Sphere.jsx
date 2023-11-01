
import React from 'react';
import sphere from './assets/sphere.jpg'
import exp from './assets/explsion.png'
import wipano from './assets/wipano.jpg'
//import viteLogo from '/vite.svg'
import './App.css'

const Sphere = () => {

  return (
    <>
        <div className="sphere-container">
            <img src={wipano} alt="Responsive Image" className="sphere-image" />
        </div>
        <div style={imageContainer}>
            <h1 className="chemsafe-text">Automation of the 20-l Sphere</h1>
        </div>
        <div style={imageContainer}>
            <a style={textStyle}> During my Bachelor's degree I joined the second-largest metrology institute in the world - “Physikalisch-Technische Bundesanstalt”. 
            While there, I successfully automated a complex experimental setup for dust and vapor explosions in a 20-l chamber, while adhering to rigorous safety standards. </a>
        </div>
        <div style={imageContainer}>
            <a style={textStyle}> This project was part of the WIPANO project, the goal is to define a standard for the determination of safety characteristics for hybrid mixtures. </a>
        </div>
        
        <div style={imageContainer}>
            <a style={textStyle}> I fully automated the experimental explosion process of dust, vapor, and hybrid mixture explosions in a 20l sphere
            using LabView. This Sphere is displayed below. To this day over 500 successful explosions and measurements were completed. </a>
        </div>
        <div style={imageContainer}>
            <img src={sphere} alt="Responsive Image" style={responsiveImage} />
        </div>

        <div style={imageContainer}>
            <a style={textStyle}> This exact experimental setup is used by four Grman companies among them the Physikalisch-Technische Bundesanstalt (PTB), as well as 
             laboratories from Australia, Belgium, Czech Republic, France, Poland and P.R. China. Among all companies and institutions, we had the only fully automated 
             experimental setup.
            {/* This paper summarizes the experimental procedure adopted and objectives of the first 
            round-robin phase involving three of the four original German companies, plus volunteering laboratories from Australia, Belgium, Czech Republic, 
            France, Poland and P.R. China. The results will have an impact on the new standard and may lead to robust data for later simulation purposes. */}</a>
        </div>
        <div style={imageContainer}>
            <img src={exp} alt="Responsive Image" style={responsiveImage} />
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
};

export default Sphere;