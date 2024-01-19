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

/*
WHAT SORTING LOGIC DO I WANT TO IMPLEMENT?
1. Sort by user_rating
2. Sort by imdb rating
3. Sort by ABC (title) and reverse
5. Sort by newest added and oldest


*/