import React from 'react';
import { GridListTile, GridListTileBar, GridList } from '@material-ui/core';

function ReleasedMovieGrid() {
    return (
        <div className="released__movies">
        <GridList spacing={16} cellHeight={350} cols={4} className="released-grid">
           
           <GridListTile>
               <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
               <GridListTileBar
                   title={"mak"}
                   subtitle={"Released Date:"}
               />
           </GridListTile>
           
           <GridListTile>
               <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
               <GridListTileBar
                   title={"mak"}
                   subtitle={"Released Date:"}
               />
           </GridListTile>
           
           <GridListTile>
               <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
               <GridListTileBar
                   title={"mak"}
                   subtitle={"Released Date:"}
               />
           </GridListTile>
           
           <GridListTile>
               <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
               <GridListTileBar
                   title={"mak"}
                   subtitle={"Released Date:"}
               />
           </GridListTile>
           
           <GridListTile>
               <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
               <GridListTileBar
                   title={"mak"}
                   subtitle={"Released Date:"}
               />
           </GridListTile>
           
           <GridListTile>
               <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
               <GridListTileBar
                   title={"mak"}
                   subtitle={"Released Date:"}
               />
           </GridListTile>
      
       </GridList>
        </div>
    )
}

export default ReleasedMovieGrid
