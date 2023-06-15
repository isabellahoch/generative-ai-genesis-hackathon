import React from 'react';

const TextInput: React.FC<{ onInputChange: (value: string) => void }> = ({ onInputChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(event.target.value);
    };
  
    return <input type="text" onChange={handleInputChange} />;
}
  
export default TextInput;