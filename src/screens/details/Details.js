import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router';
import MainDetails from '../../common/components/movieDetails/MainDetails';
import DetailSidepanel from '../../common/components/detailSidepanel/DetailSidepanel';
import './Details.css';

function MovieDetails() {
    const { pathname } = useLocation();
    const [data, setData] = useState({});
    const [title, setTitle] = useState("");
    const [genres, setGenres] = useState([]);
    const [duration, setDuration] = useState("");
    const [release_date, setRelease_date] = useState("");
    const [critics_rating, setCritics_rating] = useState("");
    const [story_line, setStory_line] = useState("");
    const [wiki_url, setWiki_url] = useState("");
    const [trailer_url, setTrailer_url] = useState("");
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const parmas = pathname.split("/")
                const URL = `http://localhost:8085/api/v1/movies/${parmas[parmas.length - 1]}`;
                fetch(URL).then(response => response.json())
                    .then(data => setDataToState(data));
            }
            catch (err) {
                console.log("error->", err)
            }
        }
        fetchData();
    }, []);

    const setDataToState = (data) => {
        setData(data);
        const { title,
            genres,
            duration,
            release_date,
            rating,
            storyline,
            wiki_url,
            trailer_url,
            artists } = data;
        setTitle(title);
        setGenres(genres);
        setDuration(duration);
        setRelease_date(release_date);
        setCritics_rating(rating);
        setStory_line(storyline);
        setWiki_url(wiki_url);
        setTrailer_url(trailer_url);
        setArtists(artists);
    }

    return (
        <div className="details">
            <Typography className="details__back-button">
                <Link to="/">{"< Back to Home"}</Link>
            </Typography>
            <section className="details__movie-details">
                <aside className="details__movie-details__poster">
                    <img src={data.poster_url} alt="poster" />
                </aside>
                <main className="details__movie-details__main-details">
                    <MainDetails {...{ title, genres, duration, release_date, critics_rating, story_line, wiki_url, trailer_url }} />
                </main>
                <aside className="details__movie-details__sidepane"><DetailSidepanel {...{ artists }} /></aside>
            </section>
        </div>
    )
}

export default MovieDetails;
