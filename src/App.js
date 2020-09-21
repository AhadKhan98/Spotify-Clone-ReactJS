import React, {useEffect, useState} from 'react';
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
    }
  }, []);

  console.log('USER>>>',user);
  console.log('TOKEN>>>', token);

  return (

    <div className="app">
      { token ? <Player /> : <Login /> }
    </div>
  );
}

export default App;
