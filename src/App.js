import "./App.css";
import Spreadsheet from "./webcomponents/spreadsheet/Spreadsheet.tsx";

function App() {
  const language = {
    en: { budget: "BUDGET", message2: "MESSAGE2" },
    sk: { budget: "ROZPOCET", message2: "hlaska 2" },
    de: { budget: "BUDGET", message2: "Meldung" },
  };
  return (
    <div className="App">
      <Spreadsheet languages={language} />
    </div>
  );
}

export default App;
