const axios = require('axios');

async function main() {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories');
    const categories = response.data;

    const jokes = await Promise.all(categories.map(async category => {
      const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
      const joke = response.data;
      return joke.value;
    }));

    const totalCharacters = jokes.reduce((total, joke) => total + joke.length, 0);

    console.log(`As piadas têm um total de ${totalCharacters} caracteres.`);

  } catch (error) {
    console.log('Erro:', error);
  }
}

main();
