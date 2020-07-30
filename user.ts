// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
    id: number | string,
    name: string,
    email?: string, // ? -> optional
}

const account: AccountInfo = {
    id: 123,
    name: 'Rui',
    // email: 'rui@rui.rui',
}

type CharInfo = {
    nickname: string,
    level: number,
}

const char: CharInfo = {
    nickname: 'RuiOliv99',
    level: 200,
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    name: 'Ruiran',
    nickname: 'RuiOliv99',
    id: '123',
    level: 100,
}