import React from 'react';
import './App.css';
import '@formsey/core';
import '@formsey/fields-native';
import { FormseyForm } from '@formsey/react';


function App() {
  var changeHandler = function clickhandler(detail) {
    console.log(detail);
  };

  return (
    <div className="App">
      <header className="App-header">
        <FormseyForm onChange={changeHandler}></FormseyForm>
      </header>
    </div>
  );
}

export default App;
