import React, { useState, useEffect } from 'react';
import { GridList } from '@material-ui/core';
import GridTile from './GridTile';

function Upcoming() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
           
            const URL = 'http://localhost:8085/api/v1/movies?page=1&limit=6&status=PUBLISHED';
            fetch(URL).then(response => response.json())
                .then(data => setData(data.movies));
        }
        fetchData();
    }, []);

    return (
        <GridList cellHeight={250} cols={6} className="upcoming-grid">
            {!!data.length && data.map((movie) =><GridTile url={movie.poster_url} name={movie.title} height={250}/>)}
        </GridList>
    )
}

export default Upcoming;
