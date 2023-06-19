import React from 'react';
import '../styles/buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons';

const RestartButton: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
    return <button className="styledButton" id="restartButton" onClick={onRestart}>&nbsp;Generate a new painting&nbsp; &nbsp;<FontAwesomeIcon icon={faArrowsSpin} /></button>;
};
  
export default RestartButton;