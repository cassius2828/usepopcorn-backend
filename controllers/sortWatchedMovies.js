const sortWatchedMovies = async (req, res, db) => {
  const { username, sortBy } = req.body;
  if (sortBy === "oldest added") {
    db("watched_movies")
      .returning("*")
      .where("username", username)
      .then((usersWatchedList) => {
        res.send(usersWatchedList);
      });
  } else if (sortBy === "newest added") {
    db("watched_movies")
      .returning("*")
      .where("username", username)
      .orderBy("time_added", "desc")
      .then((usersWatchedList) => {
        res.send(usersWatchedList);
      });
  } else if (sortBy === "A - Z") {
    db("watched_movies")
      .returning("*")
      .where("username", username)
      .orderBy("title")
      .then((usersWatchedList) => {
        res.send(usersWatchedList);
      });
  } else if (sortBy === "Z - A") {
    db("watched_movies")
      .returning("*")
      .where("username", username)
      .orderBy("title", "desc")
      .then((usersWatchedList) => {
        res.send(usersWatchedList);
      });
  } else if (sortBy === "user rating") {
    db("watched_movies")
      .returning("*")
      .where("username", username)
      .orderBy("user_rating", "desc")
      .then((usersWatchedList) => {
        res.send(usersWatchedList);
      });
  } else if (sortBy === "IMDB Rating") {
    db("watched_movies")
      .returning("*")
      .where("username", username)
      .orderBy("imdb_id_rating", "desc")
      .then((usersWatchedList) => {
        res.send(usersWatchedList);
      });
  }
};

export default sortWatchedMovies;
