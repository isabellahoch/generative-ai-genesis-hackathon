import React, { useState } from 'react';
import axios from 'axios';

import { TextInput, ImageDisplay, SubmitButton, ActionSpinner } from './components'

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [image, setImage] = useState('');
  const [didSubmit, setDidSubmit] = useState(false);


  const handleInputChange = (value: string) => {
    setInputText(value);
  };

  const handleSubmit = async () => {
    try {
      setDidSubmit(true);
      console.log(`${process.env.REACT_APP_API_URL}/?q=${inputText}`);
      const response = await axios.get<string>(
        `${process.env.REACT_APP_API_URL}/?q=${inputText}`
      );
      setImage(response.data);
    } catch (error) {
      console.error('Error fetching the painting result:', error);
    }
  };

  return (
    <div>
      <h1>Image Search</h1>
      <TextInput onInputChange={handleInputChange} />
      <SubmitButton onSubmit={handleSubmit} />
      {(didSubmit && !image) && <ActionSpinner/>}
      {image && <ImageDisplay base64image={image} />}
    </div>
  );
};

export default App;
