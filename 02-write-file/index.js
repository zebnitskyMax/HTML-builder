const fs = require('fs');
const path = require('path');
const { stdin } = process;
const name = path.basename('text.txt');
const pathName = path.join(__dirname, name);

const writeStream = fs.createWriteStream(pathName);

const EventEmitter = require('events');
const myEmmiter = new EventEmitter();
const welcomUser = () => {
  console.log('Hello my new reviewer.......)))!');
};
myEmmiter.on('greetingEvent', welcomUser);
myEmmiter.emit('greetingEvent');
// writeStream.end('readline');

process.stdout.write('Hello reviewer, input text....!' + '\n');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    console.log('Bye reviewer...))!');
    process.exit();
  } else {
    writeStream.write(data);
  }
  // data = data.toString();
  // process.stdout.write(data + '\n');
});
process.on('SIGINT', () => {
  console.log('Bye reviewer...))!');
  process.exit();
});
