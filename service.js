const axios = require('axios');

const getMultipleJokes = async (count) => {
  try {
    const jokes = [];
    for (let i = 0; i < count; i++) {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      jokes.push(response.data.value);
    }
    return jokes;
  } catch (error) {
    console.error(error);
  }
};
