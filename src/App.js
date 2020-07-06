import React, { useRef } from 'react';
import './App.css';
import { FormseyForm } from '@formsey/react';
import '@formsey/core';
import '@formsey/fields-native';
import '@formsey/fields-compound';
import '@formsey/fields-material';
import '@formsey/fields-vaadin';

function App() {
  var formref = useRef(null);

  var changeHandler = function (detail) {
    console.log("change");
    console.log(detail);
    if (detail.name === "zeit") {
      formref.current.setValue("datum", "2020-01-01");
    }
  };

  var clickHandler = function (detail) {
    console.log("click");
    console.log(detail);
  };

  var focusHandler = function (detail) {
    console.log("focus");
    console.log(detail);
  };

  var blurHandler = function (detail) {
    console.log("blur");
    console.log(detail);
  };

  var inputHandler = function (detail) {
    console.log("input");
    console.log(detail);
  };

  var url = "https://cdn.formsey.com/DHwdsd3s5IhNDCWVslZ7/5Aw1YlRXCiIAlSqNmK7s";

  return (
    <div className="App">
      <header className="App-header">
        <FormseyForm ref={formref} onChange={changeHandler} onClick={clickHandler} onFocus={focusHandler} onBlur={blurHandler} onInput={inputHandler} src={url}></FormseyForm>
      </header>
    </div>
  );
}

export default App;
