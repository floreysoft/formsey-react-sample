import React from 'react';
import './App.css';
import { FormseyForm } from './FormseyForm';


function App() {
  var changeHandler = function clickhandler(detail) {
    console.log(detail);
  };

  return (
    <div className="App">
      <header className="App-header">
        <FormseyForm onChangeY={changeHandler}></FormseyForm>
      </header>
    </div>
  );
}

export default App;
