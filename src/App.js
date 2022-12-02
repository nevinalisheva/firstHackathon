import "./App.css";
import Calander from "./components/Calander";
import Nav from "./components/Nav";
import sound from "react";
import song from "./song.mp3";

function App() {
  return (
    <div className="App">
      <Calander>{/* <Nav /> */}</Calander>
    </div>
  );
}

export default App;
