import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './styles/fonts.css';

import { TextInput, ImageDisplay, SubmitButton, RestartButton, PaintbrushLoader, ShareMenu } from './components'

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [image, setImage] = useState('');
  const [didSubmit, setDidSubmit] = useState(false);
  const [didJustLoad, setDidJustLoad] = useState(true);


  const handleInputChange = (value: string) => {
    setInputText(value);
  };

  const handleSubmit = async () => {
    try {
      setDidSubmit(true);
      if(didJustLoad) {setDidJustLoad(false)};
      console.log(`${process.env.REACT_APP_API_URL}/?q=${inputText}`);
      const response = await axios.get<string>(
        `${process.env.REACT_APP_API_URL}/?q=${inputText}`
      );
      setImage(response.data);
    } catch (error) {
      console.error('Error fetching the painting result:', error);
    }
  };

  const reset = () => {
    setDidSubmit(false);
    setImage('');
  }

  return (
    <div id="mainWrapper">
      <h1>AI Impressionist</h1>
      {didJustLoad && <p>Type in a prompt to generate an impressionist painting!</p>}
      {!didSubmit && <div>
        <TextInput onInputChange={handleInputChange} />
        <SubmitButton onSubmit={handleSubmit} />
      </div>}
      {(didSubmit && !image) && <PaintbrushLoader/>}
      {(didSubmit && image) && 
      <>
        <ImageDisplay base64image={image} />
        <ShareMenu base64image={image} />
        <RestartButton onRestart={reset}/>
      </>
      }
      <p>&copy; 2023 Isabella Hochschild</p>
    </div>
  );
};

export default App;
