import React from 'react';
import '../styles/input.css';

const TextInput: React.FC<{ onInputChange: (value: string) => void }> = ({ onInputChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(event.target.value);
    };
  
    return <input className="textInput" type="text" onChange={handleInputChange} />;
}
  
export default TextInput;