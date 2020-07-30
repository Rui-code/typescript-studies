// @Component
// @Selector
// @userState('dasdas)

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

function delay (ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
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
    greeting: string;

    constructor(g: string) {
        this.greeting = g;
    }

    // esperar um tempo (ms) e roda o método
    @delay(1000)
    greet () {
        console.log(`Hello ${this.greeting}`);
    }
}

const pessoinha = new Greeter('Rui!');
pessoinha.greet();

// Parameter decorator
// Acessor decorator