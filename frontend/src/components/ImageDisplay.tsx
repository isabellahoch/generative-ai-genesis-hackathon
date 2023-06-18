import React from 'react';
import '../styles/image.css';

const ImageDisplay: React.FC<{ base64image: string }> = ({ base64image }) => {
    return (<div id="resultImgContainer">
        <img id="resultImg" src={`data:image/png;base64,${base64image}`} alt="generative AI impressionist result" />;
    </div>)
    };
  
export default ImageDisplay;