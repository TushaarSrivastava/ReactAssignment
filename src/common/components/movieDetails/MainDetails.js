import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';
import './MovieDetails.css';

function MainDetails({ title, genres = [], duration, release_date, critics_rating, story_line, wiki_url, trailer_url }) {
    const opts = {
        height: '400',
        width: '800',
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <div className="main-details">
            <Typography variant="h6" component="h2">{title}</Typography>
            <Typography>
                <b>Genre</b>: {genres.map((genre, i) => <Fragment key={genre}>{genre}{i !== genres.length - 1 ? ', ' : ''}</Fragment>)}
            </Typography>
            <Typography>
                <b>Duration</b>: {duration}
            </Typography>
            <Typography>
                <b>Release Date</b>: {new Date(release_date).toDateString()}
            </Typography>
            <Typography>
                <b>Rating</b>: {critics_rating}
            </Typography>
            <Typography className="margined-detail">
                <b>Plot</b>: (<a href={wiki_url}>Wiki Link</a>) {story_line}
            </Typography>
            <Typography className="margined-detail">
                <b>Trailer:</b>
            </Typography>
            <YouTube videoId={trailer_url.split("?v=")[1]} opts={opts} />
        </div>
    )
}

export default MainDetails;