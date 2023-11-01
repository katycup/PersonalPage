import React from 'react';

const WebsitePreview = ({ url }) => {
  return (
    <div className="website-preview">
      <iframe
        title="Website Preview"
        src={url}
        width="100%"
        height="500px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default WebsitePreview;