const axios = require('axios');

let query = "Chuck"
let posicao = 40

axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then(response => {
        // antes do filtro
        const totalAntes = response.data.total
        const data = response.data.result;

        // aplicando o filtro
        let filteredData = data.filter(item => item.value.includes(query, posicao))

        // mostrando antes e depois do filtro
        console.log(` procurando palavra ${query} a partir da posição ${posicao}
        Antes do filtro ${totalAntes}, depois do filtro ${filteredData.length}`)
    })
    .catch(error => {
        console.log(error);
    });