import React, { Fragment, useState } from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';

function Rating() {
    const [rating, setRating] = useState(0);

    return (
        <Fragment>
            <Typography>
                <b>Rate this movie: </b>
            </Typography>
            <div>
                <StarBorderIcon onClick={() => setRating(1)} className={`${rating >= 1 ? 'yellow' : ''}`} />
                <StarBorderIcon onClick={() => setRating(2)} className={`${rating >= 2 ? 'yellow' : ''}`} />
                <StarBorderIcon onClick={() => setRating(3)} className={`${rating >= 3 ? 'yellow' : ''}`} />
                <StarBorderIcon onClick={() => setRating(4)} className={`${rating >= 4 ? 'yellow' : ''}`} />
                <StarBorderIcon onClick={() => setRating(5)} className={`${rating >= 5 ? 'yellow' : ''}`} />
            </div>
        </Fragment>
    )
}

export default Rating;
