import axios from "axios";

const BASE_URL = 'http://localhost:5000';

export class MoviesService {
    static getMovies() {
        return axios(BASE_URL + '/movies');
    }

    static getDetailByMovieId(id) {
        return axios(BASE_URL + `/movies/${id}/detail`)
    }
}
