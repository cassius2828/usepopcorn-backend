const fetchData = async (req, res) => {
  const { query } = req.body;
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${query}`
  );

  const data = await response.json();
  res.json(data);
};

export default fetchData;
