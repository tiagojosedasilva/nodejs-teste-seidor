const { Router } = require("express");
const sqlite3 = require('sqlite3').verbose();

const routes = new Router();
let carros = [];
let motoristas = [];


// ROTA DE VERIFICACAO

routes.get("/", (req, res) => {
    return res.send({message: "Connected with success in port 3000"});
});

// CRUD CARROS

routes.get("/carros", (req, res) => {
    return res.send({message: carros});
});

routes.get("/carros/:id", (req, res) => {
    return res.send({message: carros[req.params.id-1]});
});

routes.post("/carros", (req, res) => {
    if (req.body) carros.push({id: carros.length + 1, ...req.body});
    return res.send({message: "post success!"});
});

routes.put("/carros/:id", (req, res) => {
    const id = req.params.id-1;
    if (carros.filter(value => value.id === id)) carros[id] = {id: id, ...req.body};
    return res.send({message: "update success!"});
});

routes.delete("/carros/:id", (req, res) => {
    const id = req.params.id;
    carros = carros.filter(value => value.id != id);
    return res.send({message: "delete success!"});
});

// CRUD MOTORISTAS

routes.get("/motoristas", (req, res) => {
    return res.send({message: motoristas});
});

routes.get("/motoristas/:id", (req, res) => {
    return res.send({message: motoristas[req.params.id-1]});
});

routes.post("/motoristas", (req, res) => {
    if (req.body) motoristas.push({id: motoristas.length + 1, ...req.body});
    return res.send({message: "post success!"});
});

routes.put("/motoristas/:id", (req, res) => {
    const id = req.params.id-1;
    if (motoristas.filter(value => value.id === id)) motoristas[id] = {id: id, ...req.body};
    return res.send({message: "update success!"});
});

routes.delete("/motoristas/:id", (req, res) => {
    const id = req.params.id;
    motoristas = motoristas.filter(value => value.id != id);
    return res.send({message: "delete success!"});
});

// CRUD UTILIZACAO

routes.get("/utilizacao", (req, res) => {
    return res.send({message: utilizacao});
});

routes.get("/utilizacao/:id", (req, res) => {
    return res.send({message: utilizacao[req.params.id-1]});
});

routes.post("/utilizacao", (req, res) => {
    if (req.body) utilizacao.push({id: utilizacao.length + 1, ...req.body});
    return res.send({message: "post success!"});
});

routes.put("/utilizacao/:id", (req, res) => {
    const id = req.params.id-1;
    if (utilizacao.filter(value => value.id === id)) utilizacao[id] = {id: id, ...req.body};
    return res.send({message: "update success!"});
});

routes.delete("/utilizacao/:id", (req, res) => {
    const id = req.params.id;
    utilizacao = utilizacao.filter(value => value.id != id);
    return res.send({message: "delete success!"});
});

module.exports = routes;