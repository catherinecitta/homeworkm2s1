// import logo from './logo.svg';
import './App.css';
import data from './module.js';
import Container from './container/container.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {data.map((e)=> <Container {...e}/>)}
        
      </header>
    </div>
  );
}

export default App;
