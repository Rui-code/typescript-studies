// Type Alias

// definição
type TGame = {
    title: string;
};

type TDLC = {
    title: string;
};

// intersection
type TGameCollection = TGame & TDLC & { content: boolean };

// implements
// class TCreateGame implements TGameCollection {}

// declarar função
type getSimilars = (title: string) => void;

// Diferenças

// permite declarar tipos primitivos
type TID = string | number;

// pode declarar tuplas normalmente
type TTuple = [number, number];

[1, 2] as TTuple;

// Apenas uma declaração por escopo
// type TJQuery = { a: string };
// type TJQuery = { b: string };

// mais recomendado:
// na maioria das vezes
// React - Props