import React from 'react';
import '../styles/buttons.css';

const RestartButton: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
    return <button className="styledButton" id="restartButton" onClick={onRestart}>Restart</button>;
};
  
export default RestartButton;