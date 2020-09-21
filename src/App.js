import React, {useEffect, useState} from 'react';
import './App.css';

import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';


function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const _token = getTokenFromUrl();
    window.location.hash = "";
    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="app">
      { token ? <Player /> : <Login /> }
    </div>
  );
}

export default App;
