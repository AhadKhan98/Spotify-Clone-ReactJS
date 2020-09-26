import React, {useEffect} from 'react'

import './Body.css';

import Header from './Header';

import {useDataLayerValue} from './DataLayer';
import { Favorite, MoreHoriz, PlayCircleFilled, PauseCircleFilled } from '@material-ui/icons';

import SongRow from './SongRow';

function Body() {

    const [{ playing,featured_playlist, spotify}, dispatch] = useDataLayerValue();

    useEffect(() => {
        console.log('PLAYLIST CHANGED BY CLICK', featured_playlist)
    }, [featured_playlist]);

    const pausePlaying = () => {
        spotify.pause();
        dispatch({
            type: 'SET_PLAYING',
            playing: false,
        });
    }
    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:${featured_playlist.id}`,
          })
          .then(() => {
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
          });
      };
    
      const playSong = (id) => {
          console.log('ITEMID', id);
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
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
          });
      };

    
    // console.log('FEATURED PLAYLIST!!!!', featured_playlist)
    return (
        <div className="body">
            <Header />
            <div className="body__info">
                <img src={featured_playlist?.images[0]?.url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{featured_playlist?.name}</h2>
                    <p>{featured_playlist?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    { playing ? (
                        <PauseCircleFilled onClick={pausePlaying} className="body__shuffle" />
                    ):(
                        <PlayCircleFilled onClick={playPlaylist} className="body__shuffle" />
                    ) }
                    
                    <Favorite fontSize="large" />
                    <MoreHoriz /> 
                </div>
                {console.log(featured_playlist?.tracks?.items[0])}
                {featured_playlist?.tracks?.items?.map(item => (
                    
                    <SongRow track={item.track} onClick={() => (playSong(item.track.id))}/>
                ))}
  
            </div>

        </div>
    )
}

export default Body
