// Interfaces

// definição
interface IGame {
    title: string;
}

// interface IDLC {
//     extra: string;
// }

// intersecção | extend
interface IGameCollection extends IGame, IDLC {}

// implements
// class CreateGame implements IGameCollection {}

// declarar função
interface IgetSimilars {
    (title: string): void;
}

// Diferenças
// interface IID extends number {}

// não consigo definir tuplas em interfaces
interface ITuple {
    0:number;
    1:number;
}

[1, 2, 3] as ITuple;

// Pode ter multiplas declaraçoes e ele une de 
// mesmo nome

interface IJQuery {
    a: string;
}

interface IJQuery {
    b: string;
}

const $: IJQuery = {
    a: 'bla',
    b: 'foo',
}

// vantagem: ao criar libs preferir interfaces pois são extensíveis
// criando objetos/classes (POO)