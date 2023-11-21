import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from '../Headers/SectionHeader';
import pin from '../../assets/Pin.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import linkedin from '../../assets/linkedin.png'
const ContactMobile = () => {
    return (
        <>
        <SectionHeader title="Get in touch " />
        <div style={styles.rowContainer}>
            <div style={styles.colContainer}>
                <div style={squareStyle}>
                    <img src={pin} alt="Responsive Image"  style={styles.pictureStyle}/>
                    <span> Winnipeg, Canada</span>
                </div>
                <div style={squareStyle}>
                    <img src={mail} alt="Responsive Image"  style={{...styles.pictureStyle, width:"10%"}}/>
                    <span> katharina.ditler@gmx.de</span>
                </div>
                <div style={squareStyle}>
                    <img src={phone} alt="Responsive Image"  style={{...styles.pictureStyle, width:"10%"}}/>
                    <span>(204) 293 5844</span>
                </div>
                <div style={squareStyle}>
                <img src={linkedin} alt="Responsive Image" style={{...styles.pictureStyle, width:"7%"}} />
                <a href="https://www.linkedin.com/in/katharina-ditler/" style={{    color: 'white', textDecoration: 'underline', marginLeft: '10px'}} >
                    Katharina Ditler
                </a>
                </div>
            </div>
        </div>
        </>
    );
    
};


const squareStyle = {
    border: '1px solid rgba(255, 255, 255, 0.15)',
    backgroundColor: 'transparent',
    width: '100%',
    opacity: 1,
    borderRadius: '16px',
    boxShadow: 'none',
    padding: '10px',
    
   
  };

const styles ={
    rowContainer:{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        width: '90%', // Set the width to 50% of the page width
        marginLeft: '0', // Align the container to the left bound
        paddingBottom:'30px',
        paddingTop: '10px'
      },
      colContainer: {
        display: 'block',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        textAlign: 'left',
        marginLeft: '5%', // Align the container to the left bound
        paddingTop:'20px',
        width: '90%',
      },
      pictureStyle:{
        width: '3%',
        textAlign: 'center',
       marginRight: '2%',
      
    },
};

export default ContactMobile;