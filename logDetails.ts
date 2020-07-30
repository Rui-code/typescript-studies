// type alias
type Uid = number | string;

function logDetails (uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo (uid: Uid, user: string) {
    console.log(`An user with ${uid} has a title as ${user}`);
}

type Plarform = 'Windows' | 'Linux' | 'Mac OS' | 'ios';

function renderPlarform (platform: Plarform) {
    return platform;
}

renderPlarform('ios');

logDetails(123, 'Sapato');
logDetails('123', 'Sapato');

logInfo(123, 'Ruiran');
logInfo('123', 'Ruiran');