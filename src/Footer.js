import React, { useEffect } from 'react'

import './Footer.css';

import {useDataLayerValue} from './DataLayer';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleFilledOutlined'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlayListPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function Footer() {

    const [{ spotify, current_song, playing }, dispatch] = useDataLayerValue();


    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then(current_state => {

            dispatch({
                type: 'SET_PLAYING',
                playing: current_state.is_playing,
            });

            dispatch({
                type: 'SET_CURRENT_SONG',
                current_song: current_state.item,
            });

        });
    }, [spotify, current_song, playing]);

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();
            dispatch({
                type: 'SET_PLAYING',
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: 'SET_PLAYING',
                playing: true,
            });
        }
    };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_CURRENT_SONG",
            current_song: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };

      const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_CURRENT_SONG",
            current_song: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };

    return (
        <div className="footer">
            <div className="footer__left">
                    <img className="footer__albumLogo" src={current_song?.album.images[0].url} alt="" />
                    <div className="footer__songInfo">
                    <h4>{current_song?.name}</h4>
                    <p>{current_song?.artists.map((artist) => artist.name + ' - ')}</p>
                </div>

            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon onClick={skipPrevious} className="footer__icon" />
                {playing ? (
                    <PauseCircleOutlineIcon fontSize="large" className="footer__icon" onClick={handlePlayPause}/>
                ) : (
                    <PlayCircleOutlineIcon fontSize="large" className="footer__icon" onClick={handlePlayPause}/>
                )}
                <SkipNextIcon onClick={skipNext} className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}> 
                    <Grid item>
                        <PlayListPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Footer;
