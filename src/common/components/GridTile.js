import React from 'react';
import { GridListTile, GridListTileBar, GridList } from '@material-ui/core';

function GridTile() {
    const [poster_url, setPoster_url] = useState("");
    const [title, setTitle] = useState("");
    return (
        <GridListTile>
                   <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
                   <GridListTileBar
                       title={title}
                       subtitle={"Released Date:"}
                   />
               </GridListTile>
    )
}

export default GridTile
