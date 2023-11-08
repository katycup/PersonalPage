import React, { useState, useEffect } from 'react';


const LineAcrossPage = () => {

    const [showLine, setShowLine] = useState(false);

    useEffect(() => {
        // Set a timeout to gradually show the name after a delay (e.g., 1 second)
        const timeout = setTimeout(() => {
            setShowLine(true);
        }, 1000); // Adjust the delay as needed
        return () => clearTimeout(timeout);
    }, []);

  const lineStyle = {
    width: '95%',
    height: '2px', // Adjust the height as needed
    backgroundColor: '#d3d3d3',
    margin: '0 auto', // Center the line horizontally
    opacity: showLine ? 1 : 0, // Initially hidden (opacity: 0) and gradually shown (opacity: 1)
    transition: 'opacity 1s ease-in-out', // Add a smooth transition effect
  };

  return (
    <div style={lineStyle}></div>
  );
};

export default LineAcrossPage;