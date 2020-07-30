"use strict";
const tlou = {
    title: 'The Last Of Us',
    description: 'The best game in the world',
    genre: 'Action',
    // platform: ['PS3', 'PS4'],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A plague Tale, Metro`);
    },
};
console.log(tlou.title);
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
const leftBehind = {
    title: 'The Last Of Us - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ['+3 hours story', 'new characters'],
};
class CreateGame {
    constructor(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
}
