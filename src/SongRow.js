import React from 'react'

import './SongRow.css';

function SongRow({track="test", onClick }) {
    return (
        <div className="songRow" onClick={onClick}>
            <img className="songRow__album" src={track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1> {track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name + ' - ')}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
