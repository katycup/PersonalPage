import React, { useState } from 'react';

import pic from './assets/me.jpeg'

import symbol from './assets/calender.png'
import pin from './assets/Pin.png'
import books from './assets/Books.png'
import thesis from './assets/Thesis.png'
//import viteLogo from '/vite.svg'



const HomePage = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };


  const dropdownContentStyle = {
    display: dropdownVisible ? 'block' : 'none',
    position: 'realtive',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    padding: '10px',
  };
  

  return (
    <>
        
        <div style={imageContainer}>
            <h1 style={headStyle}>Katharina Ditler</h1>
            <img src={pic} alt="Responsive Image" style={responsiveImage} />
        
        </div>
        <div style={imageContainer}>
            <a style={textStyle}> Professional Experience </a>
        </div>
        <ul style={listStyle}>
            <li style={listItemStyle}>
                <span>
                <img
                src= {symbol}
                alt="Person 2"
                style={{ width: '20px', marginRight: '10px' }}
              />
                    </span> Feb 2019 - Jun 2023
            </li>
            <ul style={listStyle2}>
                <li style={listItemStyle}>
                    <span>
                        <img
                        src= {pin}
                        alt="Person 2"
                        style={{ width: '10px', marginRight: '10px' }}
                        />
                    </span> Physikalisch-Technische Bundesanstalt, Braunschweig Germany 
                </li>
                <li style={listItemStyle}>
                    <span>
                    <img
                    src= {symbol}
                    alt="Person 2"
                    style={{ width: '20px', marginRight: '10px' }}
                />
                        </span> Feb 2019 - Aug 2020: <a href="/sphere"> Automation Engineer </a> and <a href="/data">Data Analyst </a>
                </li>
                <li style={listItemStyle}>
               
                    <span>
                    <img
                    src= {symbol}
                    alt="Person 2"
                    style={{ width: '20px', marginRight: '10px' }}
                />
                        </span> Sep 2020 - Jun 2023: Full Stack Developer for  <a href="/chemsafe"> Chemsafe </a>
                
                </li>
                
            </ul>
        </ul>
        <div style={imageContainer}>
            <a style={textStyle}> Educational Background </a>
        </div>
        <ul style={listStyle}>
            <li style={listItemStyle}>
                <span>
                <img
                src= {symbol}
                alt="Person 2"
                style={{ width: '20px', marginRight: '10px' }}
              />
                    </span> Oct 2020 - Sep 2023: Master of Science 
            </li>
            <ul style={listStyle2} >
                <li style={listItemStyle}>
                    <span>
                        <img
                        src= {pin}
                        alt="Person 2"
                        style={{ width: '10px', marginRight: '10px' }}
                        />
                    </span> Technical University Braunschweig 
                </li>

                <li style={listItemStyle} className="hoverable" onClick={toggleDropdown}>
                    <span>
                    <img src={books} alt="Person 2" style={{ width: '17px', marginRight: '5px' }} />
                    </span>
                    Information Technologies
                    <div style={dropdownContentStyle}>
                    <li style={listItemStyle2}>
                        My master's program covered Communications Engineering, Embedded Systems Platforms, and Software Engineering. I focused my studies on Artificial Intelligence and Medical Technologies.
                    </li>
                    </div>
                </li>

                <li style={listItemStyle}>
                    <span>
                        <img
                        src= {thesis}
                        alt="Person 2"
                        style={{ width: '20px', marginRight: '0px' }}
                        />
                    </span> Master's Thesis: <a href="/master"> Designed a Classification Algorithm </a> 
                </li>
               
            </ul>
            <li style={listItemStyle}>
                <span>
                <img
                src= {symbol}
                alt="Person 2"
                style={{ width: '20px', marginRight: '10px' }}
              />
                    </span> Sep 2016 - Sep 2020: Bachelor of Engineering 
            </li>
            <ul style={listStyle2}>
                <li style={listItemStyle}>
                    <span>
                        <img
                        src= {pin}
                        alt="Person 2"
                        style={{ width: '10px', marginRight: '10px' }}
                        />
                    </span> University of Applied Sciences Ostfalia, Wolfenbüttel
                </li>
                <li style={listItemStyle}>
                    <span>
                        <img
                        src= {books}
                        alt="Person 2"
                        style={{ width: '17px', marginRight: '5px' }}
                        />
                    </span> Electrical Engineering and Information Technologies
                </li>
                <li style={listItemStyle2}>
                    {/* Room for details maybe */}
            
                </li>
                <li style={listItemStyle}>
                    <span>
                        <img
                        src= {thesis}
                        alt="Person 2"
                        style={{ width: '20px', marginRight: '0px' }}
                        />
                    </span> Bachelor's Thesis: Determination of key parameters in Explosion Protection
                </li>
                
            </ul>
            <li style={listItemStyle}>
                <span>
                <img
                src= {symbol}
                alt="Person 2"
                style={{ width: '20px', marginRight: '10px' }}
              />
                    </span> Sep 2018 - Dec 2019: Exchange Term
            </li>
            <ul style={listStyle2}>
                <li style={listItemStyle}>
                    <span>
                        <img
                        src= {pin}
                        alt="Person 2"
                        style={{ width: '10px', marginRight: '10px' }}
                        />
                    </span> University of Manitoba
                </li>
                <li style={listItemStyle}>
                    {/* <span>
                        <img
                        src= {books}
                        alt="Person 2"
                        style={{ width: '17px', marginRight: '5px' }}
                        />
                    </span> Electrical Engineering and Information Technologies */}
                </li>
                <li style={listItemStyle2}>
                    {/* Room for details maybe */}
            
                </li>
            </ul>
            </ul>
    </>
      
  );
}
const listStyle = {
    width: '80%',
    marginLeft: '30px',
    whiteSpace: 'nowrap',
    paddingTop: '20px',
    fontFamily: 'Arial',
    fontSize: '16px',
    textAlign: 'left',  // Set text alignment to left
  };
  const listStyle2 = {
    //marginLeft: '30px',
    whiteSpace: 'nowrap',
    //paddingTop: '30px',
    fontFamily: 'Arial',
    fontSize: '16px',
    textAlign: 'left',  // Set text alignment to left
  };
  const listItemStyle = {
    listStyleType: 'none', // Remove default list item markers
    //listStyleImage: 'url("./assets/calender.png")', 
    //paddingLeft: '20px', // Adjust the padding to control the space between the plus symbol and text
    whiteSpace: 'pre-line',
    position: 'relative',
  };
  const listItemStyle2 = {
    listStyleType: 'none', // Remove default list item markers
    //listStyleImage: 'url("./assets/calender.png")', 
    //paddingLeft: '20px', // Adjust the padding to control the space between the plus symbol and text
    whiteSpace: 'pre-line',
    marginLeft: '25px',
  };

  

const imageContainer = {
    display: "flex", /* Use flexbox for centering */
    justifyContent: "left", /* Horizontally center the content */
    alignItems: "center", /* Vertically center the content */
    maxWidth: "100%",
    overflow: "hidden",
    paddingTop: "20px", // Add padding to the top
  };
  

  const responsiveImage = {
    maxWidth: '20%', // Make the image responsive by limiting its maximum width
    height:'auto',
    marginLeft: '80px',
    display: 'block', // Remove any extra spacing around the image

    borderRadius: '50%', // Apply a circular border radius
    overflow: 'hidden', // Hide the overflowing parts of the image
  };
 
  const headStyle = {
    //marginRight: '150px',
    marginLeft: '30px',
    whiteSpace: 'nowrap',
  };
  
  const textStyle={
    marginLeft: '30px',
    whiteSpace: 'nowrap',
    paddingTop: "30px",
    fontFamily: "Arial",
    fontSize: '26px', // Add text size
  }


export default HomePage;