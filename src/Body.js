import React from 'react'

import './Body.css';

import Header from './Header';

import {useDataLayerValue} from './DataLayer';
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';

import SongRow from './SongRow';

function Body() {

    const [{featured_playlist}, dispatch] = useDataLayerValue();
    console.log('FEATURED PLAYLIST!!!!', featured_playlist)
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
                    <PlayCircleFilled className="body__shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz /> 
                </div>
                
                {featured_playlist?.tracks?.items.map(item => (
                    <SongRow track={item.track} />
                ))}

                

                
            </div>

        </div>
    )
}

export default Body
