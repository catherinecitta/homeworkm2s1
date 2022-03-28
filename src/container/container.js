const Container = ({name, artists, album})=> {
    return (    
    <div className="container">
    <div className="songs">
      <h2>songz</h2>
      <div className="song">
        <img className="album"
          src={album.images[0].url}
          alt="albumImage"
        />
        <div className="songs-cred">
          <p className="song-title">{name}</p>
          <p>{artists[0].name}</p>
        <input class="listen-submit" type="submit" value="listen"></input>
        </div>
      </div>
    </div>
  </div>);
};

export default Container;