import React from 'react';

const ImageDisplay: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
    return <img src={imageUrl} alt="generative AI impressionist result" />;
};
  
export default ImageDisplay;