export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;
  const topRatedMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated';
  const topRatedSeriesUrl = 'https://api.themoviedb.org/3/tv/top_rated';

  const movies = await $fetch(topRatedMoviesUrl, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  const series = await $fetch(topRatedSeriesUrl, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  return { movies, series };
});
