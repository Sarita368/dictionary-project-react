import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dictionary from "./Dictionary";
import bookLogo from "./Dictionary.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={bookLogo} className="App-logo img-fluid" alt="logo" />
          <h1 className="text-center text-info mt-5">Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <p className="text-center text-muted"><small>Coded by Sara</small></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
