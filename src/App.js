import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1 className="text-center text-info mt-5">Dictionary</h1>
        </header>
        <main>
          <p>Dictionary project</p>
        </main>
        <footer className="App-footer">
          <p className="text-center text-muted">Coded by Sara</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
