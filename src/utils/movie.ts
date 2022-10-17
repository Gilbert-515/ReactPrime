// gerar ima lista de filme com o tamanho desejado

export function getListMovies(size: number, movies: []) {
  let popularMovies: any = [];

  for(let i=0; i < size; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}

// gerar um valor aleatório com base no tamanho da lista de filmes passada por parâmetro
export function randomBanner(movies: []) {
  return Math.floor(Math.random() * movies.length); 
}