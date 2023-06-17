import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import { TextInput, ImageDisplay, SubmitButton, ActionSpinner, PaintbrushSpinner } from './components'

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
    <div className="mainWrapper">
      <h1>AI Impressionist</h1>
      {!didSubmit && <div>
        <TextInput onInputChange={handleInputChange} />
        <SubmitButton onSubmit={handleSubmit} />
      </div>}
      {(didSubmit && !image) && <PaintbrushSpinner/>}
      {image && <ImageDisplay base64image={image} />}
    </div>
  );
};

export default App;
