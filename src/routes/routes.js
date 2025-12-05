const { Router } = require("express");
const carrosService = require('../services/CarrosService.js');
const motoristasService = require('../services/MotoristaService.js');
const utilizacaoService = require('../services/UtilizacaoService.js');

const routes = new Router();
let carros = [];
let motoristas = [];

// Como estou utilizando blocos trycatch, decidi criar uma funcao que retorna
// o erro, assim evitando repeticao de codigo e padronizando o retorno dos erros.

const errorHandler = (res, error) => {
    console.error(error);
    const statusCode = error.message.includes('nao encontrado') || error.message.includes("Missing") ? 404 : 400;
    res.status(statusCode).json({error: error.message});
};

routes.get("/", (req, res) => {
    return res.send({message: "Connected with success in port 3000"});
});

// CRUD CARROS

routes.get("/carros", (req, res) => {
    try {
        const carros = carrosService.buscarTodos();
        res.status(201).json(carros);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.get("/carros/:id", (req, res) => {
    try {
        const carro = carrosService.buscarPorId(req.params.id);
        res.json(carro);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.post("/carros", (req, res) => {
    try {
        const carro = carrosService.criarCarro(req.body);
        res.status(201).json(carro);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.put("/carros/:id", (req, res) => {
    try {
        const carro = carrosService.editarCarro(req.params.id, req.body);
        res.json(carro);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.delete("/carros/:id", (req, res) => {
    try {
        carrosService.deletarCarro(req.params.id);
        res.status(204).send();
    } catch (error) {
        errorHandler(res, error);
    }
});

// CRUD MOTORISTAS

routes.get("/motoristas", (req, res) => {
    try {
        const carros = motoristasService.buscarTodos();
        res.status(201).json(carros);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.get("/motoristas/:id", (req, res) => {
    try {
        const motorista = motoristasService.buscarPorId(req.params.id);
        res.json(motorista);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.post("/motoristas", (req, res) => {
    try {
        const motoristamotorista = motoristasService.criarMotorista(req.body);
        res.status(201).json(motoristamotorista);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.put("/motoristas/:id", (req, res) => {
    try {
        const motorista = motoristasService.editarMotorista(req.params.id, req.body);
        res.json(motorista);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.delete("/motoristas/:id", (req, res) => {
    try {
        motoristasService.deletarMotorista(req.params.id);
        res.status(204).send();
    } catch (error) {
        errorHandler(res, error);
    }
});

// CRUD UTILIZACAO


routes.get("/utilizacao", (req, res) => {
    try {
        const carros = utilizacaoService.buscarTodos();
        res.status(201).json(carros);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.get("/utilizacao/:id", (req, res) => {
    try {
        const utilizacao = utilizacaoService.buscarPorId(req.params.id);
        res.json(utilizacao);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.post("/utilizacao", (req, res) => {
    try {
        const utilizacao = utilizacaoService.iniciarUtilizacao(req.body);
        res.status(201).json(utilizacao);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.put("/utilizacao/:id", (req, res) => {
    try {
        const utilizacao = utilizacaoService.editarUtilizacao(req.params.id, req.body);
        res.json(utilizacao);
    } catch (error) {
        errorHandler(res, error);
    }
});

routes.delete("/utilizacao/:id", (req, res) => {
    try {
        utilizacaoService.deletarUtilizacao(req.params.id);
        res.status(204).send();
    } catch (error) {
        errorHandler(res, error);
    }
});


module.exports = routes;