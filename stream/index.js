const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'input.txt');
// const fileDir = path.resolve(__filename, './stream/output.txt');
const readableStream = fs.createReadStream(filePath, { highWaterMark:15 });
const writeableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('data', (chuaks) => {
    try {
        writeableStream.write(chuaks + '\n');
    } catch(err) {
        console.error('Error nih!');
    }
});

readableStream.on('end', () => {
    console.log('\nDone');
});

readableStream.on('error', (err) => {
    console.log('Error', err.message);
});

writeableStream.on('error', () => {
    console.log('Error while writing to file');
});