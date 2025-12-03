const { motoristas, generateId } = require('../infraestrutura/db.js');

class MotoristaService {

    buscarTodos(){
        return motoristas;
    };

    buscarPorId(id){
        const motorista = motoristas.find(value => value.id === id);
        if (!motorista) {
            throw new Error("Motorista nao encontrado!");
        }
         
        return motorista;
    }

    filtrarMotorista(nome){
        const filtro = motoristas;

        if(nome) {
            filtro = filtro.filter(value => value.nome.toLowerCase().includes(nome.toLowerCase()));
        }

        return filtro;
    }
    
    criarMotorista(motorista){
        if(!motorista.nome) {
            throw new Error("Motorista inválido. Tente novamente!");
        }

        const motoristaTemp = {
            id: generateId(),
            nome: motorista.nome,
        }

        motoristas.push(motoristaTemp);
        return motoristaTemp;
    };

    editarMotorista(id, motoristaAtualizado){
        const indice = motoristas.findIndex(value => value.id === id);
        
        if(indice === -1) {
            throw new Error("Motorista não encontrado!");
        }

        motoristas[indice] = motoristaAtualizado;

        return motoristaAtualizado;
    }

    deletarMotorista(id){
        const indice = motoristas.findIndex(value => value.id === id);
        
        if (indice === -1 ) {
            throw new Error("Motorista nao encontrado"); 
        }

        motoristas.splice(indice, 1);
        return "Deletado com sucesso!";
    }
}

module.exports = new MotoristaService();