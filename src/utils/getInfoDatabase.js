const path = require('path');
const fs = require('fs');

function getInfoDatabase(filename){
    const filePath = path.join(__dirname, '..', 'database', `${filename}.json`);
    const readFile = fs.readFileSync(filePath, 'utf8');
    const info = JSON.parse(readFile);

    return info;
}

console.log(getInfoDatabase("users"));

module.exports = getInfoDatabase;