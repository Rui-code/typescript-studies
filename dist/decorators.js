"use strict";
// @Component
// @Selector
// @userState('dasdas)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Factory
// function Logger (prefix: string) {
//     return (target) => {
//         console.log(`${prefix} - ${target}`);
//     };
// }
// @Logger('awsome')
// class Foo {}
// Class decorator
// function setApiVersion (apiVersion: string) {
//     return (constructor) => {
//         return class extends constructor {
//             version = apiVersion;
//         }
//     };
// }
// decorator - anota a versão da API
// @setApiVersion('2.0.0')
// class API {}
// console.log(new API());
// Property decorator
// function minLength (length: number) {
//     return (target: any, key: string /*| symbol*/) => {
//         let val = target[key];
//         const getter = () => val;
//         const setter = (value: string) => {
//             val = value.length < length 
//                 ? console.log(`Error: você não pode criar ${key} menor que ${length}.`) 
//                 : value;
//         }
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//         })
//     };
// }
// class Movie {
//     // validação - se for < 5 ? error
//     @minLength(50)
//     title: string;
//     constructor (t: string) {
//         this.title = t;
//     }
// }
// const movie = new Movie("Interestellar");
// console.log(movie.title);
// Method decorator
function delay(ms) {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
            return descriptor;
        };
    };
}
class Greeter {
    constructor(g) {
        this.greeting = g;
    }
    // esperar um tempo (ms) e roda o método
    greet() {
        console.log(`Hello ${this.greeting}`);
    }
}
__decorate([
    delay(1000)
], Greeter.prototype, "greet", null);
const pessoinha = new Greeter('Rui!');
pessoinha.greet();
// Parameter decorator
// Acessor decorator
