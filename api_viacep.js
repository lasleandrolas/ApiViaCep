
const axios = require('axios');

axios.get("http://viacep.com.br/ws/12580000/json/ ")
.then(function(res){
    const ws = res.data;

    if(ws.logradouro) {
        console.log(`CEP: ${ws.cep}`);
        console.log(`Logradouro: ${ws.logradouro}`);
        console.log(`Complemento: ${ws.complemento}`);
        console.log(`Bairro: ${ws.bairro}`);
        console.log(`Localidade: ${ws.localidade}`);
        console.log(`UF: ${ws.uf}`);
        console.log(`Unidade: ${ws.unidade}`);
        console.log(`IBGE: ${ws.ibge}`);
        console.log(`GIA: ${ws.gia}`);
    } else {
        console.log(`CEP: ${ws.cep}`);
        console.log(`Localidade: ${ws.localidade}`);
        console.log(`UF: ${ws.uf}`);
    }
})