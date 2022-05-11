import { axios } from "axios";

export class Servicos{

    constructor(){

    }
    
    consultarDados(resposta){

        axios.get('http://professornilson.com/testeservico/clientes')
        .then(function (response) {
            resposta = response
        console.log(response.data);
        }).catch(function (error) {
        console.log(error);
    
        });
    }
}
