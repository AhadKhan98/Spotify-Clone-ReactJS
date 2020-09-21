import React, {useEffect} from 'react';
import './App.css';

import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotifyAPI = new SpotifyWebApi();

function App() {

  const [{token, playlists}, dispatch] = useDataLayerValue();

  useEffect(() => {

    const _token = getTokenFromUrl();
    window.location.hash = "";

    if (_token) {

      dispatch({type: 'SET_TOKEN', token: _token});

      dispatch({type: 'SET_SPOTIFY', spotify: spotifyAPI})

      spotifyAPI.setAccessToken(_token);
      spotifyAPI.getMe().then(user => {
        dispatch({type:'SET_USER', user});
      });

      spotifyAPI.getUserPlaylists().then(playlists => {
        console.log("PLAYLIST!!",playlists)
        dispatch({ type:'SET_PLAYLISTS', playlists })
        dispatch({ type:'SET_FEATURED_PLAYLIST', featured_playlist:playlists.items[0] })
      });
    }



  }, []);

  return (

    <div className="app">
      { token ? <Player /> : <Login /> }
    </div>
  );
}

export default App;
