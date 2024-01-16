import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;


const loadMovieDetails = async (req, res) => {
  const { selectedID } = req.body;

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedID}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

export default loadMovieDetails;
