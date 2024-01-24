import { reactive } from "vue";


export const store = reactive ({
    searchMovies: '',
    searchTvSeries: '',
    myApi:     '8b8bfeb0be27781c70ec92fbd8ee8dba',
    movieUrl: 'https://api.themoviedb.org/3/search/movie',
    apiSeries: 'https://api.themoviedb.org/3/search/tv',
    films: []
});