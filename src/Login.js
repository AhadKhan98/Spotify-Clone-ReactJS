import React from 'react';

import './Login.css';

import { loginURL } from './spotify';

function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <p>Spotify Clone App (Made By <a target="_blank" href="http://ahadzai.com/">Ahad Zai</a>) </p>
            <p className="instructions"> 
                Instructions: 
                <br />
                1) Login with your Spotify account.
                <br />
                2) Make sure you have a device that is online and available on Spotify.
                <br />
                3) The clone app will broadcast your selections straight to your primary device using Spotify's API.
                <br /><br />
                Note: The app itself does not play songs, you NEED a device that is online on spotify.
            </p>

            <a href={loginURL}>LOGIN WITH SPOTIFY</a>
        </div>
    )
};

export default Login;
