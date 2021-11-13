import React from 'react';
import { ImageList } from '@material-ui/core';
import GridTile from '../GridTile';

function ReleasedMovieGrid({ data }) {
    return (
        <div className="released__movies">
            <ImageList gap={1} rowHeight={350} cols={4} className="released-grid">
                {!!data.length && data.map((movie) => <GridTile key={movie.id} url={movie.poster_url} name={movie.title} release_date={movie.release_date} height={350} id={movie.id}/>)}
            </ImageList>
        </div>
    )
}

export default ReleasedMovieGrid
