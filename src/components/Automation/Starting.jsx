import React, { useState, useEffect, useRef } from 'react';
import Line from '../../ThinnerLineAcross';

const Starting =({title}) =>{

    return (
        <>
            <div style={{width:'70%', whiteSpace: 'pre-line', display: 'flex', marginBottom: '20px'}}>
                <span style={regTextStyle}>
                    { title }
                </span>
                
            </div>
            <div >
                <Line/>
            </div>
        </>
    )
};
const regTextStyle={
    textAlign: 'center',
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
  
export default Starting;