const carrosService = require("../../src/services/CarrosService");

let testeCarro;

beforeEach(() => {
    carrosService.buscarTodos().forEach(value => carrosService.deletarCarro(value.id));
    testeCarro = carrosService.criarCarro({placa: "abc-1234", cor: "preto", marca: "Pelejou"});
});

describe("Testando CRUD de carros", () => {
    
    test("retorno de os carros", () => {
        const todosCarros = carrosService.buscarTodos();
        expect(todosCarros.length).toBe(1);
        expect(todosCarros[0].placa).toBe("abc-1234");
    });

    test("buscando por id", () => {
        const carroEncontrado = carrosService.buscarPorId(testeCarro.id);
        expect(carroEncontrado.id).toBe(testeCarro.id);
        expect(carroEncontrado.placa).toBe("abc-1234");
    });

    test('Criando um novo carro', () => {
        const newCar = carrosService.criarCarro({ placa: 'eo2o-2023', cor: 'Preto', marca: 'BMW' });
        expect(newCar).toHaveProperty('id');
        expect(newCar.placa).toBe('eo2o-2023');
        expect(carrosService.buscarTodos().length).toBe(2);
    });

    test("Editando carro", () => {
        const dado = { 
            id: testeCarro.id, placa: "abc-1234", cor: "preto", marca: "Pelejou"
        };
        
        testeCarro.cor = 'Amarelo';
        const carroEditado = carrosService.editarCarro(testeCarro.id, testeCarro);

        expect(carroEditado.cor).toBe('Amarelo');
        expect(carroEditado.placa).toBe('abc-1234');
    })
})
