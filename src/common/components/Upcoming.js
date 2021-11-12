import React from 'react';
import { GridListTile, GridListTileBar, GridList } from '@material-ui/core';

function Upcoming() {
    return (
        <GridList cellHeight={250} cols={6} className="upcoming-grid">
               
                    <GridListTile>
                        <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
                        <GridListTileBar
                            title={"mak"}
                        />
                    </GridListTile>
                    
                    <GridListTile>
                        <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
                        <GridListTileBar
                            title={"mak"}
                        />
                    </GridListTile>
                    
                    <GridListTile>
                        <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
                        <GridListTileBar
                            title={"mak"}
                        />
                    </GridListTile>
                    
                    <GridListTile>
                        <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
                        <GridListTileBar
                            title={"mak"}
                        />
                    </GridListTile>
                    
                    <GridListTile>
                        <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
                        <GridListTileBar
                            title={"mak"}
                        />
                    </GridListTile>
                    
                    <GridListTile>
                        <img src="//unsplash.it/250/250" width='250' height='250' alt="img" />
                        <GridListTileBar
                            title={"mak"}
                        />
                    </GridListTile>  
               
                </GridList>
    )
}

export default Upcoming;
