import logo from './logo.svg';
import './App.css';

function App() {
  const players = ["Tamim", "Mashrafi", "Musfiqur", "Mahamudulla", "Shakib"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Player> </Player>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Player(props) {
  return(
    <div style={{border:"1px solid gold", padding:"10px", margin:"10px"}}>
      <h2>Tamim</h2>
      <h3> Batsmmen</h3>
    </div>
  )
}

export default App;
