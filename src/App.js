import "./App.css";
import Piano from "./components/Piano.jsx";
import TunePicker from "./components/TunePicker.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TunePicker />
        <Piano />
      </header>
    </div>
  );
}

export default App;
