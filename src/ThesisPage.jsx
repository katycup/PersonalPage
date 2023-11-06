import React from 'react';
import ImageSlideshow from './components/Headers/ImageSlideshow';
import plux from './assets/master/plux3.jpeg';
import wheel from './assets/master/steeringwheel.jpg';
import car from './assets/master/testVwehicle.jpeg';
import trunk from './assets/master/trunk.jpg';
import tubs from './assets/tubs.png';
import plri from './assets/plri.png';


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
        <div style={imageContainer}>
          <img src={tubs} alt="Responsive Image" style={responsiveImage2} />
          <img src={plri} alt="Responsive Image" style={responsiveImage2}  />
            
        </div>
        <div className="chemsafe-container">
            <h1 className="chemsafe-text">Validation of biomedical signal recordings</h1>
        </div>

        <div className="sphere-container">
            <ImageSlideshow images={images} />
        </div>
       

        <div className="chemsafe-container">
            <h1 className="chemsafe-text2">Here is an example how my website Chemsafe looks like</h1>
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
  maxWidth: '20%', // Make the image responsive by limiting its maximum width
  height:'auto',
  
  marginLeft: '80px',
  display: 'block', // Remove any extra spacing around the image
  overflow: 'hidden', // Hide the overflowing parts of the image
};

export default ThesisPage;