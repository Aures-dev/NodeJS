const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

console.log(`1. Animé`);
console.log(`2. mangas`);
console.log(`3. films`);
console.log(`4. série`);
rl.question("Quel est votre choix?", function (input) {
  console.log(`Vous avez entré ${input}`);
  switch (input) {
    case "1":
      console.log(`Vous avez choisi Animé`);
      break;
    case "2":
      console.log(`Vous avez choisi mangas`);
      break;
    case "3":
      console.log(`Vous avez choisi films`);
      break;
    case "4":
      console.log(`Vous avez choisi série`);
      break;

    default:
      console.log("Votre réponse n'est pas valide");
      break;
  }
  rl.close();
});
rl.on("close", () => {
  console.log("Fermeture de l'interface...");
  setTimeout(() => {
    console.log("Bye!");
  }, 3000);
});
