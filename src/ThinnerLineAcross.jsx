import React, { useState, useEffect } from 'react';

const ThinnerLineAcrossPage = () => {
    const [showLine, setShowLine] = useState(false);

    useEffect(() => {
        // Set a timeout to gradually show the name after a delay (e.g., 1 second)
        const timeout = setTimeout(() => {
            setShowLine(true);
        }, 1000); // Adjust the delay as needed
        return () => clearTimeout(timeout);
    }, []);

    const lineStyle = {
        width: '90%',
        height: '0.5px', // Adjust the height as needed
        backgroundColor: '#bababa',
        marginLeft: '0', // Align the line to the left
        opacity: showLine ? 1 : 0, // Initially hidden (opacity: 0) and gradually shown (opacity: 1)
        transition: 'opacity 1s ease-in-out', // Add a smooth transition effect
        marginLeft: '0px',
      };
  return (
    <div style={lineStyle}></div>
  );
};

export default ThinnerLineAcrossPage;