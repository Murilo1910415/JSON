const axios = require('axios');

async function main() {
  try {
    const animal = 'animal'; // termo de pesquisa para piadas sobre animais
    const jokes = [];

    console.time('for-in');

    const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${animal}`);

    for (const joke of response.data.result) {
      jokes.push(joke.value);
    }

    console.timeEnd('for-in');
    console.log('Piadas sobre animais:', jokes);
  } catch (error) {
    console.log('Erro:', error);
  }
}

main();
