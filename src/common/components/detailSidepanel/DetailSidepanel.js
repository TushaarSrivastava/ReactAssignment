import React from 'react';
import './DetailSidepanel.css';
import Rating from './Rating';
import { ImageList } from '@material-ui/core';
import GridTile from '../GridTile';
import Typography from '@material-ui/core/Typography';

function DetailSidepanel({ artists }) {

    return (
        <div className="sideppanel">
            <Rating />
            <Typography>
                <b className="sideppanel__artist-heading">Artists: </b>
            </Typography>
                <ImageList gap={10} rowHeight={350} cols={2} className="artists-grid">
                    {!!artists.length &&
                        artists.map((artist) => <GridTile key={artist.profile_url} url={artist.profile_url} name={artist.first_name + " " +artist.last_name} enableClick={false} />)}
                </ImageList>
        </div>
    )
}

export default DetailSidepanel
