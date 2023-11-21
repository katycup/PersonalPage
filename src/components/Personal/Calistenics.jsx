import React, { useState, useEffect, useRef } from 'react';
import Line from '../../LineAcrossPage';
import video1 from '../../assets/hobbies/360.mp4';
import video2 from '../../assets/hobbies/fun.mp4';
import video7 from '../../assets/hobbies/calicomp.mp4';
import VideoPlayer2 from './VideoPlayer2';
import TopSection from './TopSection';
import {
  CaliSub
} from '../../constants/PersonalConstants';

const Calisthenics = () => {
  const videoSources = [video1, video2, video7];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use a timeout to delay the appearance animation
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay in milliseconds as needed

    // Clear the timeout on unmount to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const customPlayLogic = () => {
    // Implement custom play logic here
    console.log('Video played.');

    // You can track video play events, perform actions, send analytics data, etc.
  };

  const customSwitchLogic = () => {
    // Implement custom switch logic here
    console.log('Video switched.');

    // You can track video switch events, perform actions, send analytics data, etc.
  };

  const flyInStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'opacity 1s, transform 1s',
  };

  return (
    <>
      
      <TopSection title={"Calisthenics"} subtitle={CaliSub} />
      <VideoPlayer2 videoSources={videoSources} onPlay={customPlayLogic} onSwitch={customSwitchLogic} />
    </>
  );
};

const styles = {
  regTextStyle: {
    textAlign: 'left',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '32px',
    letterSpacing: '0.1px',
    color: '#d3d3d3', // Replace with the desired text color
    marginLeft: '0%',
    paddingTop: '20px', // Add top padding of 20px
  },
};

export default Calisthenics;
