import React, { useState } from 'react';


import background from './assets/backgrounds/back.jpg';
import Header from './components/Personal/TopSection'
import Gymnastics from './components/Personal/Gymnastics';
import Calisthenics from './components/Personal/Calistenics';

const GymPage = () => {
  
  
  return (
    <>
    <div style={styles.pageStyle}>   
      <div>
        <span>    </span>
      </div>
      <div style={styles.rowContainer}>
        <div style={styles.colContainer}>
          <Gymnastics />
        </div>
      </div>
      <div style={styles.rowContainer}>
        <div style={styles.colContainer}>
        <Calisthenics />  
        </div>
      </div>
        
    </div>
     
        
    
    </>
      
  );
}

const styles = {
  pageStyle: {
    backgroundColor: 'black', // Set the background color to black
    color: '#d3d3d3', // Set the text color to white
    minHeight: '100vh', // Make sure the page covers the entire viewport height
    display: 'flex',
    flexDirection: 'column',
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
  },

};

const textstyle = {
  marginLeft: '20px',
  whiteSpace: 'nowrap',
  paddingTop: '10px',
  fontFamily: 'Arial',
  fontSize: '32px',
  textAlign: 'left',  // Set text alignment to left
  color: 'white',      // Set the text color to white
  whiteSpace: 'pre-line',
};

  const listItemStyle = {
    //listStyleType: 'none', // Remove default list item markers
    //listStyleImage: 'url("./assets/calender.png")', 
    //paddingLeft: '20px', // Adjust the padding to control the space between the plus symbol and text
    whiteSpace: 'pre-line',
    position: 'relative',
  };

export default GymPage;