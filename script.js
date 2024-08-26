async function fetchMovies() {
  try {
    const response = await fetch("http://localhost:8080/api/movies/popular");
    const data = await response.json();
    const movies = data.results;
    const movieList = document.getElementById("movie-list");

    movies.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.className = "movie";

      const img = document.createElement("img");
      img.src = `http://localhost:8080/${movie.backdropPath}`;
      img.alt = movie.originalTitle;

      const title = document.createElement("h2");
      title.textContent = movie.originalTitle;

      const overview = document.createElement("p");
      overview.textContent = movie.overview;

      movieDiv.appendChild(img);
      movieDiv.appendChild(title);
      movieDiv.appendChild(overview);

      movieList.appendChild(movieDiv);
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

fetchMovies();
