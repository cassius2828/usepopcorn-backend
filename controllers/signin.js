const handleSignIn = (req, res, bcrypt, db) => {
  const { email, username, password } = req.body;
  if ((!email && !username) || !password) {
    return res.status(400).json("incorrect submission");
  }
  if (!username) {
    db.select("email", "hash")
      .from("login")
      .where("email", "=", email)
      .then((data) => {
        const isValid = true
        // bcrypt.compareSync(password, data[0].hash);

        if (isValid) {
         
          return db
            .select("*")
            .from("users")
            .where("email", "=", email)
            .then((user) => {
              res.json(user[0]);
            })
            .catch((err) => res.send("unable to get user"));
        } else {
          res.status(400).json("wrong credentials entered");
        }
      });
  } 
  else if (!email) {
    db.select("username", "hash")
      .from("login")
      .where("username", "=", username)
      .then((data) => {
        const isValid = bcrypt.compareSync(password, data[0].hash);

        if (isValid) {
        
          return db
            .select("*")
            .from("users")
            .where("username", "=", username)
            .then((user) => {
              res.json(user[0]);
            })
            .catch((err) => res.send("unable to get user"));
        } else {
          res.status(400).json("wrong credentials entered");
        }
      });
  }
};

export default handleSignIn;
