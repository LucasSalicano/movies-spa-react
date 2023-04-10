import {Link} from "react-router-dom";

export const MovieItem = ({movie}) => (
    <li>
        <Link to={`/movie/${movie.id}/detail`}>{movie.title}</Link>
    </li>
);
