import React from 'react';
import loader from '../assets/loading_brush.gif';

const PaintbrushSpinner: React.FC = () => {
  return (
    <div className="spinner">
      <img src={loader} alt="loading..." />
    </div>
  );
};

export default PaintbrushSpinner;
