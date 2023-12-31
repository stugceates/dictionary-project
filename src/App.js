import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="happy" />
        </main>
        <footer>
          This project coded by Selin Ates and open sourced on{" "}
          <a href="https://github.com/stugceates/dictionary-project">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
