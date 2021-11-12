import React from 'react';
import Upcoming from '../../common/components/Upcoming';
import Released from '../../common/components/releasedMovie/Released';
import './Homepage.css';

function Homepage() {
    return (
        <div className="homepage">
            <div className="homepage__header">
                Upcoming Movies
            </div>
                <Upcoming />
                <Released />
         </div>
    )
}

export default Homepage
