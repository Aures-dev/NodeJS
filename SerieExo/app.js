const express = require("express");

const app = express();
const port = 3000;

//route de base qui renvoie un simple message de bienvenue
app.get("/welcome", (req, res) => {
  res.status(200).send("Bienvenu sour mon API Express");
});

//une route qui accepte un paramètre dans l'URL et renvoie un message personnalisé
app.get("/hello/:name?", (req, res) => {
  const { name } = req.params;
  if (name) {
    res.status(200).send(`Bonjour ${name}`);
  } else {
    res.status(400).send("Nom requis");
  }
});

//route `GET` qui accepte des paramètres de requête et envoie une réponse appropriée en fonction de leur validité.
app.get("/user", (req, res) => {
  const { name, age } = req.query;
  if (name && age) {
    res
      .status(200)
      .send(`Utilisateur créé avec succès : ${name}, Age : ${age}`);
  } else {
    res.status(400).send("Données incomplètes ou incorretes");
  }
});
app.get("/dashboard", (req, res) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey) {
    res.status(200).send(`Bienvenu dans le tableau de board`);
  } else {
    res.status(400).send("Accès refusé");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
