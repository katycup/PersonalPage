import React, { useState } from 'react';
import VideoPlayer2 from './VideoPlayer2'; // Adjust the import path
import video3 from '../../assets/hobbies/schraube.mp4';
import video4 from '../../assets/hobbies/flieger.mp4';
import video5 from '../../assets/hobbies/barren.mp4';
import video6 from '../../assets/hobbies/boden.mp4';
import TopSection from './TopSection';
import {
  GymnasticsSub
} from '../../constants/PersonalConstants';

const Gymnastics = () => {
  const videoSources = [video3, video4, video5, video6];
  const customPlayLogic = () => {
    
    // Implement custom play logic here
    console.log('Video played.');

    // For example, you can track video play events or perform actions
    // such as updating a play counter, sending analytics data, or displaying a message.
    // Example:
    // updatePlayCount();
    // sendAnalyticsData('Video Played');
    // displayMessage('Enjoy the video!');
  };

  const customSwitchLogic = () => {
    // Implement custom switch logic here
    console.log('Video switched.');

    // For example, you can track video switch events or perform actions
    // such as updating a switch counter, sending analytics data, or displaying a message.
    // Example:
    // updateSwitchCount();
    // sendAnalyticsData('Video Switched');
    // displayMessage('Switching to the next video.');
  };

  return (
    <>
      <TopSection title={"Gymnastics"} subtitle={GymnasticsSub} />
      <VideoPlayer2
        videoSources={videoSources}
        onPlay={customPlayLogic}
        onSwitch={customSwitchLogic}
      />
    </>
  );
};

export default Gymnastics;
