const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'article.txt');
const readableStream = fs.createReadStream(filePath, { highWaterMark:10 });

readableStream.on('data', (bhaks) => {
    try {
        process.stdout.write(`[${bhaks}]`);
    } catch(err) {
        console.log('Error nihh!');
    }
});

readableStream.on('end', () => {
    console.log('\nDone');
});

readableStream.on('error', (err) => {
    console.log('Error', err.message);
});