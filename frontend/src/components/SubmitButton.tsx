import React from 'react';
import '../styles/buttons.css';

const SubmitButton: React.FC<{ onSubmit: () => Promise<void> }> = ({ onSubmit }) => {
    return <button className="styledButton" id="submitButton" onClick={onSubmit}>Submit</button>;
};
  
export default SubmitButton;