import React from 'react';
import '../styles/spinner.css';

const ActionSpinner: React.FC = () => {
  return (
    <div className="spinner">
      <div className="spinner-dot1"></div>
      <div className="spinner-dot2"></div>
    </div>
  );
};

export default ActionSpinner;
