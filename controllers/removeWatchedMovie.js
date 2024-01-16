const removeWatchedMovie = (req, res, db) => {
  const { imdb_id, username } = req.body;
  db("watched_movies")
    .where("username", username)
    .andWhere("imdb_id", imdb_id)
    .del()
    .then(() => {
      db.select()
        .from("watched_movies")
        .then((updatedList) => res.send(updatedList));
    });
};

export default removeWatchedMovie;

