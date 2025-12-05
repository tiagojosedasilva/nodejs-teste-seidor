const { carros, motoristas, utilizacoes, generateId } = require('../infraestrutura/db.js');

class UtilizacaoService {

    buscarTodos(){
        return utilizacoes;
    };

    buscarPorId(id){
        const utilizacao = utilizacoes.find(value => value.id === id);
        if (!utilizacao) {
            throw new Error("Utilizacao nao encontrada!");
        }
         
        return utilizacao;
    }

    editarUtilizacao(id, utilizacaoAtualizada){
        const indice = utilizacoes.findIndex(value => value.id === id);
        
        if(indice === -1) {
            throw new Error("Utilizacao não encontrada!");
        }

        utilizacoes[indice] = utilizacaoAtualizada;

        return utilizacaoAtualizada;
    }

    deletarUtilizacao(id){
        const indice = utilizacoes.findIndex(value => value.id === id);
        
        if (indice === -1) {
            throw new Error("Utilizacao nao encontrada"); 
        }

        utilizacoes.splice(indice, 1);
        return "Deletado com sucesso!";
    }

    iniciarUtilizacao({idMotorista, idCarro, motivo, dataFinal, dataInicial}){

        if(!idMotorista || !idCarro || !motivo){
            throw new Error("Dados invalidos!");
        }

        if (!motoristas.some(value => value.id === idMotorista) || !carros.some(value => value.id === idCarro)) {
            throw new Error("Dados invalidos!");
        }

        const utilizacoesFiltradas = utilizacoes.filter(value => !value.dataFinal || new Date(value.dataFinal) > new Date());

        if(utilizacoesFiltradas.some(value => value.idMotorista === idMotorista)){
            throw new Error("o motorista já está utilizando um veículo!");
        }

        if (utilizacoesFiltradas.some(value => value.idCarro === idCarro)) {
            throw new Error("o veículo já está em uso!");
        }

        let newUtilizacao = {
            id: generateId(),
            idMotorista: idMotorista,
            idCarro: idCarro,
            motivo: motivo,
            dataInicial: dataInicial ? new Date(dataInicial).toLocaleString() : new Date().toLocaleString(),
            dataFinal: dataFinal ? new Date(dataFinal).toLocaleString() : null,
        }

        utilizacoes.push(newUtilizacao);
        return newUtilizacao;
    }

    finalizarUtilizacao({id, dataFinal}){
        if (!id) {
            throw new Error("Dados inválidos!");
        }

        let utilizacao = utilizacoes.find(value => value.id === id);
        let indice = utilizacoes.findIndex(value => value.id === id);

        if (!utilizacao) {
            throw new Error("Dados não encontrados!"); 
        }

        utilizacao.dataFinal = dataFinal ? new Date(dataFinal).toLocaleString() : new Date().toLocaleString();
        utilizacoes[indice] = utilizacao;

        return utilizacao;
    }
}

module.exports = new UtilizacaoService();