import React from 'react';



export default function VideoPlayer({ videoSrc }) {
  return (
    <div style={{ border: '1px solid black', padding: '1px' }}>
      <video width="100%" height="auto" controls>
        <source src={videoSrc} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
