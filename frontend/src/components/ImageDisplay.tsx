import React from 'react';

const ImageDisplay: React.FC<{ base64image: string }> = ({ base64image }) => {
    return <img src={`data:image/png;base64,${base64image}`} alt="generative AI impressionist result" />;
};
  
export default ImageDisplay;