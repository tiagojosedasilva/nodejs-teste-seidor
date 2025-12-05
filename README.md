Sistema de Controle de Utilização de Automóveis (WebAPI Node.js)

Este projeto implementa uma WebAPI em Node.js com Express.js, utilizando persistência em memória (in-memory) para gerenciar o cadastro e a utilização de veículos e motoristas de uma empresa.

Funcionalidades Implementadas

O sistema cobre todas as funcionalidades de CRUD (Create, Read, Update, Delete) para Automóveis e Motoristas, e implementa as rotas para Utilização de Automóveis, respeitando as regras de negócio solicitadas.

Regras de Negócio

Exclusividade do Automóvel: Um automóvel só pode ser utilizado por um motorista por vez.

Exclusividade do Motorista: Um motorista que já esteja utilizando um automóvel não pode utilizar outro automóvel ao mesmo tempo.

Como Executar e Testar a Aplicação

Pré-requisitos

Você precisa ter o Node.js (versão 16 ou superior) instalado no seu sistema.

1. Setup (Instalação das dependências)

Navegue até o diretório raiz do projeto e execute o seguinte comando para instalar o Express e o Jest:

npm install



2. Executar a Aplicação

Execute a aplicação Node.js usando o script de inicialização definido no package.json:

npm start



O servidor será iniciado na porta 3000 (ou na porta definida pela variável de ambiente PORT):

Server running at http://localhost:3000
API documentation: see README.md



3. Testes Unitários

Para rodar os testes unitários que garantem a correta implementação das regras de negócio (localizados em tests/UsageService.test.js e outros arquivos de teste):

npm test



4. Endpoints da API (Exemplos)

A API base está em http://localhost:3000/api.

🚗 Automóveis (/carros)

| Método        | Rota          | Corpo da Requisição (JSON)                                                  | Descrição               |
|---------------|---------------|-----------------------------------------------------------------------------|-------------------------|
| GET           | /carros       | N/A                                                                         | Buscar todos os carros  |
| GET           | /carros/:id   | N/A                                                                         | Buscar um carro por id  |
| POST          | /carros       | {"placa": "XYZ-0000", "cor": "Preto", "marca": "Ford"}                      | Cadastra um novo carro  |
| PUT           | /carros/:id   | {"id": 734e784a...", "placa": "XYZ-0000", "cor": "Branco", "marca": "Fiat"} | Edita um carro          |
| DELETE        | /carros/:id   | N/A                                                                         | Deleta um carro         |

🧑‍  Motoristas (/motoristas)

| Método        | Rota              | Corpo da Requisição (JSON)                                   | Descrição                   |
|---------------|-------------------|--------------------------------------------------------------|-----------------------------|
| GET           | /motoristas       | N/A                                                          | Buscar todos os motoristas  |
| GET           | /motoristas/:id   | N/A                                                          | Buscar um motoristas por id |
| POST          | /motoristas       | {"nome": "Tiago José da Silva"}                              | Cadastra um novo motoristas |
| PUT           | /motoristas/:id   | {"id": "734e784a...", "nome": "Tiago José Alemida da Silva"} | Edita um motoristas         |
| DELETE        | /motoristas/:id   | N/A                                                          | Deleta um motoristas        |


🚦 Utilizações (/utilizacao)

| Método        | Rota              | Corpo da Requisição (JSON)                                                                                                                                      | Descrição                    |
|---------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| GET           | /utilizacao       | N/A                                                                                                                                                             | Buscar todos os utilizacao   |
| GET           | /utilizacao/:id   | N/A                                                                                                                                                             | Buscar um utilizacao por id  |
| POST          | /utilizacao       | {"idMotorista": "734e784a...", "idCarro": 734e784a...", "motivo": "Visita a...", "dataInicial": "01/01/2025", "dataFinal": "05/01/2025"}                        | Iniciar uma nova utilizacao  |
| PUT           | /utilizacao/:id   | { "id": "734e784a...", "idMotorista": "734e784a...", "idCarro": 734e784a...", "motivo": "Visita a...", "dataInicial": "01/01/2025", "dataFinal": "05/01/2025"}  | Edita um utilizacao          |
| DELETE        | /utilizacao/:id   | N/A                                                                                                                                                             | Deleta um utilizacao         |
