import React, { useRef } from 'react';
import './App.css';
import { FormseyForm } from '@formsey/react';
import '@formsey/core';
import '@formsey/fields-native';
import { InvalidError } from '@formsey/core/InvalidEvent';
function App() {
  var formref = useRef(null);

  var changeHandler = function (detail) {
    console.log("change");
    console.log(detail);
    if (detail.name === "zeit") {
      formref.current.setValue("datum", "2020-01-01");
      var e = {
        "XXX": {
          "validityMessage": "Füllen Sie dieses Feld aus.",
          "validityState": {
            "valueMissing": true
          }
        }
      };
      formref.current.setCustomValidity (e);
//      alert(formref.current.checkValidity());
//      formref.current.reportValidity()
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

  var url = "https://www.formsey.com/live/DHwdsd3s5IhNDCWVslZ7";

  return (
    <div className="App">
      <header className="App-header">
        <FormseyForm ref={formref} onChange={changeHandler} onClick={clickHandler} onFocus={focusHandler} onBlur={blurHandler} onInput={inputHandler} src={url}></FormseyForm>
      </header>
    </div>
  );
}

export default App;
