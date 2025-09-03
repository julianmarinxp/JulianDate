const dateFormatter = require('juliandate');

console.log('Timestamp', dateFormatter.getTimestamp());
console.log('Fecha en Espanol:', dateFormatter.getLongTime());
console.log('Fecha en ingles: ', dateFormatter.getLongTime('en-US'));


