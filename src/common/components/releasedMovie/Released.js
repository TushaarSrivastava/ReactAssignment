import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import ReleasedMovieGrid from './ReleasedMovieGrid';

function Released() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const URL = 'http://localhost:8085/api/v1/movies?page=1&limit=8&status=RELEASED';
                fetch(URL).then(response => response.json())
                    .then(data => setData(data.movies));
            }
            catch (err) {
                console.log("error->", err)
            }
        }
        fetchData();
    }, []);
    const onFilterApplied = ({ movieName, selectedGenres, selectedArtists, releaseStartDate, releaseEndDate }) => {
        const fetchData = async () => {
            let subString = '';
            if (movieName) subString += "&title=" + movieName;
            if (selectedGenres.length) subString += "&genre=" + selectedGenres.join(",");
            if (selectedArtists.length) subString += "&artists=" + selectedArtists.join(",");
            if (releaseStartDate) subString += "&start_date=" + releaseStartDate;
            if (releaseEndDate) subString += "&end_date=" + releaseEndDate;

            try {
                const URL = 'http://localhost:8085/api/v1/movies?limit=100' + subString;
                fetch(URL).then(response => response.json())
                    .then(data => setData(data.movies));
            }
            catch (err) {
                console.log("error->", err)
            }
        }
        fetchData();
    }
    return (
        <main className='released'>
            <ReleasedMovieGrid data={data} />
            <Filters onFilterApplied={onFilterApplied} />
        </main>
    )
}

export default Released
