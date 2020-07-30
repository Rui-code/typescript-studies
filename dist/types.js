"use strict";
// boolean (true / false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = 'foo';
message = "foo";
message = `foo ${isOpen}`;
// number (int, float, hex, binary)
let total;
total = 0x14;
// array (let nome type[] | let nome: Array<type>)
let items;
items = [1, 2, 3];
let values;
values = [1, 2, 3];
// tuple (let nome: [type[,type]])
let title;
title = [1, 'foo', 'bar'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#FFF";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NÃO É LEGAL
let coisa;
coisa = true;
coisa = [];
coisa = 1;
// void (vazio)
function logger() {
    console.log('foo');
}
let variable;
// never
function error() {
    throw new Error('error');
}
// object
let cart;
cart = {
    key: 'fi'
};
// Type Inference
let message2 = 'mensagem definida';
message2 = 'string nova';
window.addEventListener('click', (e) => {
    console.log(e.target);
});
