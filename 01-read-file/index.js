const fs = require('fs');
const path = require('path');
const name = path.basename('text.txt');
const pathName = path.join(__dirname, name);
// const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
const stream = fs.createReadStream(pathName, 'utf-8');
let data = '';
// fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
stream.on('data', (chunk) => (data += chunk));
stream.on('end', () => console.log(data));
stream.on('error', (error) => console.log('Error', error.message));
