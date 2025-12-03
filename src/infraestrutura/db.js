const crypto = require('crypto');

const carros = [];
const motoristas = [];
const utilizacoes = [];

const generateId = () => crypto.randomUUID();

module.exports = {
    carros,
    motoristas,
    utilizacoes,
    generateId,
};