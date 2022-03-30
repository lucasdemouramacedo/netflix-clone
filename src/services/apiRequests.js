import api from './api'

const tmdRequests = {
    getMoviesListByGender: (gender) => {
            let movies = await api
                .get(`discover/movie?api_key=bf851eb7632ffe5e76ef37a506ff402e&language=pt-BR&with_genres=${gender}`)
                .then((response) => response.data.results)
                .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
                })
            return movies;
    }
}

export default tmdRequests