const axios = require('axios');

axios.get('https://api.chucknorris.io/jokes/random')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });