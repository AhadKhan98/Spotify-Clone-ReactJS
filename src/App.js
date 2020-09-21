import React, {useEffect} from 'react';
import './App.css';

import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotifyAPI = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {

    const _token = getTokenFromUrl();
    window.location.hash = "";

    if (_token) {

      dispatch({type: 'SET_TOKEN', token: _token});

      spotifyAPI.setAccessToken(_token);
      spotifyAPI.getMe().then(user => {
        dispatch({type:'SET_USER', user});
      });

      spotifyAPI.getUserPlaylists().then(playlists => {
        dispatch({ type:'SET_PLAYLISTS', playlists })
      });

    }
  }, []);

  return (

    <div className="app">
      { token ? <Player spotify={spotifyAPI} /> : <Login /> }
    </div>
  );
}

export default App;
