import React from 'react';
import Filters from './Filters';
import ReleasedMovieGrid from './ReleasedMovieGrid';

function Released() {
    return (
        <main className='released'>
            <ReleasedMovieGrid />
            <Filters />
        </main>
    )
}

export default Released
