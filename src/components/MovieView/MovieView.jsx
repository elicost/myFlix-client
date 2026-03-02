export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movie.ImagePath} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Genre: {movie.Genre.Name}</span>
                <span>{movie.Genre.Description}</span>
            </div>
            <div>
                <span>Director: {movie.Director.Name}</span>
                <div>
                    <span>Bio: {movie.Director.Bio}</span>
                    <span>Birth: {movie.Director.Birth}</span>
                    <span>Death: {movie.Director.Death}</span>
                </div>
            </div>
            <div>
                <span>Actors: </span>
                <span>{movie.Actors}</span>
            </div>
            <div>
                <span>Featured: {movie.Featured}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    )
};