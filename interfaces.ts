interface IGame {
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];

    getSimilars?: (title: string) => void;
}

const tlou: IGame = {
    title: 'The Last Of Us',
    description: 'The best game in the world',
    genre: 'Action',
    // platform: ['PS3', 'PS4'],

    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A plague Tale, Metro`);
    },
}

console.log(tlou.title);
if (tlou.getSimilars) tlou.getSimilars(tlou.title);

interface IDLC extends IGame {
    originalGame: IGame;
    newContent: string[];
}

const leftBehind: IDLC = {
    title: 'The Last Of Us - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ['+3 hours story', 'new characters'],
}

class CreateGame implements IGame {

    title: string;
    description: string;
    genre: string;

    constructor (title: string, description: string, genre: string) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
}