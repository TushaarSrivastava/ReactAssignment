import React from 'react';
import { GridList } from '@material-ui/core';
import GridTile from '../GridTile';

function ReleasedMovieGrid({ data }) {
    return (
        <div className="released__movies">
            <GridList spacing={1} cellHeight={350} cols={1} className="released-grid">
                {!!data.length && data.map((movie) => <GridTile url={movie.poster_url} name={movie.title} release_date={movie.release_date} height={350} id={movie.id}/>)}
            </GridList>
        </div>
    )
}

export default ReleasedMovieGrid
