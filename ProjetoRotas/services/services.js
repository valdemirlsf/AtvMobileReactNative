import { axios } from "axios";

export default class Servicos{
    
    consultarDados(resposta){

        axios.get('http://professornilson.com/testeservico/clientes')
        .then(function (response) {
            resposta = response
        console.log(response);
        }).catch(function (error) {
        console.log(error);
        
        });
    }
}
