
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

  // // this solves the sorting issue when a user rating of 10 was placed lower than any other digits
  // // this occured bc the values are strings so it is reading the first int seen as the rating
  // // ex: 9 > 1 even though what I am putting is 10
  // if(user_rating.length === 1) {
  //   user_rating = "0" + user_rating
  // }


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
