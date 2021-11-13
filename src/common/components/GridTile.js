import React, { useState } from 'react';
// using Grid related components throws depricated warning in console 
// and suggests to use Image related components instead
import { ImageListItem, ImageListItemBar } from '@material-ui/core';
import { useHistory } from "react-router-dom";

function GridTile({ url, name, release_date, height, id, enableClick = true }) {
    const [poster_url] = useState(url);
    const [title] = useState(name);
    const history = useHistory();
    return (
        <ImageListItem onClick={() => {
            if (enableClick)
                history.push("/movie/" + id);
        }}>
            <img src={poster_url} height={height} alt="img" />
            <ImageListItemBar
                title={title}
                subtitle={`${release_date ? "Released Date:" + release_date : ""}`}
            />
        </ImageListItem >
    )
}

export default GridTile;
