const handleSignIn = (req, res, bcrypt, db) => {
  const { email, username, password } = req.body;
  if ((!email && !username) || !password) {
    return res.status(400).json("incorrect submission");
  }

// * allows use of function and args to clean up code and improve readability
  const loginMethod = (methodStr, method) => {
    db.select(methodStr, "hash")
      .from("login")
      .where(methodStr, "=", method)
      .then((data) => {
        const isValid = bcrypt.compareSync(password, data[0].hash);

        if (isValid) {
          return db
            .select("*")
            .from("users")
            .where(methodStr, "=", method)
            .then((user) => {
              res.json(user[0]);
            })
            .catch((err) => res.send("unable to get user"));
        } else {
          res.status(400).json("wrong credentials entered");
        }
      });
  };

  if (!username) {
    loginMethod("email", email);
  } else if (!email) {
    loginMethod("username", username);
  }
};

export default handleSignIn;
