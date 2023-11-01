import React from 'react';

const FramerComponent = ({ skillLevel }) => {
  // Calculate the width of the inner box based on the skill level (out of 5)
  const innerBoxWidth = (skillLevel / 5) * 100;

  const containerStyle = {
    opacity: 1,
  };

  const outerBoxStyle = {
    backgroundColor: 'black',
    border: '1px solid #bababa', // Simplify border style
    borderRadius: '20px',
    height: '6px',
    width: '90%',
  };

  const innerBoxStyle = {
    backgroundColor: '#bababa',
    borderRadius: '20px',
    height: '100%', // Match the height of the outer box
    width: `${innerBoxWidth}%`,
  };

  const textStyle = {
    fontSize: '11px',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeight: 500,
    fontStyle: 'normal',
    color: 'white',
    letterSpacing: '0.1px',
    textAlign: 'center',
  };

  let skillDescription = 'Beginner';
  if (skillLevel >= 2 && skillLevel <= 3) {
    skillDescription = 'Intermediate';
  } else if (skillLevel == 4) {
    skillDescription = 'Proficient';
  }else if (skillLevel > 4) {
    skillDescription = 'Expert';
  }

  return (
    <div style={containerStyle}>
      <div style={outerBoxStyle}>
        <div style={innerBoxStyle}></div>
      </div>
      <div className="framer-dslfng rich-text-wrapper" style={textStyle}>
        <p>{skillDescription}</p>
      </div>
    </div>
  );
};

export default FramerComponent;
