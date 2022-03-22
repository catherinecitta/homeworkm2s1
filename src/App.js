// import logo from './logo.svg';
import './App.css';
import data from './module.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="container">
        <div className="songs">
          <h2>songz</h2>
          <div className="song">
            <img className="album"
              src={data.album.images[0].url}
              alt="albumImage"
            />
            <div className="songs-cred">
              <p className="song-title">{data.name}</p>
              <p>{data.artists[0].name}</p>
            <input class="listen-submit" type="submit" value="listen"></input>
            </div>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
