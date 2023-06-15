import React from 'react';

const SubmitButton: React.FC<{ onSubmit: () => Promise<void> }> = ({ onSubmit }) => {
    return <button onClick={onSubmit}>Submit</button>;
};
  
export default SubmitButton;