import React, { useState, useEffect, useRef } from 'react';
import Line from '../../ThinnerLineAcross';

const Respo =({title}) =>{

    return (
        <>
            <div style={{width:'70%', whiteSpace: 'pre-line',marginLeft: '2.5%', display: 'flex', marginBottom: '20px'}}>
                <span style={regTextStyle}>
                    { title }
                </span>
                
            </div>
            <div  style={{marginLeft: '2.5%',}}>
                    <Line/>
            </div>
        </>
    )
};
const regTextStyle={
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
  }
  
export default Respo