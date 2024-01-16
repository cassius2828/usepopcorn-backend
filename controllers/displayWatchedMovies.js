const displayWatchedMovies = async (req, res, db) => {
  const { username } = req.body;
  db("watched_movies")
    .returning("*")
    .where("username", username)
    .then((usersWatchedList) => {
      res.send(usersWatchedList);
    });
};

export default displayWatchedMovies;

/*
WHAT DO I NEED?
1. access to the filtered watchedmovies db
2. return the information there
3. can create sort funtions here to sort the data as desired

*/
