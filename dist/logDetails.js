"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}`);
}
function logInfo(uid, user) {
    console.log(`An user with ${uid} has a title as ${user}`);
}
function renderPlarform(platform) {
    return platform;
}
renderPlarform('ios');
logDetails(123, 'Sapato');
logDetails('123', 'Sapato');
logInfo(123, 'Ruiran');
logInfo('123', 'Ruiran');
