"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        console.log('--------GET--------');
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} 
            at the level ${this.level}`);
    }
}
const Rui = new UserAccount("Ruiran", 20);
console.log(Rui);
Rui.logDetails();
const john = new CharAccount('John', 35, 'johanssen', 80);
console.log(john);
console.log(john.level);
john.logDetails();
john.logCharDetails();
john.setLevel = 500;
console.log(john.getLevel);
