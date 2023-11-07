import React, { useState, useEffect, useRef } from 'react';

const VideoPlayer2 = ({ videoSources, onPlay, onSwitch }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    onSwitch(); // Call the onSwitch function when switching videos
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoSources.length - 1 : prevIndex - 1
    );
    onSwitch(); // Call the onSwitch function when switching videos
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    // Set the current video source
    videoElement.src = videoSources[currentVideoIndex];

    // Load and play the video
    videoElement.load();
    videoElement.play();
    videoElement.muted = true; 
    onPlay(); // Call the onPlay function when playing the video
  }, [currentVideoIndex, videoSources, onPlay, onSwitch]);

  const buttonContainerStyle = {
    position: 'relative',
    width: '80vw', // Set the width to match the video width
    height: '80vh', // Set the height to match the video height
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '24px', // Adjust button font size
    background: 'transparent', // Make the button background transparent
    border: 'none', // Remove button border
    cursor: 'pointer',
  };

  return (
    <div style={buttonContainerStyle}>
      <button
        onClick={handlePreviousVideo}
        style={{ ...buttonStyle, left: 0 }}
      >
        &#9664;{/* Left arrow symbol */}
      </button>
      <video
        ref={videoRef}
        style={{
          width: '100%', // Set video width to 100% of the container width
          height: '100%', // Set video height to 100% of the container height
          marginTop: '30px',
        }}
        controls
        autoPlay
      >
        <source src={videoSources[currentVideoIndex]} />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={handleNextVideo}
        style={{ ...buttonStyle, right: 0 }}
      >
        &#9654;{/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default VideoPlayer2;
