const axios = require('axios');

async function main() {
  try {
    const count = 5; // número de piadas que queremos obter
    const jokes = [];

    console.time('for');

    for (let i = 0; i < count; i++) {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      jokes.push(response.data.value);
    }

    console.timeEnd('for');
    console.log('Piadas:', jokes);
  } catch (error) {
    console.log('Erro:', error);
  }
}

main();
