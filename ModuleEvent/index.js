const eventEmitter = require("events");

const emitting = new eventEmitter();
let count = 0;

emitting.on("celebration", (el) => {
  count++;
  console.log(`Célébration de ${el} ${count} fois`);
});

emitting.emit("celebration", "Doctorat");
emitting.emit("celebration", "Doctorat");
