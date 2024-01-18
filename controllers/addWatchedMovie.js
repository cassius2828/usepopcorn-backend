
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
