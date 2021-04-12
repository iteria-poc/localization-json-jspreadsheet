import "./App.css";
import Spreadsheet from "./webcomponents/spreadsheet/Spreadsheet.tsx";


function App() {
  const language={"messageID": {"budget": "budget", "message2": "message2"},"en": {"budget": "BUDGET", "message2": "MESSAGE2"}, "sk": {"budget": "ROZPOCET", "message2": "hlaska 2"},"de":{"budget": "BUDGET", "message2": "Meldung"}}
  return (
    <div className="App">
      <Spreadsheet languages={language} />
    </div>
  );
}

export default App;
