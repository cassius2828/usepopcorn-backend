const API_KEY = process.env.API_KEY;

const addWatchedMovie = (req, res, db) => {
  const {
    username,
    imdb_id,
    imdb_id_rating,
    poster,
    runtime,
    title,
    user_rating,
    year,
  } = req.body;

  // const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie_imdb_id}`;

  // if (!movie_imdb_id || !movie_title || !user_movie_rating)
  //   return res.status(400).json("insufficient movie details");

  // const response = await fetch(url);
  // const data = await response.json();

  db("watched_movies")
    .insert({
      username: username,
      imdb_id: imdb_id,
      imdb_id_rating: imdb_id_rating,
      poster: poster,
      runtime: runtime,
      title: title,
      user_rating: user_rating,
      year: year,
      time_added: new Date(),
    })
    .returning("*")
    .then((userList) => {
      res.send(userList);
    });
};

export default addWatchedMovie;
