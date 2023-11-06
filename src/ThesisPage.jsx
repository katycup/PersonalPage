import React from 'react';
import ImageSlideshow from './components/Headers/ImageSlideshow';
import plux from './assets/master/plux3.jpeg';
import wheel from './assets/master/steeringwheel.jpg';
import car from './assets/master/testVwehicle.jpeg';
import trunk from './assets/master/trunk.jpg';
import SectionHeader from './components/Headers/SectionHeader';
import TopSection from './components/Thesis/TopSection';
import MasterSteps from './components/Thesis/MasterSteps';
const ThesisPage= () => {

    const images = [
        plux,
        car,
        wheel,
        trunk,
        // Add more image URLs as needed
      ];

  return (
    <>
      <div style={styles.pageStyle}>
      <div style={styles.rowContainer}>
          <div style={{...styles.colContainer, marginBottom: '20px'}}>
              <TopSection/> 
          </div>
      </div>
      <ImageSlideshow images={images} />
      <div style={styles.rowContainer}>
          <div style={{...styles.colContainer, marginBottom: '5px'}}>
              <SectionHeader title={"Steps to solve the Problem"}/> 
          </div>
      </div>
      <div style={styles.rowContainer}>
          <div style={{...styles.colContainer, marginBottom: '20px',paddingTop: '0px'}}>
              <MasterSteps/> 
          </div>
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
};
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
  maxWidth: '20%', // Make the image responsive by limiting its maximum width
  height:'auto',
  
  marginLeft: '80px',
  display: 'block', // Remove any extra spacing around the image
  overflow: 'hidden', // Hide the overflowing parts of the image
};

export default ThesisPage;