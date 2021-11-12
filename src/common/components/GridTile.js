import React, { useState } from 'react';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { useHistory } from "react-router-dom";

function GridTile({ url, name, release_date, height, id }) {
    const [poster_url] = useState(url);
    const [title] = useState(name);
    const history = useHistory();
    return (
        <GridListTile onClick={() =>{ console.log(id);
            history.push("/movie/"+id);
        }}>
            <img src={poster_url} height={height} alt="img" />
            <GridListTileBar
                title={title}
                subtitle={`${release_date ? "Released Date:" + release_date : ""}`}
            />
        </GridListTile>
    )
}

export default GridTile
