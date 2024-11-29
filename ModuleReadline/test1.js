const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("monfichier.txt"),
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  console.log(`Ligne du fichier : ${line}`);
});
