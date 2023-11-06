import React, { useState, useEffect } from 'react';
import sphere from './assets/sphere.jpg'
import exp from './assets/explsion.png'

//import viteLogo from '/vite.svg'
import TopSection from './components/Automation/TopSection';
import Starting from './components/Automation/Starting';
import './App.css'
import { Story, Achiv1, Achiv2, Achiv3, sphere1 } from './constants/Automation';
import Respo from './components/Chemsafe/Respo';
import SectionHeader from './components/Headers/SectionHeader';
//import Flames from './components/Automation/Flames';

const Sphere = () => {
    //const [showFlames, setShowFlames] = useState(true);

    /* useEffect(() => {
      const timeout = setTimeout(() => {
        setShowFlames(false);
      }, 3000); // Hide flames after 3 seconds
  
      return () => {
        clearTimeout(timeout);
      };
    }, []); */

  return (
    <>
     {/* {showFlames && <Flames />} */}
    <div style={styles.pageStyle}>  
        <div style={styles.rowContainer}>
            <div style={styles.colContainer}>
                <TopSection/> 
            </div>
        </div>
        <div style={imageContainer}>
            <img src={exp} alt="Responsive Image" style={responsiveImage} />
        </div>
        <div style={{...imageContainer, textAlign: 'center'}}>
            <Starting title={Story}/>
        </div>
        <div style={styles.rowContainer}>
            <div style={styles.colContainer}>
                <SectionHeader title={"Achievements"} />
            </div>
        </div>
        <div style={styles.rowContainer}>
            <div style={styles.colContainer}>
                <Respo title={Achiv1} />
                <Respo title={Achiv2} />
                <Respo title={Achiv3} />
            </div>
        </div>
        <div style={styles.rowContainer}>
            <div style={styles.colContainer}>
                <SectionHeader title={"Experimental Setup"} />
            </div>
        </div>
        <div style={imageContainer}>
            <img src={sphere} alt="Responsive Image" style={responsiveImage} />
        </div>
        <div style={{...imageContainer, textAlign: 'center', marginBottom:'30px'}}>
            <Starting title={sphere1}/>
        </div>
        
    </div>
    </>
      
  );
}

const styles ={
    pageStyle: {
        backgroundColor: 'black', // Set the background color to black
        color: '#d3d3d3', // Set the text color to white
        minHeight: '100vh', // Make sure the page covers the entire viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      rowContainer:{
        display: 'flex',
        justifyContent: 'left',
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
    display: 'block', // Remove any extra spacing around the image
    overflow: 'hidden', // Hide the overflowing parts of the image
    justifyContent: "center", /* Horizontally center the content */
    alignItems: "center", /* Vertically center the content */
};

export default Sphere;