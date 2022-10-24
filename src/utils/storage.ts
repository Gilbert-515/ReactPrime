import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getMoviesSave(key: string) {
  const myMovies = await AsyncStorage.getItem(key);
  return JSON.parse(myMovies!) || [];
}

export async function saveMovie(key: string, newMovie: any) {
  const moviesStored = await getMoviesSave(key);
  const hasMovie = moviesStored.some((item: any) => item.id === newMovie.id);

  if(hasMovie) return;

  moviesStored.push(newMovie);
  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
}

export async function deleteMovie(id: string) {
  const moviesStored = await getMoviesSave('@primereact');
  const myMovies = moviesStored.filter((item: any) => {
    return (item.id !== id)
  });

  await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));

  return myMovies;
}

export async function hasMovie(movie: any) {
  const moviesStored = await getMoviesSave('@primereact');
  const hasMovie = moviesStored.some((item: any) => item.id === movie.id);

  return hasMovie ? true : false;
}