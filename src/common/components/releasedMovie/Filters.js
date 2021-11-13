import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Input, Button, Select, MenuItem, Checkbox, ListItemText, TextField } from '@material-ui/core';
import './Filters.css';

const styles = (theme) => ({
    root: {
        minWidth: 240,
        maxWidth: 240,
    },
    formEntry: {
        margin: theme.spacing(2),
    },
    displayFlex: {
        display: "flex",
        justifyContent: "center",
    },
    heading: {
        color: theme.palette.primary.light
    }
});

function Filters({ classes, onFilterApplied }) {
    const [genres, setGenres] = useState([]);
    const [artists, setArtists] = useState([]);
    const [movieName, setMovieName] = useState("");
    const [releaseStartDate, setReleaseStartDate] = useState("");
    const [releaseEndDate, setReleaseEndDate] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState([]);

    useEffect(() => {
        const fetchData = async (URL, setter) => {
            try {
                fetch(URL).then(response => response.json())
                    .then(data => setter(data));
            }
            catch (err) {
                console.log("error->", err)
            }
        }
        fetchData('http://localhost:8085/api/v1/genres', (data) => setGenres(data.genres));
        fetchData('http://localhost:8085/api/v1/artists?limit=100', (data) => setArtists(data.artists));
    }, []);

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.heading}>FIND MOVIES BY:</Typography>
                <FormControl className={classes.formEntry}>
                    <InputLabel htmlFor="movieName">Movie Name *</InputLabel>
                    <Input required id="movieName" aria-describedby="Enter movie Name" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
                </FormControl>

                <FormControl className={classes.formEntry}>
                    <Select
                        multiple
                        value={selectedGenres}
                        onChange={(e) => setSelectedGenres(e.target.value)}
                        input={<Input />}
                        displayEmpty
                        renderValue={(selectedGenres) => selectedGenres.join(", ")}
                    // MenuProps={MenuProps}
                    >
                        {genres.map(({ genre }) => (
                            <MenuItem key={genre} value={genre}>
                                <Checkbox checked={selectedGenres.indexOf(genre) > -1} />
                                <ListItemText primary={genre} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className={classes.formEntry}>
                    <Select
                        multiple
                        value={selectedArtists}
                        onChange={(e) => setSelectedArtists(e.target.value)}
                        input={<Input />}
                        displayEmpty
                        renderValue={(selectedArtists) => selectedArtists.join(", ")}
                    // MenuProps={MenuProps}
                    >
                        {artists.map((artist) => (
                            <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                <Checkbox checked={selectedArtists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                                <ListItemText primary={artist.first_name + " " + artist.last_name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className={classes.formEntry}>
                    <TextField
                        id="releaseDateStart"
                        label="Release date start"
                        type="date"
                        placeholder="mm-dd-yyyy"
                        onChange={e => setReleaseStartDate(e.target.value)}
                        value={releaseStartDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                <FormControl className={classes.formEntry}>
                    <TextField
                        id="releaseDateEnd"
                        label="Release date end"
                        type="date"
                        onChange={e => setReleaseEndDate(e.target.value)}
                        value={releaseEndDate}
                        placeholder="mm-dd-yyyy"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
            </CardContent>
            <CardActions className={classes.displayFlex}>
                <Button color="primary" variant="contained" onClick={() => onFilterApplied({ movieName, selectedGenres, selectedArtists, releaseStartDate, releaseEndDate })}>Apply</Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(Filters);