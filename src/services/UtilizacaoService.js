const { utilizacoes, generateId } = require('../infraestrutura/db.js');

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
    
    criarUtilizacao(utilizacao){

        if(!utilizacao.dataInicial || !utilizacao.dataFinal || !utilizacao.motorista || !utilizacao.carro || motivo) {
            throw new Error("Utilizacao inválida. Tente novamente!");
        }

        const utilizacaoTemp = {
            id: generateId(),
            nome: utilizacao.nome,
        }

        utilizacoes.push(utilizacaoTemp);
        return utilizacaoTemp;
    };

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
}

module.exports = new UtilizacaoService();