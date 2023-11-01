import React from 'react';
import pic3 from './assets/chemsafe.jpg'
//import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer';
import video from './assets/chemsafeOverview.mp4';
import TopSection from './components/Chemsafe/TopSection';

const ChemsafePage = () => {
  return (
    <>
        <TopSection /> 
        <div className="chemsafe-container">
            <img src={pic3} alt="Responsive Image" className="chemsafe-image" />
        </div>

        <div className="chemsafe-container">
            <h1 className="chemsafe-text">Database for Safety Characteristics in Explosion Protection</h1>
        </div>
        
        <ul style={listStyle}>
            <li style={listItemStyle}>
                I took over the complete project and was responsible for the design and communication wth non-technical stakeholders
            </li>
            <li>
                I optimized the Database CHEMSAFE
            </li>
            <ul style={listStyle}>
                <li style={listItemStyle}>
                    dramatically improved the schema
                </li>
                <li style={listItemStyle}>
                    eliminated data duplication and redundancies
                </li>
            </ul>
                <li style={listItemStyle}>
                    Developed and designed both the backend and frontend of the current online version of CHEMSAFE.
                </li>
                <ul style={listStyle}>
                <li style={listItemStyle}>
                    I went online with the new version of Chemsafe in June 2022,since then the user adoption increased by over 400%.
                </li>
                </ul>
                <li style={listItemStyle}>
                    Here is a short video how Chemsafe works and te search opions that are available 
                </li>
            </ul>
        
        <div className="chemsafe-container">

            <VideoPlayer videoSrc={video} />
        </div>
    
    </>
      
  );
}

const listStyle = {
    width: '80%',
    marginLeft: '20px',
    whiteSpace: 'nowrap',
    paddingTop: '10px',
    fontFamily: 'Arial',
    fontSize: '24px',
    textAlign: 'left',  // Set text alignment to left
  };

  const listItemStyle = {
    //listStyleType: 'none', // Remove default list item markers
    //listStyleImage: 'url("./assets/calender.png")', 
    //paddingLeft: '20px', // Adjust the padding to control the space between the plus symbol and text
    whiteSpace: 'pre-line',
    position: 'relative',
  };

export default ChemsafePage;