const { carros, generateId } = require('../infraestrutura/db.js');

class CarrosService {

    buscarTodos(){
        return carros;
    };

    buscarPorId(id){
        const carro = carros.find(value => value.id === id);
        if (!carro) {
            throw new Error("Carro nao encontrado!");
        }
         
        return carro;
    }
    
    criarCarro(carro){
        if(!carro.placa || !carro.cor || !carro.marca) {
            throw new Error("Carro inválido. Tente novamente!");
        }
        
        if(!carros.filter(value => value.placa == carro.placa)) {
            throw new Error("Carro já cadastrado");
        }

        const carroTemp = {
            id: generateId(),
            placa: carro.placa,
            cor: carro.cor,
            marca: carro.marca
        }

        carros.push(carroTemp);
        return carroTemp;
    };

    editarCarro(id, carroAtualizado){
        const indice = carros.findIndex(value => value.id === id);
        
        if(indice === -1) {
            throw new Error("Carro não encontrado!");
        }

        carros[indice] = carroAtualizado;

        return carroAtualizado;
    }

    deletarCarro(id){
        const indice = carros.findIndex(value => value.id === id);
        console.log({id, indice});
        
        if (indice === -1 ) {
            throw new Error("Carro nao encontrado"); 
        }

        carros.splice(indice, 1);
        return "Deletado com sucesso!";
    }
}

module.exports = new CarrosService();