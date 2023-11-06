import React, { useState, useEffect } from 'react';

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const containerStyle = {
    width: '50%', // Specify your desired fixed width for the container
    height: `${imageDimensions.height}px`, // Set the container height based on the image's height
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto', // Allow the image to scale its height according to the aspect ratio
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change picture every 4 seconds

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [currentIndex, images]);

  useEffect(() => {
    const image = new Image();
    image.src = images[currentIndex];
    image.onload = () => {
      setImageDimensions({
        width: image.width,
        height: image.height,
      });
    };
  }, [currentIndex, images]);

  return (
    <div className="slideshow" style={containerStyle}>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        style={imageStyle}
      />
    </div>
  );
};

export default ImageSlideshow;
