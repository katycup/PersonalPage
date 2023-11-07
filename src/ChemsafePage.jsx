import React, { useState, useEffect, useRef } from 'react';
import pic3 from './assets/chemsafe.jpg'
//import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer';
import video from './assets/chemsafeOverview.mp4';
import TopSection from './components/Chemsafe/TopSection';
import SectionHeader from './components/Headers/SectionHeader';
import ClientsSection from './components/Chemsafe/ClientsSection';
import Respo from './components/Chemsafe/Respo';
import {
    respo1,
    respo2,
    respo3
  } from './constants/Chemsafe';


const ChemsafePage = () => {
  const respoContainerRef = useRef(null);
  const [respoVisible, setRespoVisible] = useState(false);

  const chemContainerRef = useRef(null);
  const [chemVisible, setChemVisible] = useState(false);

  const flyInStyle ={
    animation: 'flyInFromLeft 1s ease-in-out',
  };

  const flyInStyle2 ={
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
    const chemObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChemVisible(true);
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
    if (chemContainerRef.current) {
      chemObserver.observe(chemContainerRef.current);
    }

  
  }, []);
  return (
    <>
    <div style={styles.pageStyle}>   
    <div style={styles.rowContainer}>
        <div style={styles.colContainer}>
            <TopSection />
        </div>
      </div>  
      <div style={styles.rowContainer}>
        <div style={{...styles.colContainer, marginLeft:'2.5%',}}>
        <SectionHeader title="Users" />
        </div>
      </div>  
      <div style={styles.rowContainer}>
        <div style={styles.colContainer}>
            <ClientsSection />
        </div>
      </div>

      <div ref={respoContainerRef} style={respoVisible ? { ...flyInStyle } : { ...flyInStyle, opacity: 0 }}>
      <style>{respoVisible ? keyframes : ''}</style>
        <div style={styles.rowContainer}>
          <div style={{...styles.colContainer, marginLeft:'2.5%',}}>
              <SectionHeader title="Responsibilities" />
          </div>
        </div> 
        <div style={styles.rowContainer}>
          <div style={{...styles.colContainer, marginLeft:'2.5%',}}>
              <Respo title={respo1}  />
              <Respo title={respo2}  />
              <Respo title={respo3}  />
          </div>
        </div> 
      </div> 

      <div ref={chemContainerRef} style={chemVisible ? { ...flyInStyle2 } : { ...flyInStyle2, opacity: 0 }}>
      <style>{chemVisible ? keyframes : ''}</style>
      <div style={styles.rowContainer}>
        <div style={{...styles.colContainer, marginLeft:'2.5%',}}>
            <SectionHeader title="Chemsafe" />
        </div>
      </div> 
      <div style={styles.rowContainer}>
        <div style={{...styles.colContainer, marginLeft:'2.5%',marginBottom:'20px'}}>
            <span style={styles.regTextStyle}>
                Here is a short video how Chemsafe works and te search opions that are available 
            </span>
            
        </div>
      </div> 
    
        <div style={{width: '70%',marginBottom : '20px', marginLeft: '10%'}}>

            <VideoPlayer videoSrc={video} />
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