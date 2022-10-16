// gerar ima lista de filme com o tamanho desejado

export function getListMovies(size: number, movies: []) {
  let popularMovies: any = [];

  for(let i=0; i < size; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}