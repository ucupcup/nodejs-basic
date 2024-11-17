const fs = require('fs');
const path = require('path');

const filePathNotes = path.resolve(__dirname, 'notes.txt');

fs.readFile(filePathNotes, 'utf-8', (err, data) => {
    if (err) {
        console.error('Gagal membaca berkas!', err);
        return;
    }
    console.log(data);
});

console.log('Harusnya ini dieksekusi sebelum file selesai di path');


// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal Membaca Berkas!');
//         return;
//     }
//     console.log(data);
// };

// fs.readFile('notes.txt', 'utf-8', fileReadCallback);
