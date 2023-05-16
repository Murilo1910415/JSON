const axios = require('axios');

async function main() {
  try {
    const categories = ['animal', 'history', 'science']; // categorias de piadas para animais, história e ciência
    const jokes = [];

    console.time('forof');

    for (const category of categories) {
      const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);

      if (response && response.data && response.data.value) {
        jokes.push(response.data.value);
      } else {
        console.log(`Não foi possível obter piada da categoria "${category}"`);
      }
    }

    console.timeEnd('forof');
    console.log('Piadas:', jokes);
  } catch (error) {
    console.log('Erro:', error);
  }
}

main();
