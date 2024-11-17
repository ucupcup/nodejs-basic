const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}!`);
}

myEmitter.on('birthday', birthdayEventListener);
myEmitter.emit('birthday', 'Ucupcup' );