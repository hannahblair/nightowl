import "./App.css";
import { Header } from "./components/header";
import { LandingText } from "./components/landingText";
import { LetsTalk } from "./components/letstalk";
import { Work } from "./components/work";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingText />
      <Work />
      <LetsTalk />
    </div>
  );
}

export default App;
