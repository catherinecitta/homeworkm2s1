// import logo from './logo.svg';
import './App.css';
import data from './module.js';
import Container from './container/container.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container name={data.artists[0].name} title={data.name} image={data.album.images[0].url} /> 
      </header>
    </div>
  );
}

export default App;