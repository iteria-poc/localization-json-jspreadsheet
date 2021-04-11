import './App.css';
import Spreadsheet from './webcomponents/spreadsheet/Spreadsheet.js';
import {jexcel} from 'jspreadsheet-ce';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Spreadsheet languages='{"en": {"budget": "BUDGET", "message2": "MESSAGE2"}, "sk": {"budget": "ROZPOCET", "message2": "hlaska 2"},"de":{"budget": "affaf", "message2": "asf 2"}}' />
    </div>
  );
}

export default App;
