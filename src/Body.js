import React from 'react'

import './Body.css';

import Header from './Header';

import {useDataLayerValue} from './DataLayer';

function Body() {

    const [{featured_playlist}, dispatch] = useDataLayerValue();
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
        </div>
    )
}

export default Body
