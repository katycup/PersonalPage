import React from 'react';
import ImageSlideshow from './ImageSlideshow';
import interface1 from './assets/racing/interface.png'
import team from './assets/racing/Team.jpg'
import car from './assets/racing/car.png'
import vector1 from './assets/racing/vector.png'
import wob from './assets/Logo-schwarz-transparent.jpg'

//import viteLogo from '/vite.svg'
//import './App.css'


const RacingPage = () => {
    const images = [
        interface1,
        car,
        team,
        vector1,
        // Add more image URLs as needed
      ];

  return (
    <>

        <div className="sphere-container">
            <img src={wob} alt="Responsive Image" className="sphere-image" />
        </div>
        <h1 style={textstyle}>Driver Interface Development and Design</h1>
        <div className="sphere-container">
            <ImageSlideshow images={images} />
        </div>
       
    </>
      
  );

};
const textstyle = {
    color: "black",
    padding: "10px",
    fontFamily: "Arial"
  };

export default RacingPage;
