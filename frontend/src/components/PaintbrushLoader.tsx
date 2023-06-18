import React from 'react';
import loader from '../assets/loading_brush.gif';
import '../styles/loader.css';

const PaintbrushLoader: React.FC = () => {
  return (
    <div id="paintbrushLoader">
      <img id="loadingGif" src={loader} alt="loading..." />
    </div>
  );
};

export default PaintbrushLoader;
